import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ResumeView from '../views/ResumeView.vue';
import ContactView from '../views/ContactView.vue';
import NotFoundView from '../views/NotFoundView.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
    },
    {
        path: '/resume',
        name: 'Resume',
        component: ResumeView,
    },
    {
        path: '/portfolio',
        name: 'Portfolio',
        // Lazy load the Portfolio component:
        // This will be loaded only when the user navigates to this route.
        component: () => import('../views/PortfolioView.vue'),
    },
    {
        path: '/blog',
        name: 'Blog',
        // Lazy load the Blog component:
        // This will be loaded only when the user navigates to this route.
        component: () => import('../views/BlogView.vue'),
    },
    {
        path: '/contact',
        name: 'Contact',
        component: ContactView,
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('../views/NotFoundView.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;