<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useBlogStore } from '@/stores/blogStore';
import { computed } from 'vue';

const route = useRoute();
const blogStore = useBlogStore();
const postId = computed(() => Number(route.params.id));
const post = computed(() => blogStore.getPostById(postId.value));

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};
</script>

<template>
  <section v-if="post" class="blog-detail">
    <h1 class="title">{{ post.title }}</h1>
    <div class="meta">
      <span class="category">{{ post.category }}</span>
      <span class="date">{{ formatDate(post.createdAt) }}</span>
      <span class="views"><i class="fas fa-eye"></i> {{ post.views }}</span>
    </div>
    <div class="featured-image">
      <img :src="post.featuredImage" :alt="post.title" />
    </div>
    <div class="content">
      {{ post.content }}
    </div>
  </section>
  <section v-else class="not-found">
    <h2>博客未找到</h2>
    <p>您访问的博客不存在或已被删除。</p>
  </section>
</template>

<style scoped lang="scss">
.blog-detail {
  max-width: 800px;
  margin: 2rem auto;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  padding: 2rem;
  .title {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #222;
  }
  .meta {
    display: flex;
    gap: 1.5rem;
    color: #888;
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
    .category {
      background: #4f8cff;
      color: #fff;
      border-radius: 12px;
      padding: 0.2rem 0.8rem;
      font-size: 0.9rem;
    }
    .date, .views {
      display: flex;
      align-items: center;
    }
    .views i {
      margin-right: 0.3rem;
    }
  }
  .featured-image {
    margin-bottom: 2rem;
    img {
      width: 100%;
      border-radius: 8px;
      object-fit: cover;
      max-height: 350px;
    }
  }
  .content {
    font-size: 1.1rem;
    color: #333;
    line-height: 1.8;
    white-space: pre-line;
  }
}
.not-found {
  text-align: center;
  margin: 4rem 0;
  color: #888;
}
</style> 