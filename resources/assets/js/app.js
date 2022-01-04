require('./bootstrap');

import Vue from 'vue/dist/vue.esm';
import router from './routes';

Vue.component('post-header', require('./components/PostHeader.vue').default);
Vue.component('posts-list', require('./components/PostsList.vue').default);
Vue.component('posts-list-item', require('./components/PostsListItem.vue').default);
Vue.component('post-link', require('./components/PostLink.vue').default);
Vue.component('category-link', require('./components/CategoryLink.vue').default);
Vue.component('nav-bar', require('./components/NavBar.vue').default);
Vue.component('tag-link', require('./components/TagLink.vue').default);

const app = new Vue({
    el: '#app',
    router,
});
