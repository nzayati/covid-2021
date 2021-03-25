import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'statistique', component: () => import('pages/Statistique.vue') },
      { path: 'vaccination', component: () => import('pages/Vaccination.vue') },
      { path: 'prevision', component: () => import('pages/Prevision.vue') },
      { path: 'voyage', component: () => import('pages/Voyage.vue') },
      { path: 'contact', component: () => import('pages/Contact.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
