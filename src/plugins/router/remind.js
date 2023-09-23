export default [{
    path: '/home',
    component: () =>
        import ('@/pages/Home/Home.vue'),
    meta: {
        title: '提醒列表',
        requiresAuth: true
    },
    children: [{
            path: "malfunction",
            component: () =>
                import ("@/pages/Remind/Malfunction.vue"),
            meta: {
                title: '报障列表',
                requiresAuth: true
            },
        },

    ]
}]