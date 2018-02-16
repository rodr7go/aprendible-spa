require('./bootstrap');

import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: '/',
            component: {
                template: '<div>Este es el home</div>'
            }
        },
        {
            path: '/nosotros',
            component: {
                template: '<div>Este es el nosotros</div>'
            }
        },
        {
            path: '/archivo',
            component: {
                template: '<div>Este es el archivo</div>'
            }
        },
        {
            path: '/contacto',
            component: {
                template: '<div>Este es el contacto</div>'
            }
        }
    ]
});

// Vue.component('example', require('./components/Example.vue'));

const app = new Vue({
    el: '#app',
    router
});
