import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import BlogListView from '../views/BlogListView.vue';
import BlogDetailView from '../views/BlogDetailView.vue';
import AboutView from '../views/AboutView.vue';
import ContactView from '../views/ContactView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: { title: 'Global Trade Insights' }
  },
  {
    path: '/blog',
    name: 'BlogList',
    component: BlogListView,
    meta: { title: 'Industry Articles' }
  },
  {
    path: '/blog/:id',
    name: 'BlogDetail',
    component: BlogDetailView,
    meta: { title: 'Article' }
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    meta: { title: 'About Us' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView,
    meta: { title: 'Contact Us' }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

router.afterEach((to) => {
  document.title = `${to.meta.title} | GlobalBlog` || 'GlobalBlog';
});

export default router;
