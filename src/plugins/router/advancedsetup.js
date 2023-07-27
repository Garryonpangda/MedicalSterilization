export default [
    {
        path: '/home',
        component: () => import('@/pages/Home/Home.vue'),
        meta: {
            title: '高级设置'
          },
        children: [
            { 
                path:"account",
                component: () => import("@/pages/AdvancedSetup/AccountManage.vue"),
                meta: {
                    title: '账号管理'
                  },
            },
            { 
                path:"project",
                component: () => import("@/pages/AdvancedSetup/ProjectManage.vue"),
                meta: {
                    title: '项目管理'
                  },
            },
            { 
                path:"role",
                component: () => import("@/pages/AdvancedSetup/RoleManage.vue"),
                meta: {
                    title: '角色管理'
                  },
            },
         
        ]
    }
]