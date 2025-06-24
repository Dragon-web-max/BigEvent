<template>
  <button 
    :class="['gradient-btn', size]"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  size?: 'small' | 'medium' | 'large';
}>();
defineEmits(['click']);
</script>

<style lang="scss" scoped>
@use '@/assets/scss/main.scss' as *;

.gradient-btn {
  background: linear-gradient(90deg, $primary, $secondary);
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 30px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: 0.6s;
  }
  
  &:hover::after {
    left: 100%;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba($primary, 0.2);
  }
  
  &.small {
    padding: 8px 20px;
    font-size: 0.9rem;
  }
}
</style> 