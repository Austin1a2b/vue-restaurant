<template>
  <div class="container py-5">
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input
          v-model="currentUser.name"
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
          <img :src="currentUser.image" alt="" />
        </div>
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
        />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>


<script>
const dummyData = {
  currentUser: {
    name: "管理者",
    image: "https://i.pravatar.cc/300",
  },
};

export default {
  data() {
    return {
      currentUser: {
        name: "",
        image: "",
      },
    };
  },

  methods: {
    fetchUserData() {
      this.currentUser = {
        ...dummyData.currentUser,
      };
    },
  },
  created() {
    const { id } = this.$route.params;
    this.fetchUserData(id);
  },
};
</script>