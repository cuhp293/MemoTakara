import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    isLoggedIn: false,
  }),

  actions: {
    async register(userData) {
      // Xử lý đăng ký
      try {
        // Gọi API đăng ký
        // Cập nhật state
        this.user = userData
        this.isLoggedIn = true
        return true
      } catch (error) {
        console.error('Register error:', error)
        return false
      }
    },

    logout() {
      this.user = null
      this.isLoggedIn = false
    },
  },
})
