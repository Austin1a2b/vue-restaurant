// ./src/views/RestaurantsTop.vue
<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>
    <hr />
    <div
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      class="card mb-3"
      style="max-width: 540px; margin: auto"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <a href="#">
            <img class="card-img" :src="restaurant.image" />
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ restaurant.name }}</h5>
            <span class="badge badge-secondary"
              >收藏數：{{ restaurant.FavoriteCount }}</span
            >
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <router-link
              :to="{ name: 'restaurant', params: { id: restaurant.id } }"
              class="btn btn-primary mr-2"
              >Show</router-link
            >

            <button
              v-if="restaurant.isFavorited"
              @click.prevent.stop="deleteFavorite(restaurant.id)"
              type="button"
              class="btn btn-danger mr-2"
            >
              移除最愛
            </button>

            <button
              v-else
              @click.prevent.stop="addFavorite(restaurant.id)"
              type="button"
              class="btn btn-primary"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import restaurantsAPI from "../apis/restaurants";
import { Toast } from "../utils/helpers";

export default {
  components: {
    NavTabs: NavTabs,
  },
  data() {
    return {
      restaurants: [],
    };
  },
  methods: {
    async fetchRestaurants() {
      try {
        const { data } = await restaurantsAPI.getTopRestaurants();
        this.restaurants = data.restaurants;
      } catch {
        Toast.fire({
          icon: "error",
          title: "無法讀取 人氣餐廳資料 ,請稍後在試",
        });
        console.log("error");
      }
    },
    async addFavorite(restaurantId) {
      try {
        const { data } = await restaurantsAPI.addFavoriteRestaurants({
          restaurantId,
        });
        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.restaurants = this.restaurants.map((restaurant) => {
          if (restaurantId === restaurant.id) {
            return {
              ...restaurant,
              isFavorited: true,
              FavoriteCount: restaurant.FavoriteCount + 1,
            };
          } else {
            return restaurant;
          }
        });
      } catch {
        Toast.fire({
          icon: "error",
          title: "無法將餐廳加到最愛 ,請稍後在試",
        });
        console.log("error");
      }
      /*     

      */
    },
    async deleteFavorite(restaurantId) {
      try {
        const { data } = await restaurantsAPI.deleteFavoriteRestaurants({
          restaurantId,
        });
        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.restaurants = this.restaurants.map((restaurant) => {
          if (restaurantId === restaurant.id) {
            return {
              ...restaurant,
              isFavorited: false,
              FavoriteCount: restaurant.FavoriteCount - 1,
            };
          } else {
            return restaurant;
          }
        });
      } catch {
        Toast.fire({
          icon: "error",
          title: "無法將餐廳移除最愛 ,請稍後在試",
        });
      }
    },
  },
  created() {
    this.fetchRestaurants();
  },
};
</script>