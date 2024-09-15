const express = require("express")
const { supabase } = require("./server")
const {
  getRandomStadium,
  getRandomPitchType,
  getRandomCracks,
  getRandomHardness,
  getRandomPitchDay,
} = require("../utils")

const router = express.Router()

// Fetch stadiums from Supabase
router.get("/stadiums", async (req, res) => {
  try {
    const { data: stadiums, error } = await supabase
      .from("stadiums")
      .select("name, country, isLicensed")

    if (error) throw error

    res.json(stadiums)
  } catch (error) {
    console.error("Error fetching stadiums:", error)
    res.status(500).send("Internal Server Error")
  }
})

// Pitch randomizer
router.get("/pitch-randomizer", async (req, res) => {
  try {
    const { data: stadiums, error } = await supabase
      .from("stadiums")
      .select("name, country, isLicensed")

    if (error) throw error

    const stadiumDetails = stadiums.map(({ name, country, isLicensed }) => ({
      name,
      country,
      isLicensed,
    }))
    const randomStadium = getRandomStadium(stadiumDetails)
    const randomPitch = {
      stadium: randomStadium.name,
      country: randomStadium.country,
      isLicensed: randomStadium.isLicensed,
      pitchType: getRandomPitchType(),
      cracks: getRandomCracks(),
      hardness: getRandomHardness(),
      pitchDay: getRandomPitchDay(),
    }

    res.json(randomPitch)
  } catch (error) {
    console.error("Error in pitch randomizer:", error)
    res.status(500).send("Internal Server Error")
  }
})

module.exports = router
