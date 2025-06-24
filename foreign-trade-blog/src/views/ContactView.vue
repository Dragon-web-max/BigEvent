<template>
  <div class="contact-view">
    <h1>联系我们</h1>
    <p>这是联系页面，下方是联系表单。</p>
    <ContactForm />
  </div>
</template>

<script setup lang="ts">
import ContactForm from '@/components/ui/ContactForm.vue';
</script>

<style scoped>
.contact-view {
  text-align: center;
  padding: 2rem;
}
</style> 