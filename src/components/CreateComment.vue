<template>
  <form>
    <div class="form-group mb-4">
      <label for="text">留下評論：</label>
      <textarea v-model="text" class="form-control" rows="3" name="text" />
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <button type="button" class="btn btn-link" @click="$router.back()">
        回上一頁
      </button>
      <button
        type="submit"
        class="btn btn-primary mr-0"
        @click.prevent.stop="handleSubmit()"
      >
        Submit
      </button>
    </div>
  </form>
</template>


<script>
import restaurantsAPI from "./../apis/restaurants";

export default {
  props: {
    restaurantId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      text: "",
    };
  },
  methods: {
    async handleSubmit() {
      try {
        // TODO: 向 API 發送 POST 請求
        const { data } = await restaurantsAPI.addRestaurantComment({
          restaurantId: this.restaurantId,
          text: this.text,
        });

        if (data.status === "error") {
          throw new Error(data.message);
        }
        // 伺服器新增 Comment 成功後...
        this.$emit("after-create-comment", {
          commentId: data.commentId,
          restaurantId: this.restaurantId,
          text: this.text,
        });
        this.text = ""; // 將表單內的資料清空
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>