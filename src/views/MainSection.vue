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
        <img src="@/assets/images/profile.webp" alt="OAOA" class="h-[300px]" />
      </div>
      <div class="main-info">
        <h1
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
          Alejandro Olvera
        </h1>
        <h2
          class="rol"
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
          Web developer - FullStack
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
          <div class="w-[140px] md:w-[170px] flex justify-evenly">
            <a href="https://www.linkedin.com/in/alexolveraa" target="_blank">
              <svg><use href="@/assets/icons.svg#linkedin" /></svg>
            </a>
            <a href="https://github.com/alexoaa" target="_blank">
              <svg>
                <use href="@/assets/icons.svg#github" />
              </svg>
            </a>
            <a href="/cv_alexoa.pdf" target="_blank">
              <svg>
                <use href="@/assets/icons.svg#resume" />
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
  min-height: calc(100dvh - 120px);
  width: 100%;
  display: flex;
  align-items: center;

  .main-logo {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    box-shadow: 0 0 15px var(--primary-color-100);
    position: relative;
    z-index: 3;
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 130%;
      border-radius: 50%;
      filter: blur(50px);
      z-index: 2;
      background: radial-gradient(
        circle,
        var(--primary-color-300) 10%,
        var(--primary-color-200) 50%,
        var(--primary-color-100) 80%
      );
    }
    img {
      position: relative;
      z-index: 3;
      margin: 0 auto;
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
      border-radius: 50%;
    }
  }

  .main-info {
    position: relative;
    z-index: 10;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin-top: 20px;
    .name {
      position: relative;
      font-weight: 700;
      margin: 10px 0;
      display: block;
      letter-spacing: 1px;
      width: 100%;
      max-width: 600px;
      text-wrap: balance;
      font-size: clamp(2.7rem, 10vw, 4.5rem);
      color: var(--text-color-blue-white);
      filter: drop-shadow(0 0 15px var(--primary-color-300));
      text-transform: uppercase;
      line-height: 50px;
    }
    .rol {
      font-size: clamp(1.3rem, 5vw, 2.2rem);
      font-weight: 500;
      position: relative;
      margin: 15px 0 25px;
      display: block;
      width: 100%;
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
      transition: all 300ms ease;
      &:hover {
        cursor: pointer;
        transform: scale(1.15);
        box-shadow: 0 0 10px var(--secondary-color-100);
      }
    }
  }
}
@media screen and (min-width: 768px) {
  .main-logo {
    width: 300px !important;
    height: 300px !important;
    margin-top: 20px;
  }
  .main-info {
    margin: 0 !important;
    .name {
      line-height: 80px !important;
    }
    .rol {
      margin-bottom: 25px !important;
    }
  }
}

@media screen and (min-width: 1200px) {
  .main-logo {
    width: 350px !important;
    height: 350px !important;
  }
}
@media screen and (min-width: 1536px) {
}
</style>
