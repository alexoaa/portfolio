<template>
  <section
    class="main-page section-hidden"
    :class="{
      'section-show': props.projectsSectionActive
    }"
  >
    <section class="overflow-hidden" v-show="props.projectsSectionActive">
      <div class="projects-info">
        <h1
          class="section-title animate__animated animate__fadeInDown"
          style="animation-duration: 1s"
        >
          My work
        </h1>
        <ul class="projects-cards-container">
          <li
            class="project-card"
            v-motion
            :initial="{
              opacity: 0,
              scale: 0.8,
              y: 50
            }"
            :visibleOnce="{
              opacity: 1,
              scale: 1,
              y: 0,
              transition: {
                duration: 700,
                ease: 'easeInOut'
              }
            }"
          >
            <a href="https://dogbarber.alexoa.dev/" target="_blank">
              <img src="@/assets/images/dogbarber.webp" alt="" />
              <div class="project-card-desc">
                <h1>DogBarber - Pet Grooming</h1>
                <p>
                  Web application for a small business that offers grooming services. The main
                  objective is to digitize and streamline the appointment scheduling process with
                  the pet groomer, manage the daily, monthly, and annual schedule, and allow
                  customers to schedule appointments without having to call or go to a physical
                  store.
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
                  <li>
                    <svg>
                      <use href="@/assets/icons.svg#mongodb" />
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
  min-height: 700px;
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
      flex-direction: column;
      gap: 50px;
      align-items: center;
      min-height: 600px;

      .project-card {
        border-radius: 16px;
        border: 2px solid var(--primary-color-200);
        overflow: hidden;
        min-height: 500px;
        width: 300px;
        a {
          position: relative;
          display: block;
          width: 100%;
          height: 100%;
          img {
            width: 100%;
            height: 50%;
            object-fit: contain;
            object-position: center;
            transition: all 450ms ease-in-out;
          }
          .project-card-desc {
            padding: 20px 10px 10px;
            height: 100%;
            box-shadow: inset 0px 3px 5px var(--primary-color-200);
            border-top: 1px solid var(--primary-color-200);
            transition: all 450ms ease-in-out;
            h1 {
              width: fit-content;
              font-size: 1.6rem;
              font-weight: 500;
              margin-bottom: 7px;
              border: none;
              transition: all 450ms ease-in-out;
            }
            p {
              font-size: 1rem;
              transition: all 450ms ease-in-out;
            }
            .project-card-technologies {
              display: flex;
              justify-content: flex-start;
              margin-top: 15px;
              transition: all 450ms ease-in-out;
              li {
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

    .section-title {
      margin-bottom: 40px;
    }
    p {
      font-size: 1.2rem;
    }
  }
}

@media screen and (min-width: 768px) {
  .main-page {
    padding-top: 120px;
  }
}

@media screen and (min-width: 1200px) {
  .projects-info {
    .projects-cards-container {
      .project-card {
        min-height: 350px !important;
        height: 350px !important;
        width: 600px !important;
        box-shadow: 0 0 20px var(--primary-color-200);
        a {
          img {
            height: 100% !important;
          }
          &:hover {
            img {
              transform: scale(1.1);
            }
            .project-card-desc {
              height: 75% !important;
              h1 {
                font-size: 1.7rem !important;
              }
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
            bottom: 0;
            height: 100px !important;
            width: 100%;
            padding: 20px !important;
            background: rgba(9, 19, 27, 0.5);
            backdrop-filter: blur(6px);
            -webkit-backdrop-filter: blur(6px);
            h1 {
              margin-bottom: 10px !important;
              font-size: 1.9rem !important;
            }
            p {
              font-size: 0.9rem !important;
              opacity: 0;
            }
            .project-card-technologies {
              opacity: 0;
              background: var(--primary-color-100-opacity-4);
              padding: 7px;
              border-radius: 6px;
              width: fit-content;
              gap: 7px;
            }
          }
        }
      }
    }
  }
}
</style>
