<template>
  <article class="main-page md:justify-center">
    <section class="relative w-full h-full flex flex-col items-center justify-center">
      <div
        class="main-logo"
        v-motion
        :initial="{
          opacity: 0
        }"
        :enter="{
          opacity: 1,
          transition: {
            delay: 200,
            duration: 750,
            ease: 'easeInOut'
          }
        }"
      >
        <img src="@/assets/images/axoav3_HD_2.webp" alt="alexoa" class="h-[300px]" />
      </div>
      <div class="main-info">
        <div
          class="name"
          v-motion
          :initial="{
            opacity: 0
          }"
          :enter="{
            opacity: 1,
            transition: {
              delay: 300,
              duration: 750,
              ease: 'easeInOut'
            }
          }"
        >
          <h1>Alejandro O.</h1>
        </div>
        <h2
          class="my-[15px] md:mb-[20px]"
          v-motion
          :initial="{
            opacity: 0,
            y: -15
          }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: {
              delay: 300,
              duration: 750,
              ease: 'easeInOut'
            }
          }"
        >
          Software Developer
        </h2>
        <div
          class="social-contact"
          v-motion
          :initial="{
            opacity: 0
          }"
          :enter="{
            opacity: 1,
            transition: {
              delay: 400,
              duration: 750,
              ease: 'easeInOut'
            }
          }"
        >
          <div class="w-[120px] md:w-[140px] flex justify-evenly">
            <a href="https://www.linkedin.com/in/alexolveraa" target="_blank">
              <svg><use href="@/assets/icons.svg#linkedin" /></svg>
            </a>
            <a href="https://github.com/alexoaa" target="_blank">
              <svg>
                <use href="@/assets/icons.svg#github" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<style scoped lang="scss">
.main-page {
  position: relative;
  height: calc(100dvh - 160px);
  width: 100%;
  display: flex;
  align-items: flex-start;

  .main-logo {
    position: relative;
    z-index: 3;
    width: 100%;
    max-width: 300px;
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 120%;
      height: 130%;
      border-radius: 50%;

      filter: blur(50px);
      z-index: 2;
      background: radial-gradient(
        circle,
        var(--principal-color-300) 10%,
        var(--principal-color-200) 50%,
        var(--principal-color-100) 80%
      );
    }
    img {
      position: relative;
      z-index: 3;
      margin: 0 auto;
    }
  }

  .main-info {
    position: relative;
    z-index: 10;
    text-align: center;
    padding-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .name {
      position: relative;
      font-weight: bold;
      margin: 10px 0;
      letter-spacing: 1px;
      -webkit-text-stroke: 4px transparent;

      h1 {
        width: 100%;
        font-size: clamp(2.7rem, 10vw, 5rem);
        color: var(--text-color-blue-white);
        filter: drop-shadow(5px 5px 10px var(--principal-color-300));
        text-transform: uppercase;
        &::before {
          content: 'Alejandro O.';
          position: absolute;
          top: 2px;
          left: 0;
          width: 100%;
          height: 100%;
          color: var(--text-color-blue-white);
        }
      }
      &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: -5%;
        width: 110%;
        height: 7px;
        border-radius: 10px;
        background-image: linear-gradient(
          90deg,
          var(--secondary-color-300) 10%,
          var(--secondary-color-200) 30%,
          var(--secondary-color-100) 60%,
          var(--tertiary-color-200) 90%
        );
      }
    }
    h2 {
      width: 100%;
      font-size: clamp(1.6rem, 5vw, 2.4rem);
      font-weight: bold;
    }
  }

  .social-contact {
    width: 100%;
    display: flex;
    justify-content: center;
    svg {
      width: clamp(2rem, 5vw, 2.5rem);
      height: clamp(2rem, 5vw, 2.5rem);
      fill: var(--tertiary-color-100);
      &:hover {
        cursor: pointer;
        transform: scale(1.15);
        box-shadow: 0 0 10px var(--secondary-color-100);
        fill: var(--secondary-color-100);
      }
    }
  }
}
</style>
