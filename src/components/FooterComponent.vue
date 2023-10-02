<template>
  <footer>
    <svg>
      <use href="@/assets/icons.svg#mexico" />
    </svg>
    <p>© Software engineer who loves turning ideas into reality and success.</p>
  </footer>
</template>

<script setup></script>

<style scoped lang="scss">
footer {
  position: relative;
  z-index: 10;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  svg {
    height: 40px;
    width: 40px;
    margin-right: 10px;
  }
}
</style>
