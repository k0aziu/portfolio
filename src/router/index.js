import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/HomeView.vue'
import Podcast from '@/views/PodcastView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
        path: '/podcast',
        name: 'podcast',
        component: Podcast
      },
  ]
})