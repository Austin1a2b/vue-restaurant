<template>
  <div>
    <h2 class="my-4">所有評論：</h2>

    <div v-for="comment in restaurantComments" :key="comment.id">
      <blockquote class="blockquote mb-0">
        <button
          v-if="currentUser.isAdmin"
          type="button"
          class="btn btn-danger float-right"
          @click.prevent.stop="handleDeleteButtonClick(comment.id)"
        >
          Delete
        </button>
        <h3>
          <a href="#"> {{ comment.User.name }}</a>
        </h3>
        <p>{{ comment.text }}</p>
        <footer class="blockquote-footer">
          {{ comment.createdAt | fromNow }}
        </footer>
      </blockquote>
      <hr />
    </div>
  </div>
</template>



<script>
import { fromNowFilter } from "./../utils/mixins";
import { mapState } from "vuex";
import restaurantsAPI from "./../apis/restaurants";
import { Toast } from "./../utils/helpers";

export default {
  props: {
    restaurantComments: {
      type: Array,
      required: true,
    },
  },
  computed: {
    ...mapState(["currentUser"]),
  },

  mixins: [fromNowFilter],
  methods: {
    async handleDeleteButtonClick(commentId) {
      try {
        const { data } = await restaurantsAPI.deleteRestaurantComment({
          commentId,
        });
        // TODO: 請求 API 伺服器刪除 id 為 commentId 的評論
        if (data.status === "error") {
          throw new Error(data.message);
        }
        // 觸發父層事件 - $emit( '事件名稱' , 傳遞的資料 )
        this.$emit("after-delete-comment", commentId);
        Toast.fire({
          icon: "success",
          title: "移除評論成功",
        });
      } catch (error) {
        console.error(error.message);
        Toast.fire({
          icon: "error",
          title: "無法移除評論，請稍後再試",
        });
      }
    },
  },
};
</script>


<style scoped>
h2.my-4 {
  margin-bottom: 1rem !important;
  font-size: 18px;
}

h3 {
  margin-bottom: 3px;
  line-height: 1.3;
}

.blockquote-footer {
  font-size: 12.5px;
}
</style>