require('./bootstrap');

import Vue from 'vue';
import router from './routes'

Vue.component('post-header', require('./components/PostHeader'));
Vue.component('posts-list', require('./components/PostsList'));
Vue.component('posts-list-item', require('./components/PostsListItem'));
Vue.component('nav-bar', require('./components/NavBar'));

const app = new Vue({
    el: '#app',
    router
});
