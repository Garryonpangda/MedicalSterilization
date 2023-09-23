import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        userInfo: null,
        userrole: ""
    }),
    getters: {

    },
    actions: {
        updateUserInfo(newUserInfo) {
            this.userInfo = newUserInfo
        },
        setRole() {
            var hw = "ROLE_HW"
            var pa = "ROLE_PA"
            var oa = "ROLE_OA"
            var roles = this.userInfo.roles
            for (let i = 0; i < roles.length; i++) {
                if (roles[i] === hw) {
                    this.userrole = hw
                    return hw
                }

            }

            for (let i = 0; i < roles.length; i++) {
                if (roles[i] === pa) {
                    this.userrole = pa
                    return pa
                }
            }

            for (let i = 0; i < roles.length; i++) {
                if (roles[i] === oa) {
                    this.userrole = oa
                    return oa
                }
            }

            return false
        }
    }
}, { persist: true })