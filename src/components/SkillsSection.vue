<template>
  <section
    class="main-page md:justify-center section-hidden"
    :class="{
      'section-show': props.skillsSectionActive
    }"
  >
    <section
      class="relative w-full h-full flex flex-col items-center justify-center"
      v-if="props.skillsSectionActive"
    >
      <div class="main-info">
        <h1
          v-motion
          :initial="{
            opacity: 0,
            y: -30
          }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: {
              delay: 60,
              duration: 750,
              ease: 'easeInOut'
            }
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
          Tech Stack
        </h1>
        <div class="skills">
          <ul class="skills-list">
            <li
              style="filter: drop-shadow(var(--drop-shadow-values-top) var(--html-color))"
              v-motion
              :initial="{
                opacity: 0,
                scale: 0.3
              }"
              :enter="{
                opacity: 1,
                scale: 1,
                transition: {
                  delay: 50,
                  duration: 750,
                  ease: 'easeInOut'
                }
              }"
            >
              <svg>
                <use href="@/assets/icons.svg#html" />
              </svg>
            </li>
            <li
              style="filter: drop-shadow(var(--drop-shadow-values-top) var(--css-color))"
              v-motion
              :initial="{
                opacity: 0,
                scale: 0.3
              }"
              :enter="{
                opacity: 1,
                scale: 1,
                transition: {
                  delay: 100,
                  duration: 750,
                  ease: 'easeInOut'
                }
              }"
            >
              <svg>
                <use href="@/assets/icons.svg#css" />
              </svg>
            </li>
            <li
              style="filter: drop-shadow(var(--drop-shadow-values-top) var(--javascript-color))"
              v-motion
              :initial="{
                opacity: 0,
                scale: 0.3
              }"
              :enter="{
                opacity: 1,
                scale: 1,
                transition: {
                  delay: 120,
                  duration: 750,
                  ease: 'easeInOut'
                }
              }"
            >
              <svg>
                <use href="@/assets/icons.svg#javascript" />
              </svg>
            </li>
            <li
              style="filter: drop-shadow(var(--drop-shadow-values-top) var(--vue-color))"
              v-motion
              :initial="{
                opacity: 0,
                scale: 0.3
              }"
              :enter="{
                opacity: 1,
                scale: 1,
                transition: {
                  delay: 140,
                  duration: 750,
                  ease: 'easeInOut'
                }
              }"
            >
              <svg>
                <use href="@/assets/icons.svg#vuejs" />
              </svg>
            </li>
            <li
              style="filter: drop-shadow(var(--drop-shadow-values-top) var(--sass-color))"
              v-motion
              :initial="{
                opacity: 0,
                scale: 0.3
              }"
              :enter="{
                opacity: 1,
                scale: 1,
                transition: {
                  delay: 160,
                  duration: 750,
                  ease: 'easeInOut'
                }
              }"
            >
              <svg>
                <use href="@/assets/icons.svg#sass" />
              </svg>
            </li>
            <li
              style="filter: drop-shadow(var(--drop-shadow-values-top) var(--tailwind-color))"
              v-motion
              :initial="{
                opacity: 0,
                scale: 0.3
              }"
              :enter="{
                opacity: 1,
                scale: 1,
                transition: {
                  delay: 180,
                  duration: 750,
                  ease: 'easeInOut'
                }
              }"
            >
              <svg>
                <use href="@/assets/icons.svg#tailwind" />
              </svg>
            </li>
            <li
              style="filter: drop-shadow(var(--drop-shadow-values-top) var(--nodejs-color))"
              v-motion
              :initial="{
                opacity: 0,
                scale: 0.3
              }"
              :enter="{
                opacity: 1,
                scale: 1,
                transition: {
                  delay: 200,
                  duration: 750,
                  ease: 'easeInOut'
                }
              }"
            >
              <svg>
                <use href="@/assets/icons.svg#nodejs" />
              </svg>
            </li>
            <li
              style="filter: drop-shadow(var(--drop-shadow-values-top) var(--express-color))"
              v-motion
              :initial="{
                opacity: 0,
                scale: 0.3
              }"
              :enter="{
                opacity: 1,
                scale: 1,
                transition: {
                  delay: 220,
                  duration: 750,
                  ease: 'easeInOut'
                }
              }"
            >
              <svg>
                <use href="@/assets/icons.svg#express" />
              </svg>
            </li>
            <li
              style="filter: drop-shadow(var(--drop-shadow-values-top) var(--mysql-color))"
              v-motion
              :initial="{
                opacity: 0,
                scale: 0.3
              }"
              :enter="{
                opacity: 1,
                scale: 1,
                transition: {
                  delay: 240,
                  duration: 750,
                  ease: 'easeInOut'
                }
              }"
            >
              <svg>
                <use href="@/assets/icons.svg#mysql" class="scale-110" />
              </svg>
            </li>
            <li
              style="filter: drop-shadow(var(--drop-shadow-values-top) var(--git-color))"
              v-motion
              :initial="{
                opacity: 0,
                scale: 0.3
              }"
              :enter="{
                opacity: 1,
                scale: 1,
                transition: {
                  delay: 260,
                  duration: 750,
                  ease: 'easeInOut'
                }
              }"
            >
              <svg>
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
  padding: 0 10px;
  display: flex;
  align-items: flex-start;
  padding-top: 110px;
  z-index: 10;

  .main-info {
    position: relative;
    width: 100%;
    padding: 30px 20px;
    background: rgba(16, 31, 44, 0.4);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(0px);
    h1 {
      width: fit-content;
      font-size: 2.7rem;
      font-weight: bold;
      margin-bottom: 50px;
      border-bottom: 2px solid var(--text-color-blue-white);
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

@media screen and (min-width: 1200px) {
  .main-page {
    min-height: calc(100dvh / 2 + 200px);
    padding-top: 0;
    align-items: center;
  }
  .main-info {
    padding: 30px 40px;
    // margin-top: 80px;
  }
}
</style>
