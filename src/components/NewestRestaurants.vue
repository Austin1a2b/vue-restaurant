// ./src/components/NewestRestaurants.vue
<template>
  <div class="card">
    <div class="card-header">最新餐廳</div>
    <div class="card-body">
      <div :key="restaurant.id" v-for="restaurant in restaurants">
        <h4>
          <a href="#">{{ restaurant.name }} </a>
          <small>{{
            restaurant.Category ? restaurant.Category.name : "未分類"
          }}</small>
        </h4>
        <p>
          {{ restaurant.description }}
        </p>
        {{ restaurant.createdAt | formNow }}
        <hr />
      </div>
    </div>
  </div>
</template>

<style scoped>
small {
  font-size: 10px;
}
</style>


<script>
import moment from "moment";

export default {
  props: {
    restaurants: {
      type: Array,
      required: true,
    },
  },
  filters: {
    formNow(datetime) {
      if (!datetime) {
        return "---";
      } else {
        return moment(datetime).fromNow();
        // moment().fromNow()  => 這是套件功能  "npm install moment@2.24.0"
      }
    },
  },
};
</script>