<template>
  <footer>
    <p>©2024 {{ $t('footer') }}</p>
  </footer>
</template>

<script setup></script>

<style scoped lang="scss">
footer {
  position: relative;
  z-index: 10;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 20px;
  svg {
    height: 50px;
    width: 50px;
  }
  p {
    display: block;
    width: h-full;
  }
}

@media screen and (min-width: 768px) {
  p {
    margin-left: 10px;
  }
}
</style>
