import { apiHelper } from './../utils/helpers'

export default {
  getRestaurants({ page, categoryId }) {
    const searchParams = new URLSearchParams({ page, categoryId })
    return apiHelper.get(`/restaurants?${searchParams.toString()}`)
  },
  getFeeds() {
    return apiHelper.get('/restaurants/feeds')
  },
  getTopRestaurants() {
    return apiHelper.get('/restaurants/top')
  },
  addFavoriteRestaurants({ restaurantId }) {
    return apiHelper.post(`/favorite/${restaurantId}`, null,)
  },
  deleteFavoriteRestaurants({ restaurantId }) {
    return apiHelper.delete(`/favorite/${restaurantId}`)
  },
  getRestaurant({ restaurantId }) {
    return apiHelper.get(`/restaurants/${restaurantId}`)
  },
  deleteRestaurantComment({ commentId }) {
    return apiHelper.delete(`/comments/${commentId}`)
  },
  addRestaurantComment({ restaurantId, text }) {
    return apiHelper.post('/comments', { restaurantId, text })
  }
}