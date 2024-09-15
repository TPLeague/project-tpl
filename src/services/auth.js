import { supabase } from "@/utils/supabase"

// src/services/auth.js

export const authService = {
  async register(email, password) {
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
    })
    if (error) throw error
    return user
  },

  async login(email, password) {
    const { user, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) throw error
    return user
  },

  async logout() {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  },

  async resetPassword(email) {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/update-password`,
    })
    if (error) throw error
    return data
  },

  async updatePassword(newPassword) {
    const { user, error } = await supabase.auth.updateUser({
      password: newPassword,
    })
    if (error) throw error
    return user
  },

  async getCurrentUser() {
    const {
      data: { user },
    } = await supabase.auth.getUser()
    return user
  },
}
