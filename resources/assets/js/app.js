require('./bootstrap');

import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: '/',
            component: require('./views/Home')
        },
        {
            path: '/nosotros',
            component: require('./views/About')
        },
        {
            path: '/archivo',
            component: require('./views/Archive')
        },
        {
            path: '/contacto',
            component: require('./views/Contact')
        }
    ],
    linkExactActiveClass: 'active'
});

// Vue.component('example', require('./components/Example.vue'));

const app = new Vue({
    el: '#app',
    router
});
