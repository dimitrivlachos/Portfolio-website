import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CVView from '../views/CVView.vue';
import ContactView from '../views/ContactView.vue';
import NotFoundView from '../views/NotFoundView.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
    },
    {
        path: '/cv',
        name: 'CV',
        component: CVView,
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
        component: NotFoundView,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;