<template>
  <section class="main-page md:justify-center">
    <section class="relative w-full h-full md:h-[800px] flex flex-col items-center justify-center">
      <div class="main-info">
        <h1>Projects</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, provident necessitatibus.
          Repellat officiis itaque aliquam cum veritatis molestias minus! Ipsum illum consequuntur
          hic dolores dolor quaerat amet beatae, cumque sunt.
        </p>
      </div>
    </section>
  </section>
</template>

<script setup></script>

<style scoped lang="scss">
.main-page {
  position: relative;
  height: 100vh;
  width: 100%;
  padding: 0 10px;
  display: flex;
  align-items: flex-start;

  .main-info {
    position: relative;
    z-index: 10;
    text-align: center;
    padding-bottom: 20px;
    letter-spacing: 1px;

    h1 {
      font-size: 2.7rem;
      font-weight: bold;
      margin-bottom: 10px;
    }
    p {
    }
  }
}

@media screen and (min-width: 1200px) {
  .wrapper {
    // width: 900px;
  }
}
</style>
