import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/MainPage/MainPage.vue')
      },
      {
        path: 'feed',
        component: () => import('pages/FeedPage/FeedPage.vue')
      },
      {
        path: 'profile',
        component: () => import('pages/ProfilePage/ProfilePage.vue')
      }
    ]
  },
  {
    path: '/auth',
    component: () => import('pages/AuthPage/AuthPage.vue')
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
];

export default routes;
