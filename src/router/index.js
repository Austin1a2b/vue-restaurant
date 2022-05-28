import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import SignIn from '../views/SignIn'
import Restaurants from '../views/Restaurants.vue'
import store from './../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/restaurants'
  },
  {
    path: '/signin',
    name: 'sign-in',
    component: SignIn,
  },
  {
    path: '/signup',
    name: 'sign-up',
    component: () => import('../views/SignUp'),
  },
  {
    path: '/restaurants',
    name: 'restaurants',
    component: Restaurants
  },
  {
    path: '/restaurants/feeds',
    name: 'restaurants-feeds',
    component: () => import('../views/RestaurantsFeeds.vue')
  },
  {
    path: '/restaurants/top',
    name: 'restaurants-top',
    component: () => import('../views/RestaurantsTop.vue')
  },

  {
    path: '/users/top',
    name: 'user-top',
    component: () => import('../views/UsersTop')
  },
  {
    path: '/users/:id/edit',
    name: 'users-edit',
    component: () => import('../views/UserEdit')
  },
  {
    path: '/users/:id',
    name: 'users-page',
    component: () => import('../views/User')
  },
  {
    path: '/admin',
    exact: true,
    redirect: '/admin/restaurants'
  },
  {
    path: '/admin/restaurants',
    name: 'admin-restaurants',
    component: () => import('../views/AdminRestaurants.vue')
  },
  {
    path: '/admin/restaurants/new',
    name: 'admin-restaurant-new',
    component: () => import('../views/AdminRestaurantNew.vue')
  },
  {
    path: '/admin/categories',
    name: 'admin-categories',
    component: () => import('../views/AdminCategories.vue')
  },
  {
    path: '/admin/users',
    name: 'admin-users',
    component: () => import('../views/AdminUsers.vue')
  },
  ///以下為動態路由
  {
    path: '/admin/restaurants/:id',
    name: 'admin-restaurant',
    component: () => import('../views/AdminRestaurant.vue')
  },

  {
    path: '/restaurants/:id/dashboard',
    name: 'restaurant-dashboard',
    component: () => import('../views/RestaurantDashboard.vue')
  },
  {
    path: '/admin/restaurants/:id/edit',
    name: 'admin-restaurant-edit',
    component: () => import('../views/AdminRestaurantEdit.vue')
  },
  {
    path: '/restaurants/:id',   //  "/:id"  這個寫法表示 為動態 路由
    name: 'restaurant',
    component: () => import('../views/Restaurant.vue')
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound,
  }
]

const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes
})

router.beforeEach((to, from, next) => {
  store.dispatch('fetchCurrentUser')
  next()
})


export default router
