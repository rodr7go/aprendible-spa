require('./bootstrap');

import Vue from 'vue';
import router from './routes'

Vue.component('post-header', require('./components/PostHeader'));
Vue.component('posts-list', require('./components/PostsList'));
Vue.component('posts-list-item', require('./components/PostsListItem'));
Vue.component('nav-bar', require('./components/NavBar'));
Vue.component('category-link', require('./components/CategoryLink'));
Vue.component('post-link', require('./components/PostLink'));

const app = new Vue({
    el: '#app',
    router
});
