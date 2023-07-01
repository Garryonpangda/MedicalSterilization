export default [
    {
        path: '/home',
        component: () => import('@/pages/Home/Home.vue'),
        children: [
            { 
                path:'statis',
                component: () => import("@/pages/Statis/Statis.vue")
            }
          
        ]
    }
]