import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: {}
  }),
  getters: {

  },
  actions: {

  }
}, { persist: true })
