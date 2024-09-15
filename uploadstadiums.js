// Replace Firebase setup with Supabase setup
const { createClient } = require("@supabase/supabase-js")

const supabaseUrl = "https://fqvhmolcuyoxomwmhydw.supabase.co" // Replace with your Supabase project URL
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZxdmhtb2xjdXlveG9td21oeWR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5MTIzNDksImV4cCI6MjA0MTQ4ODM0OX0.yhI-E6eydUiX9PYou_3jcCdyGq0V1rb1UX42DXBR8tw" // Replace with your Supabase API key

const supabase = createClient(supabaseUrl, supabaseKey)

async function uploadData() {
  const stadiumData = require("./stadiums.json") // Path to your JSON file

  for (let item of stadiumData) {
    let response = await supabase
      .from("stadiums")
      .insert([
        { name: item.name, country: item.country, isLicensed: item.isLicensed },
      ])

    if (response.error) {
      console.error("Error uploading data: ", response.error.message)
    } else {
      console.log("Stadium data uploaded successfully for", item.name)
    }
  }
}

uploadData()
