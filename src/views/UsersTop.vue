// ./src/views/UsersTop.vue
<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="row text-center">
      <div
        v-for="user in users"
        :key="user.id"
        :initialuser="user"
        class="col-3"
      >
        <a href="#">
          <router-link :to="'/users/' + user.id">
            <img :src="user.image" width="140px" height="140px" />
          </router-link>
        </a>
        <router-link :to="'/users/' + user.id">
          <h2>{{ user.name }}</h2>
        </router-link>
        <span class="badge badge-secondary"
          >追蹤人數：{{ user.followerCount }}</span
        >
        <p class="mt-3">
          <button
            type="button"
            class="btn btn-danger"
            v-if="user.isFollowed"
            @click.prevent.stop="deleteFollowing(user.id)"
          >
            取消追蹤
          </button>
          <button
            type="button"
            class="btn btn-primary"
            v-else
            @click.prevent.stop="addFollowing(user.id)"
          >
            追蹤
          </button>
        </p>
      </div>
    </div>
  </div>
</template>


<script>
import NavTabs from "../components/NavTabs.vue";
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";

export default {
  created() {
    this.fetchUsers();
  },
  components: {
    NavTabs: NavTabs,
  },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async fetchUsers() {
      try {
        const { data } = await usersAPI.getTopUsers();
        console.log(data);
        this.users = data.users.map((user) => ({
          id: user.id,
          name: user.name,
          image:
            user.image ||
            "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcT6UdRbcbzqWG2-B2DgnxnTbup_lMM9sHFrv_7R6yUKa9313uftaYlHPzucRQRf-ObTESz2FAv2DDSnn93TfoI",
          followerCount: user.FollowerCount,
          isFollowed: user.isFollowed,
        }));
      } catch {
        Toast.fire({
          icon: "error",
          title: "無法取得美食達人，請稍後再試",
        });
      }
    },
    async addFollowing(userId) {
      try {
        const { data } = await usersAPI.addFollowing({ userId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.users = this.users.map((user) => {
          if (user.id !== userId) {
            return user;
          } else {
            return {
              ...user,
              followerCount: user.followerCount + 1,
              isFollowed: true,
            };
          }
        });
      } catch {
        Toast.fire({
          icon: "error",
        });
      }
    },
    async deleteFollowing(userId) {
      try {
        const { data } = await usersAPI.deleteFollowing({ userId });
        console.log(data);
        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.users = this.users.map((user) => {
          if (user.id !== userId) {
            return user;
          } else {
            return {
              ...user,
              followerCount: user.followerCount - 1,
              isFollowed: false,
            };
          }
        });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取消追蹤，請稍後再試",
        });
      }
    },
  },
};
</script>