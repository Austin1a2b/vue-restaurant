<template>
  <div class="card">
    <div class="card-header">最新評論</div>
    <div class="card-body">
      <div :Key="comment.id" v-for="comment in comments">
        <h4>
          <a href="#"> {{ comment.Restaurant.name }} </a>
        </h4>
        <p>{{ comment.text }}</p>
        by
        <a href="#"> {{ comment.User.name }}</a>
        at 3 days ago
        <hr />
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    comments: {
      type: Array,
    },
  },
};
</script>