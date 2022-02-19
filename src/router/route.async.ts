// 需要鉴权的业务路由
import { RouteRecordRaw } from 'vue-router';

const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    redirect: '/home/index',
    meta: {
      title: '',
      icon: '',
    },
    component: () => import('@/views/home/indexPage.vue'),
    children: [
      {
        path: '/home/index',
        name: 'analysis',
        meta: {
          title: '',
          icon: '',
        },
        component: () => import('@/views/analysis/analysisPage.vue'),
      },
      {
        path: '/home/workbench',
        name: 'workbench',
        meta: {
          title: '',
          icon: '',
        },
        component: () => import('@/views/workbench/workBench.vue'),
      },
    ],
  },
  {
    path: '/process',
    name: 'process',
    meta: {
      title: 'Template configuration process',
      icon: '',
    },
    component: () => import('@/views/example/MarkdownPage.vue'),
  },
];

export default asyncRoutes;
