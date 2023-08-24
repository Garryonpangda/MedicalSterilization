import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        userInfo: {}
    }),
    getters: {

    },
    actions: {
        updateUserInfo(newUserInfo) {
            this.userInfo = newUserInfo
        }
    }
}, { persist: true })