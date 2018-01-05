import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Login from '@/components/Login'
import routerconfig from './router.config.js'
Vue.use(Router)

let rout = [{path: '',redirect: 'home'}].concat(routerconfig.map((ele) => {
  let children = [];
  if(ele.children) {
    children = ele.children.map((child) => {
      return {
        path: child.name,
        component: resolve => require(['../components' + child.url + '/' + child.component], resolve)
      }
    })
  }
  if(children.length > 0) {
    return {
      path: ele.name,
      component: resolve => require(['../components' + ele.fileUrl + '/' + ele.component], resolve),
      children: children
    }
  }else{
    return {
      path: ele.name,
      component: resolve => require(['../components' + ele.url + '/' + ele.component], resolve)
    }
  }
  
}));

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/layout'
    },
    {
      path: '/layout',
      component: resolve => require(['../components/Layout.vue'], resolve),
      children: rout
    },
    {
    	path: '/login',
    	name: 'Login',
    	component: resolve => require(['../components/Login.vue'], resolve),
    }
  ]
})
