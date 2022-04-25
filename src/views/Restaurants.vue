// ./src/views/Restaurants.vue
<template>
  <div class="container py-5">
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <RestaurantsNavPills :categories="categories" :categoryId="categoryId" />

    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestaurantCard
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initialRestaurant="restaurant"
      />
    </div>
    <!-- 分頁標籤 RestaurantPagination -->
    <RestaurantsPagination
      :currentPage="currentPage"
      :totalPage="totalPage"
      :previousPage="previousPage"
      :nextPage="nextPage"
      :categoryId="categoryId"
    />
    
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import RestaurantCard from "../components/RestaurantCard";
import RestaurantsNavPills from "../components/RestaurantsNavPills";
import RestaurantsPagination from "../components/RestaurantsPagination.vue";

const dummyData = {
  restaurants: [
    {
      id: 1,
      name: "Ned Trantow",
      tel: "670-353-6941 x75169",
      address: "234 Abernathy Forge",
      opening_hours: "08:00",
      description: "quia",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=42.06157333984635",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 2,
      name: "Jamison Koch",
      tel: "1-486-520-8411",
      address: "8612 Hammes Courts",
      opening_hours: "08:00",
      description: "Et est soluta corporis et.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=64.5564786727356",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 3,
      name: "Charlene Okuneva",
      tel: "798-637-0710 x04473",
      address: "89319 Naomie Prairie",
      opening_hours: "08:00",
      description: "Cupiditate at perferendis.\nCulpa enim autem dolore",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=20.599372792839098",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 4,
      name: "Leonora Nader",
      tel: "756.997.8432 x56792",
      address: "1218 Rath Point",
      opening_hours: "08:00",
      description: "Qui eos nisi eos et eum et.\nVoluptas quia earum qu",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=6.336431227834671",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 5,
      name: "Josefa Schuster",
      tel: "468-807-2801 x9999",
      address: "395 Kayleigh Summit",
      opening_hours: "08:00",
      description: "Corrupti necessitatibus quos officia et expedita. ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=95.0374425882853",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 6,
      name: "Cayla Spencer",
      tel: "1-935-304-5033",
      address: "954 Lora Roads",
      opening_hours: "08:00",
      description: "Error qui eligendi id. Beatae aperiam consectetur ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=72.2555578599867",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 7,
      name: "Adrienne Pfannerstill DDS",
      tel: "317.855.4742 x2309",
      address: "07931 Winona Summit",
      opening_hours: "08:00",
      description: "Ut officia praesentium fuga. Voluptates qui tempor",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=34.15912284713387",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 8,
      name: "Vernon Lind",
      tel: "1-533-679-6442 x53387",
      address: "4739 Jovan Mission",
      opening_hours: "08:00",
      description: "Nulla dolore vel quis veniam fuga et autem rerum e",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=77.28278118711734",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 9,
      name: "Zane Bechtelar",
      tel: "1-189-181-6496 x457",
      address: "62857 Demarco Harbor",
      opening_hours: "08:00",
      description: "cumque",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=17.375800191064638",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 10,
      name: "Eli Schumm",
      tel: "246-389-6997",
      address: "5637 Stehr Valley",
      opening_hours: "08:00",
      description: "Sapiente perspiciatis et expedita dolorem reiciend",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=13.784620734728104",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
  ],
  categories: [
    {
      id: 1,
      name: "中式料理",
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
    },
    {
      id: 2,
      name: "日本料理",
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
    },
    {
      id: 3,
      name: "義大利料理",
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
    },
    {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
    },
    {
      id: 5,
      name: "素食料理",
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
    },
    {
      id: 6,
      name: "美式料理",
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
    },
    {
      id: 7,
      name: "複合式料理",
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
    },
  ],
  categoryId: "",
  page: 1,
  totalPage: [1, 2, 3, 4, 5],
  prev: 1,
  next: 2,
};

export default {
  components: {
    NavTabs: NavTabs,
    RestaurantCard: RestaurantCard,
    RestaurantsNavPills: RestaurantsNavPills,
    RestaurantsPagination,
  },
  data() {
    return {
      restaurants: [],
      categories: [],
      categoryId: "-1",
      currentpage: "-1",
      totalPage: [],
      previousPage: "-1",
      nextPage: "-1",
    };
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    fetchRestaurants() {
      this.restaurants = dummyData.restaurants;
      this.categories = dummyData.categories;
      this.categoryId = dummyData.categoryId;
      this.currentPage = dummyData.page;
      this.totalPage = dummyData.totalPage;
      this.previousPage = dummyData.prev;
      this.nextPage = dummyData.next;
    },
  },
};
</script>