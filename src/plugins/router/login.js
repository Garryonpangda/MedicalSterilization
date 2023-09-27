export default [{
        path: "/",
        redirect: "/login",
    },
    {
        path: '/login',
        component: () =>
            import ('@/pages/Login/Login.vue'),
        children: [

        ],
        meta: {
            isLogin: true
        }
    }
]