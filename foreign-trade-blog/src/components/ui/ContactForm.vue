<template>
  <form class="contact-form" @submit.prevent="handleSubmit">
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" id="name" v-model="form.name" required />
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" v-model="form.email" required />
    </div>
    <div class="form-group">
      <label for="subject">Subject</label>
      <input type="text" id="subject" v-model="form.subject" required />
    </div>
    <div class="form-group">
      <label for="message">Message</label>
      <textarea id="message" rows="5" v-model="form.message" required></textarea>
    </div>
    <GradientButton type="submit">Send Message</GradientButton>
  </form>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import GradientButton from './GradientButton.vue';

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
});

const handleSubmit = () => {
  // Handle form submission logic
  console.log('Form submitted:', form);
  alert('Thank you for your message!');
  // Reset form
  form.name = '';
  form.email = '';
  form.subject = '';
  form.message = '';
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';

.contact-form {
  background: #fff;
  padding: 2.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);

  .form-group {
    margin-bottom: 1.5rem;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: map-get($colors, dark);
  }

  input,
  textarea {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    transition: border-color 0.3s ease;

    &:focus {
      outline: none;
      border-color: map-get($colors, primary);
    }
  }
}
</style>
