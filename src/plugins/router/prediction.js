export default [
    {
        path: '/home',
        component: () => import('@/pages/Home/Home.vue'),
        children: [
            { 
                path:"prediction",
                component: () => import("@/pages/Prediction/Prediction.vue")
            },
         
        ]
    }
]