import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        // Lazy load the 404 component:
        // This will be loaded only when the user navigates to this route.-
        component: () => import('../views/NotFound.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;