import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

export const constantRouterMap = [
  {
    path: '',
    component: Layout,
    redirect: '/dashboard/dashboard'
  },
  { path: '/login', component: () => import('@/views/login'), name: '登录', hidden: true },
  // { path: '/404', component: () => import('@/views/errorPage/404'), hidden: true },
  // { path: '/401', component: () => import('@/views/errorPage/401'), hidden: true },

  // 报表
  {
    path: '/dashboard',
    component: Layout,
    meta: { title: 'dashboard', icon: 'dashboard' },
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/dashboard'),
        meta: { title: '首页', icon: 'dashboard' }
      }
    ]
  },

  // 表格
  {
    path: '/table',
    component: Layout,
    redirect: '/table/complex-table',
    name: 'table',
    meta: {
      title: '课程管理',
      icon: 'table'
    },
    children: [
      {
        path: 'complex-table',
        name: 'complex-table',
        component: () => import('@/views/table/complex-table'),
        meta: { title: '在线选课' }
      },
      {
        path: 'TreeTable',
        name: 'TreeTable',
        component: () => import('@/views/table/tree-table/index'),
        meta: { title: '已选课程' }
      }

    ]
  }

]

export default new Router({
  routes: constantRouterMap
})

// export default new Router({
//   // mode: 'history', //后端支持可开
//   scrollBehavior: () => ({ y: 0 }),
//   routes: constantRouterMap
// })

export const asyncRouterMap = [

  {
    path: '/error',
    component: Layout,
    redirect: 'noredirect',
    name: 'errorPages',
    meta: {
      title: 'errorPages',
      icon: '404'
    },
    children: [
      { path: '401', component: () => import('@/views/errorPage/401'), name: 'page401', meta: { title: 'page401', noCache: true }},
      { path: '404', component: () => import('@/views/errorPage/404'), name: 'page404', meta: { title: 'page404', noCache: true }}
    ]
  },
  { path: '*', redirect: '/404', hidden: true }]
