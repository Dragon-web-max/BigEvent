<template>
  <div class="blog-card">
    <div class="card-image">
      <img :src="post.featuredImage" :alt="post.title" />
      <div class="category-badge">{{ post.category }}</div>
    </div>
    <div class="card-content">
      <h3 class="card-title">{{ post.title }}</h3>
      <p class="card-excerpt">{{ post.excerpt }}</p>
      <div class="card-footer">
        <span class="date">{{ formatDate(post.createdAt) }}</span>
        <span class="views"><i class="fas fa-eye"></i> {{ post.views }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: 'Logistics' | 'Market' | 'Policy';
  featuredImage: string;
  createdAt: string;
  views: number;
}

defineProps<{
  post: BlogPost;
}>();

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};
</script>

<style scoped lang="scss">
@use '@/assets/scss/main.scss' as *;
@use 'sass:map';

.blog-card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  overflow: hidden;
  cursor: pointer;
  @include card-hover-effect;

  .card-image {
    position: relative;
    height: 200px;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .category-badge {
      position: absolute;
      top: 1rem;
      left: 1rem;
      background-color: map.get($colors, accent);
      color: #fff;
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 500;
    }
  }

  .card-content {
    padding: 1.5rem;
  }

  .card-title {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
    color: map.get($colors, dark);
  }

  .card-excerpt {
    font-size: 0.95rem;
    color: #666;
    margin-bottom: 1rem;
  }

  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.85rem;
    color: #888;
    border-top: 1px solid #eee;
    padding-top: 1rem;
  }
}
</style>
