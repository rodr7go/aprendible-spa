require('./bootstrap');

import Vue from 'vue';
import router from './routes'

// Vue.component('example', require('./components/Example.vue'));

const app = new Vue({
    el: '#app',
    router
});
