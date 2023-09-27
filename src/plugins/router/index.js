import VueRouter from 'vue-router'

import LoginRoutes from './login'
import HomeRoutes from './control'
import { isLogin } from "@/utils/api/VerifyCode"
import { useUserStore } from "@/stores/user"
import AdvancedRoutes from './advancedsetup'
import DataanalysisRoutes from './dataanalysis'
import ManagementRoutes from './management'
import TrainmodelRoutes from './systemsetup'
import RemindsRoutes from './remind'
import ScreenRoutes from './screen'
import { Message } from 'element-ui';
const router = new VueRouter({
    mode: 'history',
    base: import.meta.env.BASE_URL,
    routes: [
        ...HomeRoutes, ...LoginRoutes,
        ...AdvancedRoutes, ...DataanalysisRoutes, ...ManagementRoutes, ...TrainmodelRoutes, ...RemindsRoutes, ...ScreenRoutes
    ],
    catch: (err, vm, info) => {
        if (err instanceof NavigationDuplicated) {
            // 处理重复导航，例如重新加载当前页面或跳转到其他页面
            // 这里你可以根据需求自定义处理逻辑
            console.log('重复导航被拦截！');
        } else {
            // 其他错误，保留默认行为
            throw err;
        }
    }

})

router.beforeEach(async (to, from, next) => {
    var userstore = useUserStore()
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // 如果路由需要登录才能访问
        var res = await isLogin()
        console.log(res);
        if (res.code == 200) {
            if (res.data.isLogin == false) {
                // 如果用户未登录
                Message.error("请先登录"); // 显示错误消息
                next({
                    path: '/login', // 重定向到登录页面
                    // query: { redirect: to.fullPath } // 保存用户原本要访问的页面
                });
            } else {
                // 用户已登录，允许访问
                userstore.updateUserInfo(res.data.user)
                next();
            }
        }


    } else if (to.matched.some(record => record.meta.isLogin)) {
        var res = await isLogin()
        console.log("登录页面");
        console.log(res);
        if (res.code == 200) {
            if (res.data.isLogin == true) {
                userstore.updateUserInfo(res.data.user)
                next({
                    // path: '/home/control', // 重定向到登录页面
                    path: '/home/control', // 重定向到登录页面

                    // query: { redirect: to.fullPath } // 保存用户原本要访问的页面
                });
            } else {
                next()
            }
        }
    } else {
        // 如果路由不需要登录，直接允许访问
        next();
    }
});

export default router