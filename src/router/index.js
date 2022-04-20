import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';

const routes = [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: () =>
            import ('../pages/Home.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ('../pages/Login.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () =>
            import ('../pages/Register.vue')
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () =>
            import ('../pages/Dashboard.vue'),
        meta: { requiresAuth: true },
    }
];

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active-link',
    routes
});


router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.state.user.token) {
        next({ name: 'Login' })
    } else if (store.state.user.token && (to.name === 'Login' || to.name === 'Register')) {
        next({ name: 'Dashboard' });
    } else {
        next();
    }
});

export default router;