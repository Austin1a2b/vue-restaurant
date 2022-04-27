<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col" width="140">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.email }}</td>
          <td>{{ user.isAdmin | showRole }}</td>
          <td>
            <button
              @click.prevent.stop="toggleUserRole(user.id)"
              v-if="!(currentUser.id === user.id && user.isAdmin)"
              type="button"
              class="btn btn-link"
            >
              {{ user.isAdmin | showAction }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "../components/AdminNav";

const dummyData = {
  users: [
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$5ZuIWPJga1gF67fHHgww/uT1BJLXeHhvndOVI554btHhy.e4iRkWC",
      isAdmin: true,
      image: null,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
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
    },
  ],
};

const dummyCurrentUser = {
  profile: {
    id: 1,
    name: "root",
    email: "root@example.com",
    password: "$2a$10$5ZuIWPJga1gF67fHHgww/uT1BJLXeHhvndOVI554btHhy.e4iRkWC",
    isAdmin: true,
    image: null,
  },
};

export default {
  components: {
    AdminNav,
  },
  data() {
    return {
      users: [],
      currentUser: {
        id: "",
        name: "",
        isAdmin: "",
      },
    };
  },
  methods: {
    fetchData() {
      this.users = dummyData.users;
    },
    fetchCurrentUser() {
      this.currentUser = dummyCurrentUser.profile;
    },
    toggleUserRole(userId) {
      this.users = this.users.map((user) => {
        if (user.id === userId) {
          return {
            ...user,
            isAdmin: !user.isAdmin,
          };
        }
        return user;
      });
    },
  },
  created() {
    this.fetchData();
    this.fetchCurrentUser();
  },
  filters: {
    showRole(isAdmin) {
      return isAdmin ? "admin" : "user";
    },
    showAction(isAdmin) {
      if (isAdmin) {
        return "set as user";
      } else {
        return "set as admin";
      }
    },
  },
};
</script>