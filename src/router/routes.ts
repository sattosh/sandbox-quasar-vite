import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/TopPage.vue') }],
  },
  {
    path: '/page1',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Page1Page.vue') }],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
