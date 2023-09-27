import Vue from 'vue'
import { PiniaVuePlugin } from 'pinia'
import pinia from './plugins/pinia';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import VueRouter from 'vue-router'
import router from './plugins/router'

import globalCompPlugins from '@/plugins/components'

import App from './App.vue'
import './style.scss'
import *as echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false;


Vue.use(PiniaVuePlugin)
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(globalCompPlugins)




new Vue({
    router,
    pinia,
    render: (h) => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this
    }
}).$mount('#app')