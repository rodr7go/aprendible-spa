require('./bootstrap');

import Vue from 'vue';
import router from './routes'

Vue.component('post-header', require('./components/PostHeader.vue'));
Vue.component('nav-bar', require('./components/NavBar.vue'));

const app = new Vue({
    el: '#app',
    router
});
