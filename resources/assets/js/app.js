require('./bootstrap');

import Vue from 'vue/dist/vue.esm';
import router from './routes';

const app = new Vue({
    el: '#app',
    router,
});
