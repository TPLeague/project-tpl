const { v4: uuidv4 } = require('uuid');

// Define the generateUUID function
function generateUUID() {
  return uuidv4(); // Generates a UUID
}

// Use the function to generate a UUID
const generatedPitchId = generateUUID();
console.log(generatedPitchId); // This will print a new UUID to the console

require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

// Assuming the port is set in an environment variable or defaults to 3000
const port = process.env.PORT || 3000;

// Firebase Admin Setup
const admin = require('firebase-admin');
const serviceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Utility functions for random data generation
function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomStadium(stadiums) {
  return getRandomElement(stadiums);
}

function getRandomPitchType() {
  const pitchTypes = [
    'Standard',
    'Grassy',
    'Grassy/Dry',
    'Grassy/Dusty',
    'Dry',
    'Dusty',
  ];
  return getRandomElement(pitchTypes);
}

function getRandomCracks() {
  const cracks = ['None', 'Light', 'Heavy'];
  return getRandomElement(cracks);
}

function getRandomHardness() {
  const hardness = ['Hard', 'Medium', 'Soft'];
  return getRandomElement(hardness);
}

function getRandomPitchDay() {
  return Math.floor(Math.random() * 2) + 1;
}

// CORS Configuration
app.use(cors({ origin: 'http://localhost:8080', optionsSuccessStatus: 200 }));

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/stadiums', async (req, res) => {
  try {
    const stadiumsSnapshot = await admin
      .firestore()
      .collection('stadiums')
      .get();
    const stadiums = stadiumsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.json(stadiums);
  } catch (error) {
    console.error('Error fetching stadiums:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/api/pitch-randomizer', async (req, res) => {
  try {
    const stadiumsSnapshot = await admin
      .firestore()
      .collection('stadiums')
      .get();
    const stadiums = stadiumsSnapshot.docs.map((doc) => doc.data().name);
    const randomPitch = {
      stadium: getRandomStadium(stadiums),
      pitchType: getRandomPitchType(),
      cracks: getRandomCracks(),
      hardness: getRandomHardness(),
      pitchDay: getRandomPitchDay(),
    };
    res.json(randomPitch);
  } catch (error) {
    console.error('Error in pitch randomizer:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
