export default [{
    path: '/home',
    component: () =>
        import ('@/pages/Home/Home.vue'),
    meta: {
        title: '系统管理',
        requiresAuth: true
    },
    children: [{
            path: "changepassword",
            component: () =>
                import ("@/pages/SystemSetup/ChangePassword.vue"),
            meta: {
                title: '修改密码',
                requiresAuth: true
            },
        },
        {
            path: "changephone",
            component: () =>
                import ("@/pages/SystemSetup/ChangePhone.vue"),
            meta: {
                title: '修改手机号',
                requiresAuth: true
            },
        },
        {
            path: "changeemail",
            component: () =>
                import ("@/pages/SystemSetup/ChangeEmail.vue"),
            meta: {
                title: '修改邮箱',
                requiresAuth: true
            },
        },

    ]
}]