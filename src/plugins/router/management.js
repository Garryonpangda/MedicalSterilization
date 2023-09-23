export default [{
    path: '/home',
    component: () =>
        import ('@/pages/Home/Home.vue'),
    meta: {
        title: '运维管理',
        requiresAuth: true
    },
    children: [{
            path: 'devicemanage',
            component: () =>
                import ("@/pages/Management/DeviceManage.vue"),
            meta: {
                title: '设备管理',
                requiresAuth: true
            },
        },
        {
            path: 'organizationmanage',
            component: () =>
                import ("@/pages/Management/Organization.vue"),
            meta: {
                title: '组织管理',
                requiresAuth: true
            },
        }

    ]
}]