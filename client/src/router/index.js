import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Catalog from '../views/Catalog.vue'
import Products from '../views/Products.vue'
import LoginForm from '../views/LoginForm'
import Registration from '../views/RegistrationForm'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: Catalog
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginForm
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Registration
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})


export default router