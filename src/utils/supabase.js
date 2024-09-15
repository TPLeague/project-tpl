import { createClient } from "@supabase/supabase-js"

// Access environment variables using import.meta.env in Vite
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_KEY

console.log("Supabase URL is", supabaseUrl ? "set" : "NOT SET")
console.log("Supabase Anon Key is", supabaseAnonKey ? "set" : "NOT SET")

if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    "Supabase URL or Anon Key is missing. Please check your .env file."
  )
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
