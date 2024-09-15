const express = require("express")
const cors = require("cors")
const router = require("./routes")
const { supabase } = require("./utils/supabase")

// Initialize Express app
const app = express()
const port = import.meta.env.PORT || 3000

// CORS Configuration
app.use(cors({ origin: "http://localhost:5173", optionsSuccessStatus: 200 }))

// Use router
app.use("/api", router)

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})



module.exports = { supabase }
