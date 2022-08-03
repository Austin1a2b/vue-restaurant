// ./src/views/AdminCategories.vue
<template>
  <div class="container py-5">
    <AdminNav />
    <form class="my-4">
      <div class="form-row">
        <div class="col-auto">
          <input
            v-model="newCategoryName"
            type="text"
            class="form-control"
            placeholder="新增餐廳類別..."
          />
        </div>
        <div class="col-auto">
          <button
            @click.stop.prevent="createCategory"
            type="button"
            class="btn btn-primary"
          >
            新增
          </button>
        </div>
      </div>
    </form>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col" width="60">#</th>
          <th scope="col">Category Name</th>
          <th scope="col" width="210">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categories" :key="category.id">
          <th scope="row">
            {{ category.id }}
          </th>
          <td class="position-relative">
            <div v-show="!category.isEditing" class="category-name">
              {{ category.name }}
            </div>
            <input
              v-show="category.isEditing"
              v-model="category.name"
              type="text"
              class="form-control"
            />
            <span
              @click.prevent.stop="handleCancel(category.id)"
              v-show="category.isEditing"
              class="cancel"
            >
              ✕
            </span>
          </td>
          <td class="d-flex justify-content-between">
            <button
              @click.stop.prevent="toggleIsEditing(category.id)"
              v-show="!category.isEditing"
              type="button"
              class="btn btn-link mr-2"
            >
              Edit
            </button>
            <button
              @click.prevent.stop="
                updateCategory({ categoryId: category.id, name: category.name })
              "
              v-show="category.isEditing"
              type="button"
              class="btn btn-link mr-2"
            >
              Save
            </button>
            <button
              type="button"
              class="btn btn-link mr-2"
              @click.stop.prevent="deleteCategory(category.id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "@/components/AdminNav";
// import { v4 as uuidv4 } from "uuid";
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";

export default {
  components: {
    AdminNav,
  },

  data() {
    return {
      categories: [],
      newCategoryName: "",
    };
  },
  created() {
    this.fetchCategories();
  },
  methods: {
    async fetchCategories() {
      try {
        const response = await adminAPI.categories.get();
        const statusText = response.statusText;
        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        this.categories = response.data.categories.map((category) => {
          return {
            ...category,
            isEditing: false,
            nameCached: "",
          };
        });
      } catch (error) {
        Toast.fire({
          type: "error",
          title: "無法取得餐廳類別，請稍後再試",
        });
      }
    },
    async createCategory() {
      try {
        const response = await adminAPI.categories.create({
          name: this.newCategoryName,
        });
        console.log(response);
        const statusText = response.statusText;
        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        const categoryId = response.data.categoryId;
        this.categories.push({
          name: this.newCategoryName,
          id: categoryId,
        });
      } catch {
        Toast.fire({
          type: "error",
          title: "新增失敗，請稍後再試",
        });
      }
      this.newCategoryName = ""; // 清空原本欄位中的內容
    },
    async deleteCategory(categoryId) {
      try {
        const response = await adminAPI.categories.delete(categoryId);
        console.log(response);
        this.categories = this.categories.filter((category) => {
          return categoryId !== category.id;
        });
        const statusText = response.statusText;
        if (statusText !== "OK") {
          throw new Error(statusText);
        }
      } catch {
        Toast.fire({
          type: "error",
          title: "新增失敗，請稍後再試",
        });
      }
    },
    toggleIsEditing(categoryId) {
      this.categories = this.categories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            isEditing: !category.isEditing,
            nameCached: category.name,
          };
        }
        return category;
      });
    },
    async updateCategory({ categoryId, name }) {
      try {
        const response = await adminAPI.categories.update({
          categoryId: categoryId,
          name: name,
        });
        console.log(response);
        this.toggleIsEditing(categoryId);
      } catch {
        Toast.fire({
          type: "error",
          title: "修改失敗，請稍後再試",
        });
      }
    },
    handleCancel(categoryId) {
      this.categories = this.categories.filter((category) => {
        if (categoryId === category.id) {
          return {
            ...category,
            name: category.nameCached,
          };
        }
        return category;
      });
      this.toggleIsEditing(categoryId);
    },
  },
};
</script>



<style scoped>
.category-name {
  padding: 0.375rem 0.75rem;
  border: 1px solid transparent;
  outline: 0;
  cursor: auto;
}

.btn-link {
  width: 62px;
}

.cancel {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border: 1px solid #aaaaaa;
  border-radius: 50%;
  user-select: none;
  cursor: pointer;
  font-size: 12px;
}
</style>