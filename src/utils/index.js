const { v4: uuidv4 } = require("uuid")

function generateUUID() {
  return uuidv4()
}

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)]
}

function getRandomStadium(stadiums) {
  return getRandomElement(stadiums)
}

function getRandomPitchType() {
  const pitchTypes = [
    "Standard",
    "Grassy",
    "Grassy/Dry",
    "Grassy/Dusty",
    "Dry",
    "Dusty",
  ]
  return getRandomElement(pitchTypes)
}

function getRandomCracks() {
  const cracks = ["None", "Light", "Heavy"]
  return getRandomElement(cracks)
}

function getRandomHardness() {
  const hardness = ["Hard", "Medium", "Soft"]
  return getRandomElement(hardness)
}

function getRandomPitchDay() {
  return Math.floor(Math.random() * 2) + 1
}

module.exports = {
  generateUUID,
  getRandomElement,
  getRandomStadium,
  getRandomPitchType,
  getRandomCracks,
  getRandomHardness,
  getRandomPitchDay,
}
