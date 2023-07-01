export default [
    {
        path: '/home',
        component: () => import('@/pages/Home/Home.vue'),
        children: [
            { 
                path:"trainmodel",
                component: () => import("@/pages/TrainModel/TrainModel.vue")
            },
         
        ]
    }
]