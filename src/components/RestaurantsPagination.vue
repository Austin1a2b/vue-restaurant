<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <!-- 回到上一頁 previousPage -->
      <li class="page-item" :class="{ disabled: currentPage === 1 }">
        <router-link
          class="page-link"
          aria-label="Previous"
          :to="{
            name: 'restaurants',
            query: { categoryId, page: previousPage },
          }"
        >
          <span aria-hidden="true">&laquo;</span>
        </router-link>
      </li>

      <!-- 頁碼 -->
      <li
        v-for="page in totalPage"
        :key="page"
        :class="{ active: currentPage === page }"
        class="page-item"
      >
        <router-link
          class="page-link"
          :to="{ name: 'restaurants', query: { categoryId, page } }"
        >
          {{ page }}
        </router-link>
      </li>

      <!-- 前往下一頁 nextPage -->
      <li
        class="page-item"
        :class="{ disabled: currentPage === totalPage.length }"
      >
        <router-link
          class="page-link"
          aria-label="Next"
          :to="{ name: 'restaurants', query: { categoryId, page: nextPage } }"
        >
          <span aria-hidden="true">&raquo;</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    categoryId: {
      type: [String, Number], // 因為預設 是空字串,後續會是數字 , 所以要設置為
      default: "",
    },
    currentPage: {
      type: Number,
    },
    totalPage: {
      type: Array,
      required: true,
    },
    previousPage: {
      type: Number,
      required: true,
    },
    nextPage: {
      type: Number,
      required: true,
    },
  },
};
</script>


<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.page-link {
  height: 37px;
  padding: 7px 20px;
  color: #bd2333;
}

.page-item.active .page-link,
.page-item.active span {
  color: white;
  background-color: #bd2333;
  border-color: #bd2333;
  z-index: 1;
}

.page-item span {
  color: #bd2333;
}

a.page-link:hover,
a.page-link:hover span {
  color: white;
  background-color: #bd2333;
  border-color: #bd2333;
}
</style>