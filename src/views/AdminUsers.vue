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
              @click.prevent.stop="
                toggleUserRole({ userId: user.id, isAdmin: user.isAdmin })
              "
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
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["currentUser"]),
  },
  components: {
    AdminNav,
  },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async fetchData() {
      try {
        const response = await adminAPI.getAllUser();
        console.log(response);
        this.users = response.data.users;
        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }
      } catch {
        Toast.fire({
          icon: "error",
          title: "無法取得 伺服器資料 , 請稍後在試",
        });
      }
    },
    async toggleUserRole({ userId, isAdmin }) {
      try {
        const willBeAdmin = !isAdmin;
        console.log(willBeAdmin);
        const response = await adminAPI.updateUser({
          userId: userId,
          isAdmin: willBeAdmin.toString(),
        });
        console.log(response);
        if (
          response.statusText !== "OK" ||
          response.data.status !== "success"
        ) {
          throw new Error(response.statusText);
        }
        this.users = this.users.map((user) => {
          if (user.id === userId) {
            return {
              ...user,
              isAdmin: willBeAdmin,
            };
          }
          return user;
        });
      } catch {
        Toast.fire({
          icon: "error",
          title: "無法取得 伺服器資料 , 請稍後在試",
        });
      }
    },
  },
  created() {
    this.fetchData();
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