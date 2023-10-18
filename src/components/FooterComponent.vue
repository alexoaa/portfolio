<template>
  <footer>
    <svg>
      <use href="@/assets/icons.svg#mexico" />
    </svg>
    <p>© Software engineer dedicated to transforming ideas into tangible solutions.</p>
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
