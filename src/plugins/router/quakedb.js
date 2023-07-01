export default [
    {
        path: '/home',
        component: () => import('@/pages/Home/Home.vue'),
        children: [
            { 
                path:'quakedb',
                component: () => import("@/pages/QuakeDb/QuakeDb.vue")
            }
          
        ]
    }
]