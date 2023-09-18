export default [
    {
        path: '/home',
        component: () => import('@/pages/Home/Home.vue'),
        meta: {
            title: '主控制台'
          },
        children: [
            { 
                path: '',
                redirect: 'screen' // 添加重定向
            },
            { 
                path: 'screen',
                component: () => import("@/pages/Screen/index.vue"),
                meta: {
                    title: '控制面板'
                  },
            },
            
         
        ]
    }
]
