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

const dummyData = {
  restaurants: [
    {
      id: 50,
      name: "Antwan Shanahan",
      tel: "388-093-2642 x6138",
      address: "443 Mortimer Turnpike",
      opening_hours: "08:00",
      description: "Exercitationem ea corporis tempora. Voluptas volup",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=81.90819340660036",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 49,
      name: "Loren Hettinger",
      tel: "476.997.0509 x4701",
      address: "3526 Jada Branch",
      opening_hours: "08:00",
      description: "est",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=40.49734611699005",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 48,
      name: "Jamarcus Mante DVM",
      tel: "528-739-7433",
      address: "497 Von Streets",
      opening_hours: "08:00",
      description: "Dignissimos eius ad id quis corrupti soluta ut ius",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=92.25470067389956",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 47,
      name: "Gina Buckridge",
      tel: "582-363-5171 x393",
      address: "7151 Volkman Forges",
      opening_hours: "08:00",
      description: "Illum iste et ratione maiores illum a totam incidu",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=93.18975199524498",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 46,
      name: "Mary Zboncak",
      tel: "960-021-6990 x60664",
      address: "6190 Gino Burg",
      opening_hours: "08:00",
      description: "Recusandae sit molestiae dolores quisquam laborum ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=86.5643976042338",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 45,
      name: "Yazmin Hilpert",
      tel: "(116) 160-0096",
      address: "025 Hackett Course",
      opening_hours: "08:00",
      description: "Ipsa magni voluptatem placeat. Et minus neque quo ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=59.75626875593547",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 44,
      name: "Lukas Emard",
      tel: "(727) 119-8510 x0278",
      address: "953 Ward Vista",
      opening_hours: "08:00",
      description: "Nobis quia voluptatem itaque quia molestiae dolore",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=89.14670813468832",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 43,
      name: "Yvonne Gutkowski",
      tel: "993-030-5467",
      address: "757 Deanna Meadow",
      opening_hours: "08:00",
      description: "numquam consequatur cupiditate",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=86.42951070419709",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 42,
      name: "Jaycee Schumm",
      tel: "198.725.3836 x312",
      address: "7595 Briana Courts",
      opening_hours: "08:00",
      description: "Facilis accusantium dignissimos sint voluptas occa",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=28.588902939213078",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 41,
      name: "Mrs. Raina Lemke",
      tel: "(921) 006-8760 x8048",
      address: "030 Johathan Alley",
      opening_hours: "08:00",
      description: "odit",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=72.78721170149429",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
  ],
};

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
    fetchRestaurants() {
      this.restaurants = dummyData.restaurants;
    },
    addFavorite(id) {
      this.restaurants = this.restaurants.map((restaurant) => {
        if (id === restaurant.id) {
          return {
            ...restaurant,
            isFavorited: true,
            FavoriteCount: restaurant.FavoriteCount + 1,
          };
        } else {
          return restaurant;
        }
      });
    },
    deleteFavorite(id) {
      this.restaurants = this.restaurants.map((restaurant) => {
        if (id === restaurant.id) {
          return {
            ...restaurant,
            isFavorited: false,
            FavoriteCount: restaurant.FavoriteCount - 1,
          };
        } else {
          return restaurant;
        }
      });
    },
  },
  created() {
    this.fetchRestaurants();
  },
};
</script>