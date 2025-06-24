<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-about">
          <h4>环球贸易洞察</h4>
          <p>自2015年起，为国际业务提供可行的情报与分析。</p>
          <div class="social-links">
            <a v-for="(social, index) in socials" :key="index" :href="social.link" target="_blank">
              <i :class="social.icon"></i>
            </a>
          </div>
        </div>
        
        <div class="footer-links">
          <h4>快速链接</h4>
          <ul>
            <li v-for="(link, index) in quickLinks" :key="index">
              <router-link :to="link.path">{{ link.text }}</router-link>
            </li>
          </ul>
        </div>
        
        <div class="footer-contact">
          <h4>联系我们</h4>
          <ul>
            <li><i class="fas fa-envelope"></i> contact@globaltrade.com</li>
            <li><i class="fas fa-phone"></i> +1 (123) 456-7890</li>
            <li><i class="fas fa-map-marker-alt"></i> 美国，纽约</li>
          </ul>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} 环球贸易洞察. 版权所有.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const socials = ref([
  { icon: 'fab fa-twitter', link: '#' },
  { icon: 'fab fa-linkedin-in', link: '#' },
  { icon: 'fab fa-facebook-f', link: '#' },
]);

const quickLinks = ref([
  { path: '/blog', text: '博客' },
  { path: '/about', text: '关于我们' },
  { path: '/contact', text: '联系我们' },
  { path: '/', text: '隐私政策' },
]);
</script>

<style lang="scss" scoped>
@use '@/assets/scss/main.scss' as *;

.site-footer {
  background-color: $text-dark;
  color: #a0aec0;
  padding: 3rem 0 0;

  .footer-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #4a5568;

    @include mobile {
      text-align: center;
      .social-links {
        justify-content: center;
      }
    }
  }

  h4 {
    color: white;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  p {
    line-height: 1.8;
  }
  ul {
    list-style: none;
    padding: 0;
    li {
      margin-bottom: 0.5rem;
    }
  }
  a {
    color: #a0aec0;
    text-decoration: none;
    &:hover {
      color: white;
    }
  }

  .social-links {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
    a {
      font-size: 1.25rem;
    }
  }

  .footer-bottom {
    padding: 1.5rem 0;
    text-align: center;
    p {
      margin: 0;
      font-size: 0.9rem;
    }
  }
}
</style> 