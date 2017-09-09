// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '../routers';
import App from './home/home';


Vue.config.productionTip = false;

//使用插件
Vue.use(VueRouter);

// 配置路由
const router = new VueRouter({
    mode: 'history',
    routes,
    linkActiveClass: 'active'
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
