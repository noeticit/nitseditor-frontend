import Vue from 'vue';
import VueRouter from 'vue-router';
import projectRoutes from './routes/project-routes';
import nitsAdminRoutes from './routes/nits-admin-routes';
import pluginRoutes from './Models/_route';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes:
        [
            ...projectRoutes,
            ...nitsAdminRoutes,
            ...pluginRoutes
        ],
    base: '/',
});
