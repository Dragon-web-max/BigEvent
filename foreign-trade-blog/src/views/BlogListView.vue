<script setup lang="ts">
import { ref, computed } from 'vue';
import { useBlogStore, type BlogPost } from '@/stores/blogStore';
import BlogCard from '@/components/ui/BlogCard.vue';

const blogStore = useBlogStore();
const categories = ['全部', ...new Set(blogStore.posts.map((p: BlogPost) => p.category))];
const selectedCategory = ref('全部');

const filteredPosts = computed(() => {
  if (selectedCategory.value === '全部') return blogStore.posts;
  return blogStore.posts.filter((post: BlogPost) => post.category === selectedCategory.value);
});

const selectCategory = (category: string) => {
  selectedCategory.value = category;
};
</script>

<template>
  <div class="blog-list-view">
    <div class="blog-header">
      <div class="container">
        <h1>行业洞察</h1>
        <p>关于全球贸易动态的最新分析</p>
      </div>
    </div>

    <div class="container">
      <div class="filters">
        <button 
          v-for="category in categories" 
          :key="category" 
          :class="['category-btn', { active: selectedCategory === category }]"
          @click="selectCategory(category)"
        >
          {{ category }}
        </button>
      </div>

      <div class="blog-grid">
        <BlogCard 
          v-for="post in filteredPosts" 
          :key="post.id" 
          :post="post" 
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/main.scss' as *;

.blog-header {
  padding: 3rem 0;
  background: linear-gradient(rgba(0, 82, 217, 0.7), rgba(0, 82, 217, 0.5)), url('/images/blog-banner.jpg') no-repeat center center/cover;
  color: white;
  text-align: center;
  @include mobile {
    padding: 2rem 0;
    h1 { font-size: 1.8rem; }
  }
}

.container {
  padding-top: 2rem;
  padding-bottom: 4rem;
}

.filters {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  @include mobile {
    flex-wrap: wrap;
    gap: 0.5rem;
    .category-btn {
      padding: 0.4rem 1rem;
    }
  }
  .category-btn {
    background: #fff;
    border: 1px solid #ddd;
    padding: 0.5rem 1.5rem;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.2s ease;
    &.active, &:hover {
      background: $primary;
      color: white;
      border-color: $primary;
    }
  }
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  @include mobile {
    grid-template-columns: 1fr;
  }
}
</style> 