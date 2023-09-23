export default [{
    path: '/home',
    component: () =>
        import ('@/pages/Home/Home.vue'),

    meta: {
        title: '数据分析',
        requiresAuth: true
    },
    children: [{
            path: 'analysis',
            component: () =>
                import ("@/pages/DataAnalysis/Analysis.vue"),
            meta: {
                title: '数据板',
                requiresAuth: true
            },

        }

    ]
}]