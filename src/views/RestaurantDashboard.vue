<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>
    <hr />
    <ul>
      <li>評論數： {{ restaurant.commentsLength }}</li>
      <li>瀏覽次數： {{ restaurant.viewCounts }}</li>
    </ul>
    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>


<script>
const dummyData = {
  restaurant: {
    id: 1,
    name: "Ned Trantow",
    tel: "670-353-6941 x75169",
    address: "234 Abernathy Forge",
    opening_hours: "08:00",
    description: "quia",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=42.06157333984635",
    viewCounts: 1,
    createdAt: "2022-04-21T06:55:38.000Z",
    updatedAt: "2022-04-23T10:00:06.000Z",
    CategoryId: 1,
    Category: {
      id: 1,
      name: "中式料理",
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
    },
    Comments: [
      {
        id: 101,
        text: "Inventore corporis fugit eveniet ab autem quia eum.",
        UserId: 1,
        RestaurantId: 1,
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
        User: {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$5ZuIWPJga1gF67fHHgww/uT1BJLXeHhvndOVI554btHhy.e4iRkWC",
          isAdmin: true,
          image: null,
          createdAt: "2022-04-21T06:55:38.000Z",
          updatedAt: "2022-04-21T06:55:38.000Z",
        },
      },
      {
        id: 1,
        text: "Qui quae et ut nulla.",
        UserId: 3,
        RestaurantId: 1,
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
        User: {
          id: 3,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$8pGBE8rq2UKJ.InOgUMP1ekkJmR30W13BOuzlcmbwypi6twsBjGcW",
          isAdmin: false,
          image: null,
          createdAt: "2022-04-21T06:55:38.000Z",
          updatedAt: "2022-04-21T06:55:38.000Z",
        },
      },
      {
        id: 51,
        text: "Aspernatur cupiditate neque perspiciatis qui sapiente et recusandae.",
        UserId: 3,
        RestaurantId: 1,
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
        User: {
          id: 3,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$8pGBE8rq2UKJ.InOgUMP1ekkJmR30W13BOuzlcmbwypi6twsBjGcW",
          isAdmin: false,
          image: null,
          createdAt: "2022-04-21T06:55:38.000Z",
          updatedAt: "2022-04-21T06:55:38.000Z",
        },
      },
    ],
  },
};

export default {
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        commentsLength: 0,
        viewCounts: 0,
      },
    };
  },
  methods: {
    fetchData() {
      const { id, name, Category, Comments, viewCounts } = dummyData.restaurant;
      this.restaurant = {
        ...this.restaurant,
        id,
        name,
        categoryName: Category ? Category.name : "未分類",
        commentsLength: Comments.length,
        viewCounts,
      };
    },
  },
  created() {
    const id = this.$route.params;
    this.fetchData(id);
  },
};
</script>
