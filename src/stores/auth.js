import { defineStore } from 'pinia'
import api from '../services/api'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || null,
    error: null,
  }),
  actions: {
    async login(email, password) {
      try {
        const res = await api.post('/auth/login', { email, password })
        this.token = res.data.token
        localStorage.setItem('token', this.token)
        this.error = null
      } catch (err) {
        this.error = err.response?.data?.message || 'Login failed'
      }
    },
    logout() {
      this.token = null
      localStorage.removeItem('token')
    }
  }
})
