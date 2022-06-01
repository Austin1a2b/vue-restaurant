<template>
  <div class="row no-gutters">
    <div class="col-md-4">
      <img :src="profile.image" width="300px" height="300px" />
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
            <strong>{{ profile.followingsLength }}</strong> followings (追蹤者)
          </li>
          <li>
            <strong>{{ profile.followersLength }}</strong> followers (追隨者)
          </li>
        </ul>

        <template v-if="currentUser.id === profile.id">
          <router-link
            :to="{ name: 'users-edit', params: { id: currentUser.id } }"
            class="btn btn-primary"
          >
            Edit
          </router-link>
        </template>
        <template v-else>
          <button
            type="submit"
            v-if="isFollowed"
            @click.prevent.stop="deleteFollowed(profile.id)"
            class="btn btn-danger"
          >
            取消追蹤
          </button>
          <button
            type="submit"
            v-else
            @click.prevent.stop="addFollowed(profile.id)"
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
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";

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
    initialIsFollowed: {
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
      isFollowed: this.initialIsFollowed,
    };
  },
  methods: {
    async deleteFollowed(userId) {
      try {
        const { data } = await usersAPI.deleteFollowing({ userId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.$emit("after-delete-followed", this.currentUser);
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法刪除追蹤",
        });
      }
    },
    async addFollowed(userId) {
      try {
        const { data } = await usersAPI.addFollowing({ userId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.$emit("after-add-followed", this.currentUser);
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法加到追蹤",
        });
      }
    },
  },
  watch: {
    initialIsFollowed(isFollowed) {
      this.isFollowed = isFollowed;
    },
  },
};
</script>