<template>
  <div class="container py-5">
    <!--UserProfileCard   -->
    <div class="card mb-3">
      <UserProfileCard
        :profile="profile"
        :currentUser="currentUser"
        :isFollowed="isFollowed"
        :followers="followers"
        @after-add-followed="afterAddFollowed"
        @after-delete-followed="afterDeleteFollowed"
      />
    </div>
    <div class="row">
      <div class="col-md-4">
        <UserFollowingsCard :followings="followings" />
        <br />
        <UserFollowersCard :followers="followers" />
      </div>
      <div class="col-md-8">
        <UserCommentsCard :comments="comments" />
        <br />
        <UserFavoritedRestaurantsCard
          :favoritedRestaurants="favoritedRestaurants"
        />
      </div>
    </div>
  </div>
</template>


<script>
import UserProfileCard from "../components/UserProfileCard.vue";
import UserFollowingsCard from "../components/UserFollowingsCard.vue";
import UserFollowersCard from "../components/UserFollowersCard.vue";
import UserCommentsCard from "../components/UserCommentsCard.vue";
import UserFavoritedRestaurantsCard from "../components/UserFavoritedRestaurantsCard.vue";
import usersAPI from "./../apis/users";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["currentUser"]),
  },
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard,
  },
  data() {
    return {
      profile: {
        id: -1,
        name: "",
        email: "",
        image: "",
        commentsLength: "",
        favoritedRestaurantsLength: "",
        followersLength: "",
        followingsLength: "",
      },
      comments: [],
      favoritedRestaurants: [],
      followers: [],
      followings: [],
      isFollowed: null,
    };
  },
  methods: {
    async fetchData(userId) {
      try {
        const { data } = await usersAPI.get({ userId });
        console.log(data);
        this.comments = data.profile.Comments;
        this.favoritedRestaurants = data.profile.FavoritedRestaurants;
        this.followers = data.profile.Followers;
        this.followings = data.profile.Followings;
        const { id, name, email, image } = data.profile;
        this.isFollowed = data.isFollowed;
        this.profile = {
          id,
          name,
          email,
          image:
            image ||
            "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcT6UdRbcbzqWG2-B2DgnxnTbup_lMM9sHFrv_7R6yUKa9313uftaYlHPzucRQRf-ObTESz2FAv2DDSnn93TfoI",
          commentsLength: this.comments.length,
          favoritedRestaurantsLength: this.favoritedRestaurants.length,
          followersLength: this.followers.length,
          followingsLength: this.followings.length,
        };
      } catch (error) {
        console.log(error);
      }
    },
    afterAddFollowed(currentUser) {
      this.followers.push({
        id: currentUser.id,
        name: currentUser.name,
        email: currentUser.email,
        image: currentUser.image,
        createdAt: new Date(),
      });
      this.isFollowed = true;
    },
    afterDeleteFollowed(currentUser) {
      const id = currentUser.id;
      this.followers = this.followers.filter((follower) => follower.id !== id);
      this.isFollowed = false;
    },
  },
  created() {
    const { id } = this.$route.params;
    console.log(id);
    this.fetchData(id);
  },
};
</script>


