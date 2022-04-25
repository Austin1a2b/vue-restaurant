<template>
  <div class="row no-gutters">
    <div class="col-md-4">
      <img
        src="https://i.imgur.com/1LW2zCB.jpeg"
        width="300px"
        height="300px"
      />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{ profile.name }}</h5>
        <p class="card-text">{{ profile.email }}</p>
        <ul class="list-unstyled list-inline">
          <li>
            <strong>{{ profile.commentsLength }}</strong> 已評論餐廳
          </li>
          <li>
            <strong>{{ profile.favoritedRestaurantsLength }}</strong>
            收藏的餐廳
          </li>
          <li>
            <strong>{{ followingsLength }}</strong> followings (追蹤者)
          </li>
          <li>
            <strong>{{ followers.length }}</strong> followers (追隨者)
          </li>
        </ul>

        <template v-if="currentUser.id === profile.id">
          <router-link to="#" class="btn btn-primary"> Edit </router-link>
        </template>
        <template v-else>
          <button
            type="submit"
            v-if="isFollowed"
            @click.prevent.stop="deleteFollowed()"
            class="btn btn-danger"
          >
            取消追蹤
          </button>
          <button
            type="submit"
            v-else
            @click.prevent.stop="addFollowed()"
            class="btn btn-primary"
          >
            追蹤
          </button>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    profile: {
      type: Object,
      required: true,
    },
    currentUser: {
      type: Object,
      required: true,
    },
    isFollowed: {
      type: Boolean,
      required: true,
    },
    followers: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentUserId: "",
      profileId: this.profile.id,
      followingsLength: this.profile.followingsLength,
    };
  },
  methods: {
    deleteFollowed() {
      this.$emit("after-delete-followed", this.currentUser);
    },
    addFollowed() {
      this.$emit("after-add-followed", this.currentUser);
    },
  },
};
</script>