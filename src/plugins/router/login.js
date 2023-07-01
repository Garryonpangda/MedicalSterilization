export default [
    {
        path: "/",
        redirect: "/login",
    },
    {
        path: '/login',
        component: () => import('@/pages/Login/Login.vue'),
        children: [
            {
                path: '',
                component: () => import("@/pages/Login/LoginCard/LoginCard.vue")
            },
            {
                path: '/auth',
                component: () => import("@/pages/Login/LoginAuth/LoginAuth.vue")
            }
        ]
    }
]