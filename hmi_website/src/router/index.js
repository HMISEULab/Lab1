import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/Home.vue'
import Production from '../page/Production.vue'
import Group from '../page/Group.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/production',
            name: 'Production',
            component: Production
        },
        {
            path: '/group',
            name: 'Group',
            component: Group
        },
        {
            path: '/',
            redirect: '/home'
        }
    ]
})