import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import HelloWorld from '@/components/HelloWorld'

import Blog from '../pages/page.vue'
import page1 from '../pages/page1.vue'
import page2 from '../pages/page2.vue'


import index2 from '../pages/index2.vue'
import index from '../pages/index.vue'
import pageQuiButton from '../pages/pageQuiButton.vue'
import pageQuiList from '../pages/pageQuiList.vue'
import pageQuiNav from '../pages/pageQuiNav.vue'

Vue.use(Router)

export default new Router({
    routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
        path: '/blog',
        name: 'blog',
        component: Blog,
        children: [
          {
            path: '/',
            component: page1
          },
          {
             path: 'info',
            component: page2
          }
        ]
      },

      {
        path: '/',
        name: 'index',
        component: index
      },
      {
        path: '/2',
        name: 'index2',
        component: index2
      },
      {
        path: '/btn',
        name: 'btn',
        component: pageQuiButton
      },
      {
        path: '/list',
        name: 'list',
        component: pageQuiList
      },
      {
        path: '/nav',
        name: 'nav',
        component: pageQuiNav
      }
  ]
})
