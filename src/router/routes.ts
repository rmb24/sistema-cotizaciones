import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: () => import('pages/LoginPage.vue'),
  },
  {
    path: '/home',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/clients',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/ClientPage.vue') }],
  },
  {
    path: '/materials',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/MaterialsPage.vue') },
    ],
  },

  // Redirect to / when no route matches (404)
  {
    path: '/:pathMatch(.*)*',
    redirect: '/home',
  },
];

export default routes;
