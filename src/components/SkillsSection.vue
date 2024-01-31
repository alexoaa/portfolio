<template>
  <section class="main-page md:justify-center">
    <section
      class="relative w-full h-full flex flex-col items-center justify-center"
      :class="'section-hidden' ? !props.projectsSectionActive : 'section-show'"
      v-motion
      :initial="{
        opacity: 0
      }"
      :visibleOnce="{
        opacity: 1,
        transition: {
          duration: 400,
          ease: 'easeInOut'
        }
      }"
    >
      <div class="main-info">
        <h1
          class="section-title"
          v-motion
          :initial="{
            opacity: 0,
            y: -30
          }"
          :visibleOnce="{
            opacity: 1,
            y: 0,
            transition: {
              delay: 60,
              duration: 750,
              ease: 'easeInOut'
            }
          }"
        >
          {{ $t('section-skills.title') }}
        </h1>
        <div class="skills">
          <ul class="skills-list">
            <li
              v-motion
              :initial="{
                opacity: 0,
                scale: 0.3
              }"
              :visibleOnce="{
                opacity: 1,
                scale: 1,
                transition: {
                  delay: 50,
                  duration: 750,
                  ease: 'easeInOut'
                }
              }"
            >
              <svg style="filter: drop-shadow(var(--drop-shadow-values-top) var(--html-color))">
                <use href="@/assets/icons.svg#html" />
              </svg>
            </li>
            <li
              v-motion
              :initial="{
                opacity: 0,
                scale: 0.3
              }"
              :visibleOnce="{
                opacity: 1,
                scale: 1,
                transition: {
                  delay: 100,
                  duration: 750,
                  ease: 'easeInOut'
                }
              }"
            >
              <svg style="filter: drop-shadow(var(--drop-shadow-values-top) var(--css-color))">
                <use href="@/assets/icons.svg#css" />
              </svg>
            </li>
            <li
              v-motion
              :initial="{
                opacity: 0,
                scale: 0.3
              }"
              :visibleOnce="{
                opacity: 1,
                scale: 1,
                transition: {
                  delay: 120,
                  duration: 750,
                  ease: 'easeInOut'
                }
              }"
            >
              <svg
                style="filter: drop-shadow(var(--drop-shadow-values-top) var(--javascript-color))"
              >
                <use href="@/assets/icons.svg#javascript" />
              </svg>
            </li>
            <li
              v-motion
              :initial="{
                opacity: 0,
                scale: 0.3
              }"
              :visibleOnce="{
                opacity: 1,
                scale: 1,
                transition: {
                  delay: 140,
                  duration: 750,
                  ease: 'easeInOut'
                }
              }"
            >
              <svg style="filter: drop-shadow(var(--drop-shadow-values-top) var(--vue-color))">
                <use href="@/assets/icons.svg#vuejs" />
              </svg>
            </li>
            <li
              v-motion
              :initial="{
                opacity: 0,
                scale: 0.3
              }"
              :visibleOnce="{
                opacity: 1,
                scale: 1,
                transition: {
                  delay: 160,
                  duration: 750,
                  ease: 'easeInOut'
                }
              }"
            >
              <svg style="filter: drop-shadow(var(--drop-shadow-values-top) var(--sass-color))">
                <use href="@/assets/icons.svg#sass" />
              </svg>
            </li>
            <li
              v-motion
              :initial="{
                opacity: 0,
                scale: 0.3
              }"
              :visibleOnce="{
                opacity: 1,
                scale: 1,
                transition: {
                  delay: 180,
                  duration: 750,
                  ease: 'easeInOut'
                }
              }"
            >
              <svg style="filter: drop-shadow(var(--drop-shadow-values-top) var(--tailwind-color))">
                <use href="@/assets/icons.svg#tailwind" />
              </svg>
            </li>
            <li
              v-motion
              :initial="{
                opacity: 0,
                scale: 0.3
              }"
              :visibleOnce="{
                opacity: 1,
                scale: 1,
                transition: {
                  delay: 200,
                  duration: 750,
                  ease: 'easeInOut'
                }
              }"
            >
              <svg style="filter: drop-shadow(var(--drop-shadow-values-top) var(--nodejs-color))">
                <use href="@/assets/icons.svg#nodejs" />
              </svg>
            </li>
            <li
              v-motion
              :initial="{
                opacity: 0,
                scale: 0.3
              }"
              :visibleOnce="{
                opacity: 1,
                scale: 1,
                transition: {
                  delay: 220,
                  duration: 750,
                  ease: 'easeInOut'
                }
              }"
            >
              <svg style="filter: drop-shadow(var(--drop-shadow-values-top) var(--express-color))">
                <use href="@/assets/icons.svg#express" />
              </svg>
            </li>
            <li
              v-motion
              :initial="{
                opacity: 0,
                scale: 0.3
              }"
              :visibleOnce="{
                opacity: 1,
                scale: 1,
                transition: {
                  delay: 240,
                  duration: 750,
                  ease: 'easeInOut'
                }
              }"
            >
              <svg style="filter: drop-shadow(var(--drop-shadow-values-top) var(--mysql-color))">
                <use href="@/assets/icons.svg#mysql" class="scale-110" />
              </svg>
            </li>
            <li
              v-motion
              :initial="{
                opacity: 0,
                scale: 0.3
              }"
              :visibleOnce="{
                opacity: 1,
                scale: 1,
                transition: {
                  delay: 260,
                  duration: 750,
                  ease: 'easeInOut'
                }
              }"
            >
              <svg style="filter: drop-shadow(var(--drop-shadow-values-top) var(--git-color))">
                <use href="@/assets/icons.svg#git" />
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
const props = defineProps(['skillsSectionActive']);
</script>

<style scoped lang="scss">
.main-page {
  position: relative;
  min-height: 100dvh;
  width: 100%;
  padding: 110px 10px 0;
  display: flex;
  align-items: flex-start;
  z-index: 10;

  .main-info {
    position: relative;
    width: 100%;
    padding: 30px 0;
    background: var(--primary-color-100-opacity-4);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    .section-title {
      margin: 0 12px 50px;
    }
    .skills {
      display: flex;
      justify-content: center;
      .skills-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 100px));
        width: 100%;
        gap: 15px;
        justify-content: center;

        li {
          position: relative;
          width: 100px;
          height: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
          svg {
            width: 80px;
            height: 80px;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 768px) {
  .main-page {
    min-height: calc(100dvh / 2);
  }
}

@media screen and (min-width: 1200px) {
  .main-page {
    align-items: center;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  .main-info {
    .section-title {
      margin: 0 0 50px !important;
    }
  }
}
</style>
