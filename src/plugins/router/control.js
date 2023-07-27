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
                redirect: 'control' // 添加重定向
            },
            { 
                path: 'control',
                component: () => import("@/pages/Home/ControlPanel.vue"),
                meta: {
                    title: '控制面板'
                  },
            },
            
         
        ]
    }
]
