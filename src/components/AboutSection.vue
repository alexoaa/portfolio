<template>
  <section
    class="about-page section-hidden"
    :class="{
      'section-show': props.aboutMeSectionActive
    }"
  >
    <section class="overflow-hidden" v-show="props.aboutMeSectionActive">
      <div class="about-info">
        <h1
          class="section-title animate__animated animate__slideInLeft"
          style="animation-duration: 700ms"
        >
          About me
        </h1>
        <p class="animate__animated animate__slideInLeft mb-5" style="animation-duration: 800ms">
          Hi I'm Alejandro, a full stack web developer focused on developing complete web
          applications. I'm looking for a team to extend my experience as a software developer by
          sharing my ideas, creativity and teamwork, providing high value to both development
          process and software product. <br /><br />
          My goal is to achieve the required ins and outs, to become an architect and lead teams
          towards the whole development process.
        </p>
      </div>
    </section>
  </section>
</template>

<script setup>
const props = defineProps(['aboutMeSectionActive']);
</script>

<style scoped lang="scss">
.about-page {
  min-height: 100dvh;
  width: 100%;
  padding: 0 22px;
  position: relative;
  z-index: 10;
  padding-top: 110px;

  .about-info {
    text-align: left;
    padding-bottom: 20px;
    letter-spacing: 1px;

    .section-title {
      margin-bottom: 40px;
    }
    p {
      font-size: 1.2rem;
    }
  }
}
@media screen and (min-width: 768px) {
  .about-page {
    min-height: calc(100dvh / 2);
  }
}
@media screen and (min-width: 1200px) {
  .about-page {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
