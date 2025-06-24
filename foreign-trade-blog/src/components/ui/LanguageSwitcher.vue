<template>
  <div class="language-switcher">
    <button class="current-lang">
      <i class="fas fa-globe"></i>
      <span>中文</span>
      <i class="fas fa-caret-down"></i>
    </button>
  </div>
</template>

<style scoped>
.language-switcher {
  position: relative;
}
.current-lang {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
}
</style> 