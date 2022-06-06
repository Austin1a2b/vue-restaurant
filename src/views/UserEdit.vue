<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          v-model="name"
          id="name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <div>
          <img :src="image" alt="" width="300px" height="300px" />
        </div>
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"
        />
      </div>
      <button type="submit" :disabled="isProcessing" class="btn btn-primary">
        {{ isProcessing ? "資料更新中..." : "Submit" }}
      </button>
    </form>
  </div>
</template>


<script>
import { mapState } from "vuex";
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";

export default {
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
  data() {
    return {
      id: "",
      name: "",
      image: "",
      isProcessing: false,
    };
  },
  methods: {
    setUser() {
      this.id = this.currentUser.id;
      this.name = this.currentUser.name;
      this.image =
        this.currentUser.image ||
        "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcT6UdRbcbzqWG2-B2DgnxnTbup_lMM9sHFrv_7R6yUKa9313uftaYlHPzucRQRf-ObTESz2FAv2DDSnn93TfoI";
    },
    handleFileChange(e) {
      const files = e.target.files;
      if (files.length === 0) {
        return;
      } else {
        const imageURL = window.URL.createObjectURL(files[0]);
        this.image = imageURL;
      }
    },
    async handleSubmit(e) {
      if (!this.name) {
        Toast.fire({
          type: "warning",
          title: "您尚未填寫姓名",
        });
        return;
      }
      try {
        this.isProcessing = true;
        const form = e.target;
        const formData = new FormData(form);
        const { data, statusText } = await usersAPI.update({
          userId: this.id,
          formData,
        });
        if (statusText !== "OK" || data.status !== "success") {
          throw new Error(statusText);
        }
        this.$router.push({ name: "users-page", params: { id: this.id } });
      } catch (error) {
        this.isProcessing = false;
        Toast.fire({
          type: "error",
          title: "無法更新使用者資料，請稍後再試",
        });
      }
    },
  },
  created() {
    if (id.toString() !== this.currentUser.id.toString()) {
      this.$router.push({ name: "not-found" });
      return;
    }
    const { id } = this.$route.params;
    this.setUser(id);
  },
  watch: {
    currentUser() {
      const { id } = this.$route.params;
      this.setUser(id);
    },
  },
};
</script>