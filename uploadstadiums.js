const admin = require('firebase-admin');
const serviceAccount = require('./tpl-platform-4079e-firebase-adminsdk-xi77l-2ff4dd728e.json'); // Replace with your SDK path
const data = require('./stadiums.json'); // Path to your JSON file

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

async function uploadData() {
  const batch = db.batch();
  data.forEach((item) => {
    const docRef = db.collection('stadiums').doc(); // Automatically generates a unique doc ID
    batch.set(docRef, item);
  });

  return batch.commit();
}

uploadData()
  .then(() => console.log('Stadium data uploaded successfully!'))
  .catch((error) => console.error('Error uploading data: ', error));
