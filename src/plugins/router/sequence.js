export default [
    {
        path: '/home',
        component: () => import('@/pages/Home/Home.vue'),
        children: [
            { 
                path:"sequence",
                component: () => import("@/pages/Sequence/Sequence.vue")
            },
         
        ]
    }
]