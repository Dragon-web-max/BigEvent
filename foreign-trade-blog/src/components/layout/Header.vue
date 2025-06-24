<template>
  <header class="header fixed-top">
    <div class="container d-flex align-items-center justify-content-between">
      <router-link to="/" class="logo">
        <span class="logo-text">环球贸易</span>
      </router-link>
      
      <nav class="main-nav">
        <router-link 
          v-for="item in navItems" 
          :key="item.path" 
          :to="item.path"
          class="nav-link"
        >
          {{ item.text }}
        </router-link>
      </nav>
      
      <div class="header-actions">
        <button class="btn-contact">联系我们</button>
        <LanguageSwitcher />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher.vue';

const navItems = ref([
  { path: '/', text: '首页' },
  { path: '/blog', text: '博客' },
  { path: '/about', text: '关于我们' },
  { path: '/contact', text: '联系我们' },
]);

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<style lang="scss" scoped>
@use '@/assets/scss/main.scss' as *;

.header {
  height: 70px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  align-items: center;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .logo-text {
    font-size: 1.8rem;
    font-weight: 700;
    color: $primary;
  }
  
  .nav-link {
    color: $text-dark;
    margin: 0 15px;
    font-weight: 500;
    position: relative;
    text-decoration: none;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: $accent;
      transition: width 0.3s;
    }
    
    &:hover::after,
    &.router-link-exact-active::after {
      width: 100%;
    }
  }
  
  .header-actions {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .btn-contact {
    background: linear-gradient(90deg, $primary, $secondary);
    color: white;
    border: none;
    padding: 8px 20px;
    border-radius: 4px;
    font-weight: 500;
    cursor: pointer;
    transition: transform 0.2s;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba($primary, 0.3);
    }
  }

  @include mobile {
    height: 60px;
    .main-nav, .header-actions {
      display: none;
    }
  }
}
</style> 