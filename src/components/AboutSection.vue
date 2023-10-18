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
          My name is Alejandro, I am an enthusiastic web developer who is passionate on creating
          complete and functional web applications. I am interested in joining a team to gain
          experience in the software development process and with my experience, creativity and
          fresh ideas, contribute to the development and improvement of the value of the product,
          the company and the team. <br /><br />
          Eventually becoming an experienced software developer and being able to lead a team of
          developers and projects.
        </p>
        <div class="text-xl flex items-center">
          <span>Location: Mexico City</span>
          <svg class="w-[30px] h-[30px] ml-2">
            <use href="@/assets/icons.svg#mexico" />
          </svg>
        </div>
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
  padding: 0 10px;
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
    padding-top: 140px;
  }
}
</style>
