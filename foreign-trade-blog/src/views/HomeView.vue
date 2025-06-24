<script setup lang="ts">
import { computed, ref } from 'vue';
import { useBlogStore, type BlogPost } from '@/stores/blogStore';
import GradientButton from '@/components/ui/GradientButton.vue';
import BlogCard from '@/components/ui/BlogCard.vue';

const blogStore = useBlogStore();
const featuredPosts = computed(() => blogStore.posts.slice(0, 3));

const services = ref([
  { icon: 'fas fa-chart-line', title: '市场分析', description: '对新兴和成熟市场的深入研究。' },
  { icon: 'fas fa-balance-scale', title: '贸易政策', description: '关于国际贸易法规的更新与分析。' },
  { icon: 'fas fa-truck-moving', title: '物流与供应链', description: '优化您的全球供应链以提高效率。' }
]);
</script>

<template>
  <div class="home-view">
    <!-- Hero Banner -->
    <section class="hero-banner">
      <div class="container">
        <div class="hero-content">
          <h1>全球贸易洞察与市场情报</h1>
          <p>关于国际贸易趋势和商业战略的专家分析</p>
          <GradientButton>阅读最新报告</GradientButton>
        </div>
      </div>
    </section>

    <!-- Featured Posts -->
    <section class="featured-posts">
      <div class="container">
        <div class="section-header">
          <h2>最新行业分析</h2>
          <router-link to="/blog" class="view-all">查看所有文章</router-link>
        </div>
        
        <div class="posts-grid">
          <BlogCard 
            v-for="post in featuredPosts" 
            :key="post.id" 
            :post="post"
          />
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services-section bg-light">
      <div class="container">
        <h2 class="text-center mb-5">我们的研究领域</h2>
        <div class="services-grid">
          <div v-for="(service, index) in services" :key="index" class="service-card">
            <div class="icon-box">
              <i :class="service.icon"></i>
            </div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/main.scss' as *;
@use 'sass:map';

.home-view {
  .hero-banner {
    background: linear-gradient(rgba(0, 82, 217, 0.7), rgba(0, 82, 217, 0.5)), url('/images/banner.jpg') no-repeat center center/cover;
    color: white;
    padding: 6rem 0;
    text-align: center;
    .hero-content {
      max-width: 700px;
      margin: 0 auto;
      h1 {
        font-size: 3rem;
        font-weight: 700;
        margin-bottom: 1rem;
      }
      p {
        font-size: 1.25rem;
        margin-bottom: 2rem;
        opacity: 0.9;
      }
    }
    @include mobile {
      padding: 4rem 0;
      h1 { font-size: 2rem; }
      p { font-size: 1rem; }
    }
  }

  .featured-posts {
    padding: 4rem 0;
    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
      h2 {
        font-size: 2rem;
        font-weight: 600;
      }
      .view-all {
        color: map.get($colors, primary);
        text-decoration: none;
        font-weight: 500;
      }
    }
    .posts-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      @include mobile {
        grid-template-columns: 1fr;
      }
    }
  }

  .services-section {
    padding: 4rem 0;
    background-color: map.get($colors, light);
    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
      @include mobile {
        grid-template-columns: 1fr;
      }
    }
    .service-card {
      background: white;
      padding: 2rem;
      text-align: center;
      border-radius: 8px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.05);
      .icon-box {
        font-size: 2.5rem;
        color: map.get($colors, primary);
        margin-bottom: 1rem;
      }
    }
  }

  .featured-posts, .services-section {
    @include mobile {
      padding: 2rem 0;
    }
  }
}
</style> 