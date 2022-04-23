<template>
  <div class="col-3">
    <a href="#">
      <img
        src="http://via.placeholder.com/300x300?text=No+Image"
        width="140px"
        height="140px"
      />
    </a>
    <h2>{{ user.name }}</h2>
    <span class="badge badge-secondary"
      >追蹤人數：{{ user.FollowerCount }}</span
    >
    <p class="mt-3">
      <button
        type="button"
        class="btn btn-danger"
        v-if="user.isFollowed"
        @click.prevent.stop="deleteFollowed"
      >
        取消追蹤
      </button>
      <button
        type="button"
        class="btn btn-primary"
        v-else
        @click.prevent.stop="addFollowed"
      >
        追蹤
      </button>
    </p>
  </div>
</template>


<script>
export default {
  props: {
    initialuser: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      user: this.initialuser,
    };
  },
  methods: {
    addFollowed() {
      console.log(this.user);
      this.user = {
        ...this.user,
        isFollowed: true,
      };
    },
    deleteFollowed() {
      this.user = {
        ...this.user,
        isFollowed: false,
      };
    },
  },
};
</script>