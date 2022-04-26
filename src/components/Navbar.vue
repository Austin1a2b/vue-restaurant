
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
          <router-link
            v-if="currentUser.isAuthenticated"
            to="#"
            class="text-white mr-3"
          >
            {{ currentUser.name || "使用者" }} 您好
          </router-link>
          <button
            type="button"
            class="btn btn-sm btn-outline-success my-2 my-sm-0"
          >
            登出
          </button>
        </template>
      </div>
    </div>
  </nav>
</template>

<script>
// seed data
// 假資料 => 這組資料是在串 API 之前，先模擬一組登入使用者
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
  // data 屬性裡的 currentUser，這是在使用者未登入的情況下，Navbar 預設的空資料，他的登入狀態是 false，一旦接受到外部資料，這組 currentUser 就會被覆寫。 =>
  //   應該是說  要用在 網頁互動的資料 ; 也就是 設計 網頁結構 用的 資料
  data() {
    return {
      currentUser: {
        id: -1,
        name: "",
        email: "",
        image: "",
        isAdmin: false,
      },
      isAuthenticated: false,
    };
  },
  methods: {
    fetchUser() {
      this.currentUser = {
        ...this.currentUser,
        ...dummyUser.currentUser,
      };
      this.isAuthenticated = dummyUser.isAuthenticated;
    },
  },
  created() {
    this.fetchUser();
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

