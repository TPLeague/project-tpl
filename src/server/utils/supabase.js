// src/supabase.js
const { createClient } = require("@supabase/supabase-js")
const dotenv = require("dotenv")

dotenv.config({ path: "../../../.env" })

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error("Supabase URL or Key is missing. Please check your .env file.")
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

module.exports = { supabase }
