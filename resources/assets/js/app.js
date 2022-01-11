require('./bootstrap');

import Vue from 'vue/dist/vue.esm';
import router from './routes';

require('vue2-animate/dist/vue2-animate.min.css');

Vue.component('post-header', require('./components/PostHeader.vue').default);
Vue.component('posts-list', require('./components/PostsList.vue').default);
Vue.component('posts-list-item', require('./components/PostsListItem.vue').default);
Vue.component('post-link', require('./components/PostLink.vue').default);
Vue.component('category-link', require('./components/CategoryLink.vue').default);
Vue.component('nav-bar', require('./components/NavBar.vue').default);
Vue.component('tag-link', require('./components/TagLink.vue').default);
Vue.component('disqus-comments', require('./components/DisqusComments.vue').default);
Vue.component('pagination-links', require('./components/PaginationLinks.vue').default);
Vue.component('paginator', require('./components/Paginator.vue').default);
Vue.component('social-links', require('./components/SocialLinks.vue').default);
Vue.component('contact-form', require('./components/ContactForm.vue').default)

const app = new Vue({
    el: '#app',
    router,
});
