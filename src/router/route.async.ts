// 需要鉴权的业务路由
import { RouteRecordRaw } from 'vue-router';

const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    redirect: '/dashboard/index',
    meta: {
      title: '',
      icon: '',
    },
    component: () => import('@/views/home/indexPage.vue'),
    children: [
      {
        path: '/dashboard/index',
        name: 'analysis',
        meta: {
          title: '',
          icon: '',
        },
        component: () => import('@/views/analysis/analysisPage.vue'),
      },
      {
        path: '/dashboard/workbench',
        name: 'workbench',
        meta: {
          title: '',
          icon: '',
        },
        component: () => import('@/views/workbench/workBench.vue'),
      },
      {
        path: '/system/account',
        name: 'account',
        meta: {
          title: '',
          icon: '',
        },
        component: () => import('@/views/system/accountPage.vue'),
      },
      {
        path: '/system/role',
        name: 'role',
        meta: {
          title: '',
          icon: '',
        },
        component: () => import('@/views/system/rolePage.vue'),
      },
      {
        path: '/system/menu',
        name: 'menu',
        meta: {
          title: '',
          icon: '',
        },
        component: () => import('@/views/system/menuPage.vue'),
      },
      {
        path: '/system/dept',
        name: 'dept',
        meta: {
          title: '',
          icon: '',
        },
        component: () => import('@/views/system/deptPage.vue'),
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
