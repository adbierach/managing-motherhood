import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/Home'
import LearnLanding from 'components/LearnLanding'
import Learn from 'components/Learn'
import PracticeLanding from 'components/PracticeLanding'
import PlanLanding from 'components/PlanLanding'
import PlanBuild from 'components/PlanBuild'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/learn',
      name: 'LearnLanding',
      component: LearnLanding
    },
    {
      path: '/learn/:chapterId',
      name: 'Learn',
      component: Learn
    },
    {
      path: '/practice',
      name: 'PracticeLanding',
      component: PracticeLanding
    },
    {
      path: '/plan',
      name: 'PlanLanding',
      component: PlanLanding
    },
    {
      path: '/plan/build',
      name: 'PlanBuild',
      component: PlanBuild
    }
  ]
})
