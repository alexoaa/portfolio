<template>
  <section
    class="main-page section-hidden"
    :class="{
      'section-show': props.projectsSectionActive
    }"
  >
    <section class="overflow-hidden" v-if="props.projectsSectionActive">
      <div class="projects-info">
        <h1 class="animate__animated animate__fadeInDown" style="animation-duration: 1s">
          Projects
        </h1>
        <ul class="projects-cards-container">
          <li
            class="project-card"
            v-motion
            :initial="{
              opacity: 0,
              scale: 0.6,
              y: 50
            }"
            :enter="{
              opacity: 1,
              scale: 1,
              y: 0,
              transition: {
                delay: 200,
                duration: 500,
                ease: 'easeInOut'
              }
            }"
          >
            <a href="#" target="_blank">
              <img src="@/assets/images/axoav3_HD_2.webp" alt="" />
              <div class="project-card-desc">
                <h1>Project number 2</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora asperiores unde
                  quasi quis. Minima cumque enim minus.
                </p>
                <ul class="project-card-technologies">
                  <li>
                    <svg>
                      <use href="@/assets/icons.svg#vuejs" />
                    </svg>
                  </li>
                  <li>
                    <svg>
                      <use href="@/assets/icons.svg#sass" />
                    </svg>
                  </li>
                  <li>
                    <svg>
                      <use href="@/assets/icons.svg#nodejs" />
                    </svg>
                  </li>

                  <li>
                    <svg>
                      <use href="@/assets/icons.svg#mysql" />
                    </svg>
                  </li>
                </ul>
              </div>
            </a>
          </li>
          <li
            class="project-card"
            v-motion
            :initial="{
              opacity: 0,
              scale: 0.6,
              y: 50
            }"
            :visibleOnce="{
              opacity: 1,
              scale: 1,
              y: 0,
              transition: {
                delay: 200,
                duration: 500,
                ease: 'easeInOut'
              }
            }"
          >
            <a href="#" target="_blank">
              <img src="@/assets/images/axoav3_HD_2.webp" alt="" />
              <div class="project-card-desc">
                <h1>Project number 2</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora asperiores unde
                  quasi quis. Minima cumque enim minus.
                </p>
                <ul class="project-card-technologies">
                  <li>
                    <svg>
                      <use href="@/assets/icons.svg#vuejs" />
                    </svg>
                  </li>
                  <li>
                    <svg>
                      <use href="@/assets/icons.svg#sass" />
                    </svg>
                  </li>
                  <li>
                    <svg>
                      <use href="@/assets/icons.svg#nodejs" />
                    </svg>
                  </li>

                  <li>
                    <svg>
                      <use href="@/assets/icons.svg#mysql" />
                    </svg>
                  </li>
                </ul>
              </div>
            </a>
          </li>
          <li
            class="project-card"
            v-motion
            :initial="{
              opacity: 0,
              scale: 0.6,
              y: 50
            }"
            :visibleOnce="{
              opacity: 1,
              scale: 1,
              y: 0,
              transition: {
                delay: 200,
                duration: 500,
                ease: 'easeInOut'
              }
            }"
          >
            <a href="#" target="_blank">
              <img src="@/assets/images/axoav3_HD_2.webp" alt="" />
              <div class="project-card-desc">
                <h1>Project number 2</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora asperiores unde
                  quasi quis. Minima cumque enim minus.
                </p>
                <ul class="project-card-technologies">
                  <li>
                    <svg>
                      <use href="@/assets/icons.svg#vuejs" />
                    </svg>
                  </li>
                  <li>
                    <svg>
                      <use href="@/assets/icons.svg#sass" />
                    </svg>
                  </li>
                  <li>
                    <svg>
                      <use href="@/assets/icons.svg#nodejs" />
                    </svg>
                  </li>

                  <li>
                    <svg>
                      <use href="@/assets/icons.svg#mysql" />
                    </svg>
                  </li>
                </ul>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  </section>
</template>

<script setup>
const props = defineProps(['projectsSectionActive']);
</script>

<style scoped lang="scss">
.main-page {
  min-height: 100dvh;
  width: 100%;
  position: relative;
  z-index: 10;
  padding: 110px 10px;

  .projects-info {
    text-align: left;
    padding-bottom: 20px;
    letter-spacing: 1px;
    .projects-cards-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      .project-card {
        border-radius: 16px;
        border: 2px solid var(--principal-color-200);
        box-shadow: 0 0 20px var(--principal-color-200);
        overflow: hidden;
        height: 500px;
        width: 300px;
        margin-top: 50px;
        a {
          display: block;
          width: 100%;
          height: 100%;
          img {
            width: 100%;
            height: 50%;
            object-fit: contain;
            object-position: center;
          }
          .project-card-desc {
            padding: 10px;
            box-shadow: inset 0px 5px 5px var(--principal-color-200);
            border-top: 1px solid var(--principal-color-200);
            h1 {
              width: fit-content;
              font-size: 1.6rem;
              font-weight: bold;
              margin-bottom: 7px;
              border: none;
            }
            p {
              font-size: 1rem;
            }
            .project-card-technologies {
              display: flex;
              justify-content: flex-start;
              margin-top: 15px;
              li {
                &:not(:last-child) {
                  margin-right: 4px;
                }
                svg {
                  width: 30px;
                  height: 30px;
                }
              }
            }
          }
        }
      }
    }

    h1 {
      width: fit-content;
      font-size: 2.7rem;
      font-weight: bold;
      margin-bottom: 10px;
      border-bottom: 2px solid var(--text-color-blue-white);
    }
    p {
      font-size: 1.2rem;
    }
  }
}

@media screen and (min-width: 768px) {
  .main-page {
    padding-top: 120px;
    // min-height: calc(100dvh / 2);
  }
}

@media screen and (min-width: 1200px) {
  .projects-info {
    .projects-cards-container {
      .project-card {
        height: 400px !important;
        width: 600px !important;
        a {
          position: relative;
          img {
            height: 80% !important;
            transition: all 600ms ease-in-out;
          }
          &:hover {
            img {
              transform: scale(1.1);
              opacity: 0.7;
              background: rgba(0, 0, 0, 0.7);
            }
            .project-card-desc {
              top: 50%;
              p {
                opacity: 1;
              }
              .project-card-technologies {
                opacity: 1;
              }
            }
          }
          .project-card-desc {
            position: absolute;
            top: 70%;
            left: 50%;
            transform: translate(-50%, 0);
            width: 100%;
            height: 100%;
            padding: 20px !important;
            background: rgba(16, 31, 44, 0.4);
            backdrop-filter: blur(6px);
            -webkit-backdrop-filter: blur(6px);
            transition: all 600ms ease-in-out;
            h1 {
              margin-bottom: 15px !important;
            }
            p {
              font-size: 0.9rem !important;
              transition: all 600ms ease-in-out;
              opacity: 0;
            }
            .project-card-technologies {
              transition: all 600ms ease-in-out;
              opacity: 0;
            }
          }
        }
      }
    }
  }
}
</style>
