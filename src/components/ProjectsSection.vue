<template>
  <section
    class="about-page section-hidden"
    :class="{
      'section-show': props.projectsSectionActive
    }"
  >
    <section class="overflow-hidden" v-if="props.projectsSectionActive">
      <div class="about-info">
        <h1 class="animate__animated animate__bounceInLeft" style="animation-duration: 1s">
          Projects
        </h1>
        <p class="animate__animated animate__bounceInLeft" style="animation-duration: 1.2s">
          My name is Alejandro, an enthusiastic developer with a strong passion for software
          development, problem-solving and innovation.
          <br />
          <br />
          My focus is on creating complete and functional solutions that can make a positive
          difference in the world.

          <br />
          <br />
          I love to turn innovative ideas into successful products that meet the needs of users and
          improves people's lives.
          <br />
          <br />
          Software engineer who loves turning ideas into reality and success.
        </p>
      </div>
    </section>
  </section>
</template>

<script setup>
const props = defineProps(['projectsSectionActive']);
</script>

<style scoped lang="scss">
.about-page {
  min-height: 100dvh;
  width: 100%;
  padding: 0 10px;
  position: relative;
  z-index: 10;
  padding: 110px 0;

  .about-info {
    text-align: left;
    padding-bottom: 20px;
    letter-spacing: 1px;

    h1 {
      width: fit-content;
      font-size: 2.7rem;
      font-weight: bold;
      margin-bottom: 60px;
      border-bottom: 2px solid var(--text-color-blue-white);
    }
    p {
      font-size: 1.2rem;
    }
  }
}

@media screen and (min-width: 1200px) {
  .about-page {
    padding-top: 140px;
    // min-height: calc(100dvh / 2);
  }
}
</style>
