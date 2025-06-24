import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: '物流' | '市场' | '政策';
  featuredImage: string;
  createdAt: string;
  views: number;
}

export const useBlogStore = defineStore('blog', () => {
  const posts = ref<BlogPost[]>([
    {
      id: 1,
      title: '人工智能如何彻底改变全球物流',
      excerpt: '探索人工智能如何重塑物流行业，从预测分析到自动化仓储。',
      content: '关于人工智能在物流领域应用的完整内容...',
      category: '物流',
      featuredImage: '/images/placeholder1.jpg',
      createdAt: '2023-10-01T09:00:00Z',
      views: 1520,
    },
    {
      id: 2,
      title: '解读2023年国际贸易新政策',
      excerpt: '深入探讨影响国际贸易的最新政策变化以及您的企业如何适应。',
      content: '关于贸易政策的完整内容...',
      category: '政策',
      featuredImage: '/images/placeholder2.jpg',
      createdAt: '2023-09-25T14:30:00Z',
      views: 980,
    },
    {
        id: 3,
        title: '新兴市场分析：东南亚',
        excerpt: '探讨外国投资者在东南亚市场日益增长的机遇与挑战。',
        content: '关于东南亚市场的完整内容...',
        category: '市场',
        featuredImage: '/images/placeholder3.jpg',
        createdAt: '2023-09-18T11:00:00Z',
        views: 2100,
      },
  ]);

  const getPostById = computed(() => {
    return (id: number) => posts.value.find(post => post.id === id);
  });

  const getPostsByCategory = computed(() => {
    return (category: string) => posts.value.filter(post => post.category === category);
  });

  return { posts, getPostById, getPostsByCategory };
}); 