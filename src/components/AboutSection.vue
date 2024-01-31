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
          {{ $t('section-about-me.title') }}
        </h1>
        <p class="animate__animated animate__slideInLeft mb-5" style="animation-duration: 800ms">
          {{ $t('section-about-me.description') }}
          <br /><br />
          {{ $t('section-about-me.description2') }}
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
