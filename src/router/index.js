import { createRouter, createWebHistory } from 'vue-router'  

import Home from '@/views/Home'
import Forget from '@/views/Forget'
import Login from '@/views/Login'
import Dashboard from '@/views/Dashboard'
import Mail from '@/views/Mail'
import About from '@/views/About'
const routes = [
    {
     path:'/',
     component: Home
    },
    {
        path: '/login',
        component: Login   
    },
    {
      path:'/forget',
      component: Forget
    },
    {
        path:'/dashboard',
        component:Dashboard
    },
    {
        path:'/mail',
        component: Mail
    },
    {
        path: '/about',
        component: About
    }
]

const router = createRouter( {
    history: createWebHistory(process.env.BASE_URL),
    routes: routes
})



export default router