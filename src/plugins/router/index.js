import VueRouter from 'vue-router'
import HomeRoutes from './home'
import LoginRoutes from './login'

import PredictionRoutes from './prediction'
import QuakedbRoutes from './quakedb'
import SequenceRoutes from './sequence'
import TrainmodelRoutes from './trainmodel'
import StatisRoutes from './statis'
const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    ...HomeRoutes, ...LoginRoutes,
    ...PredictionRoutes,...QuakedbRoutes, ...SequenceRoutes, ...TrainmodelRoutes, ...StatisRoutes
  ]
})

export default router
