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

  // 报表
  {
    path: '/dashboard',
    component: Layout,
    meta: { title: 'dashboard', icon: 'tab' },
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
        meta: {
          title: '在线选课'
        }
      },
      {
        path: 'TreeTable',
        name: 'TreeTable',
        component: () => import('@/views/table/tree-table/index'),
        meta: {
          title: '已选课程'
        }
      }

    ]
  }

]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [

  {
    path: '/error',
    component: Layout,
    redirect: 'noredirect',
    name: '个人中心',
    meta: {
      title: '个人中心',
      icon: 'form',
      roles: ['admin']
    },
    children: [
      { path: '401', component: () => import('@/views/errorPage/401'), name: 'page401', meta: { title: '个人信息', noCache: true }},
      { path: '404', component: () => import('@/views/errorPage/404'), name: 'page404', meta: { title: '修改密码', noCache: true }}
    ]
  },
  { path: '*', redirect: '/404', hidden: true }]
