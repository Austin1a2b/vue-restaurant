// ./src/views/UsersTop.vue
<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="row text-center">
      <TopUserCard v-for="user in users" :key="user.id" :initialuser="user" />
    </div>
  </div>
</template>


<script>
import NavTabs from "../components/NavTabs.vue";
import TopUserCard from "../components/TopUserCard.vue";

const dummyUsers = [
  {
    id: 1,
    name: "root",
    email: "root@example.com",
    password: "$2a$10$5ZuIWPJga1gF67fHHgww/uT1BJLXeHhvndOVI554btHhy.e4iRkWC",
    isAdmin: true,
    image: null,
    createdAt: "2022-04-21T06:55:38.000Z",
    updatedAt: "2022-04-21T06:55:38.000Z",
    Followers: [],
    FollowerCount: 0,
    isFollowed: false,
  },
  {
    id: 2,
    name: "user1",
    email: "user1@example.com",
    password: "$2a$10$3Kgdc5ZwrYVooBuy.53ePeTBzUCAocqO.TK1OwUoQ.neIiBfZj4.y",
    isAdmin: false,
    image: null,
    createdAt: "2022-04-21T06:55:38.000Z",
    updatedAt: "2022-04-21T06:55:38.000Z",
    Followers: [],
    FollowerCount: 0,
    isFollowed: false,
  },
  {
    id: 3,
    name: "user2",
    email: "user2@example.com",
    password: "$2a$10$8pGBE8rq2UKJ.InOgUMP1ekkJmR30W13BOuzlcmbwypi6twsBjGcW",
    isAdmin: false,
    image: null,
    createdAt: "2022-04-21T06:55:38.000Z",
    updatedAt: "2022-04-21T06:55:38.000Z",
    Followers: [],
    FollowerCount: 0,
    isFollowed: false,
  },
];

export default {
  created() {
    this.fetchUsers();
  },
  components: {
    NavTabs: NavTabs,
    TopUserCard: TopUserCard,
  },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    fetchUsers() {
      this.users = dummyUsers;
    },
  },
};
</script>