export default [
    {
        path: '/home',
        component: () => import('@/pages/Home/Home.vue'),
        meta: {
            title: '系统管理'
          },
        children: [
            { 
                path:"changepassword",
                component: () => import("@/pages/SystemSetup/ChangePassword.vue"),
                meta: {
                    title: '修改密码'
                  },
            },
            { 
                path:"changephone",
                component: () => import("@/pages/SystemSetup/ChangePhone.vue"),
                meta: {
                    title: '修改手机号'
                  },
            },
            { 
                path:"changeemail",
                component: () => import("@/pages/SystemSetup/ChangeEmail.vue"),
                meta: {
                    title: '修改邮箱'
                  },
            },
         
        ]
    }
]