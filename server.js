const express = require('express');
const app = express();
const port = 3000;
const admin = require('firebase-admin');
const cors = require('cors');

// Firebase Initialization
const serviceAccount = require('./tpl-platform-4079e-firebase-adminsdk-xi77l-2ff4dd728e.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();

// CORS Configuration
const corsOptions = {
  origin: 'http://localhost:8080', // or use '*' to allow all origins
  optionsSuccessStatus: 200,
};

// Randomization Functions
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

app.use(cors(corsOptions));

// Test Endpoint
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Stadiums Endpoint
app.get('/api/stadiums', async (req, res) => {
  try {
    const stadiumsSnapshot = await db.collection('stadiums').get();
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

// Randomize Pitch Endpoint
app.get('/api/pitch-randomizer', async (req, res) => {
  try {
    const stadiumsSnapshot = await db.collection('stadiums').get();
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

// Server Start
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
