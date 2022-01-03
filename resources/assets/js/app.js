require('./bootstrap');

import Vue from 'vue/dist/vue.esm';
import router from './routes';

Vue.component('example', require('./components/Example.vue'));
Vue.component('home', require('./views/Home.vue'));

const app = new Vue({
    el: '#app',
    router,
});
