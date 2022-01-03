import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Home from "./views/Home";
import About from "./views/About";
import Archive from "./views/Archive";
import Contact from "./views/Contact";
import Posts from "./views/PostsShow";
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
            component: Posts
        },
        {
            path: '*',
            component: View404
        }
    ],
    linkExactActiveClass: 'active'
});
