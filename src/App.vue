<template>
  <div id="restaurant-forum">
    <Navbar />
    <main role="main" class="mt-5 bg-white">
      <router-view />
    </main>
  </div>
</template>
<style>
</style>

<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar: Navbar,
  },
};
</script>

<style scoped>
main {
  margin-top: 65px !important;
}
</style>  