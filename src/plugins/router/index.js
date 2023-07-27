import VueRouter from 'vue-router'

import LoginRoutes from './login'
import HomeRoutes from './control'

import AdvancedRoutes from './advancedsetup'
import DataanalysisRoutes from './dataanalysis'
import ManagementRoutes from './management'
import TrainmodelRoutes from './systemsetup'
import RemindsRoutes from './remind'
const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    ...HomeRoutes, ...LoginRoutes,
    ...AdvancedRoutes, ...DataanalysisRoutes, ...ManagementRoutes, ...TrainmodelRoutes, ...RemindsRoutes
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

export default router
