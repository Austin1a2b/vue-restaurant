
<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/"> 餐廳評論網 </router-link>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>

    <div id="navbarSupportedContent" class="navbar-collapse collapse">
      <div class="ml-auto d-flex align-items-center">
        <!-- is user is admin -->
        <router-link
          v-if="currentUser.isAdmin"
          to="/admin/restaurants"
          class="text-white mr-3"
        >
          管理員後台
        </router-link>

        <!-- is user is login -->
        <template>
          <router-link v-if="isAuthenticated" to="#" class="text-white mr-3">
            {{ currentUser.name || "使用者" }} 您好
          </router-link>
          <button
            type="button"
            class="btn btn-sm btn-outline-success my-2 my-sm-0"
            @click="logout"
          >
            登出
          </button>
        </template>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";

export default {
  methods: {
    logout() {
      this.$store.commit("revokeAuthentication");
      this.$router.push("/signin");
    },
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
};

/*  以下為筆記 
  this.currentUser = {
  ...this.currentUser,
  ...dummyUser.currentUser,
      };
==> 解開 長這樣
this.currentUser = {  
//...this.currentUser  解開
        id: -1,
        name: "",
        email: "",
        image: "",
        isAdmin: false,
// ...dummyUser.currentUser, 解開
    id: 1,
    name: "管理者",
    email: "root@example.com",
    image: "https://i.pravatar.cc/300",
    isAdmin: true,

//但在 JS 中 重複的名稱 會保留後面的值 
// 所以 若 dummyUser.currentUser (後續API 回傳) 有值   ,則會後面的資料為主 

}
*/
</script>


<style scoped>
.navbar-toggler {
  min-width: 70px;
  margin-right: 0;
}

nav.bg-dark {
  padding: 14px 16px;
  background-color: #bd2333 !important;
}

.navbar-brand {
  font-size: 19px;
  padding: 0;
}
</style>