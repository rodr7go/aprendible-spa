import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Home from "./views/Home";
import About from "./views/About";
import Archive from "./views/Archive";
import Contact from "./views/Contact";
import Posts from "./views/PostsShow";
import CategoryPosts from "./views/CategoryPosts";
import TagPosts from "./views/TagPosts";
import View404 from "./views/404";

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/nosotros',
            name: 'about',
            component: About,
        },
        {
            path: '/archivo',
            name: 'archive',
            component: Archive
        },
        {
            path: '/contacto',
            name: 'contact',
            component: Contact
        },
        {
            path: '/blog/:url',
            name: 'posts_show',
            component: Posts,
            props: true
        },
        {
            path: '/categorias/:category',
            name: 'category_posts',
            component: CategoryPosts,
            props: true
        },
        {
            path: '/etiquetas/:tag',
            name: 'tag_posts',
            component: TagPosts,
            props: true

        },
        {
            path: '*',
            component: View404
        }
    ],
    linkExactActiveClass: 'active'
});
