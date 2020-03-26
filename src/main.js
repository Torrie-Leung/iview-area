import Vue from 'vue';
// import ViewUI from 'view-design';
import VueRouter from 'vue-router';
import Routers from './router';
import Util from './libs/util';
import App from './app.vue';
import 'view-design/dist/styles/iview.css';

// import { 
//     Button,
//     Steps 
//     } from 'view-design';
// Vue.component('Button', Button);
// Vue.component('Steps', Steps);

Vue.use(VueRouter);
const ViewUI = require('view-design')
Vue.use(ViewUI);

// 路由配置
const RouterConfig = {
    // mode: 'history',
    mode:'hash',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    ViewUI.LoadingBar.start();
    Util.title(to.meta.title);
    next();
});

router.afterEach((to, from, next) => {
    ViewUI.LoadingBar.finish();
    window.scrollTo(0, 0);
});

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
