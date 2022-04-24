<template>
  <div class="container py-5">
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :initialRestaurant="restaurant" />
    <hr />
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments
      :restaurant-comments="restaurantComments"
      @after-delete-comment="afterDeleteComment"
    />
    <!-- 新增評論 CreateComment -->
    <CreateComment
      :restaurant-id="restaurant.id"
      @after-create-comment="afterCreateComment"
    />
  </div>
</template>



<script>
import RestaurantDetail from "../components/RestaurantDetail";
import RestaurantComments from "../components/RestaurantComments";
import CreateComment from "../components/CreateComment";

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
    updatedAt: "2022-04-23T10:00:06.215Z",
    CategoryId: 1,
    Category: {
      id: 1,
      name: "中式料理",
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
    },
    FavoritedUsers: [],
    LikedUsers: [],
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
  isFavorited: false,
  isLiked: false,
};

const dummyUser = {
  currentUser: {
    id: 1,
    name: "管理者",
    email: "root@example.com",
    image: "https://i.pravatar.cc/300",
    isAdmin: true,
  },
  isAuthenticated: true,
};

export default {
  components: {
    RestaurantDetail: RestaurantDetail,
    RestaurantComments: RestaurantComments,
    CreateComment: CreateComment,
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        image: "",
        openingHours: "",
        tel: "",
        address: "",
        description: "",
        isFavorited: false,
        isLiked: false,
      },
      currentUser: dummyUser.currentUser,
      restaurantComments: [],
    };
  },
  created() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },
  methods: {
    fetchRestaurant(restaurantId) {
      console.log("fetchRestaurant id: ", restaurantId);
      this.restaurant = {
        id: dummyData.restaurant.id,
        name: dummyData.restaurant.name,
        categoryName: dummyData.restaurant.Category.name,
        image: dummyData.restaurant.image,
        openingHours: dummyData.restaurant.opening_hours,
        tel: dummyData.restaurant.tel,
        address: dummyData.restaurant.address,
        description: dummyData.restaurant.description,
        isFavorited: dummyData.isFavorited,
        isLiked: dummyData.isLiked,
      };
      this.restaurantComments = dummyData.restaurant.Comments;
    },
    afterDeleteComment(commentId) {
      // 以 filter 保留未被選擇的 comment.id
      this.restaurantComments = this.restaurantComments.filter(
        (comment) => comment.id !== commentId
      );
    },
    afterCreateComment(payload) {
      console.log(payload);
      const { commentId, restaurantId, text } = payload;
      this.restaurantComments.push({
        id: commentId,
        RestaurantId: restaurantId,
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name,
        },
        text: text,
        createdAt: new Date(),
      });
    },
  },
};
</script>