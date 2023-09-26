<template>
  <header class="header-navbar" :class="{ navbarStickyClass: navbarStickyActive }">
    <nav>
      <ul
        class="sections-buttons"
        v-motion
        :initial="{
          opacity: 0
        }"
        :enter="{
          opacity: 1,
          transition: {
            delay: 550
          }
        }"
      >
        <li
          type="button"
          @click="scrollToSection('aboutMeSection')"
          :class="{ activeSection: props.currentSection == 'aboutMeSection' }"
        >
          About me
        </li>
        <li
          type="button"
          @click="scrollToSection('skillsSection')"
          :class="{ activeSection: props.currentSection == 'skillsSection' }"
        >
          Skills
        </li>
        <li
          type="button"
          @click="scrollToSection('projectsSection')"
          :class="{ activeSection: props.currentSection == 'projectsSection' }"
        >
          Projects
        </li>
      </ul>
      <!-- <section>
        <button>English</button>
      </section> -->
    </nav>
  </header>
</template>

<script setup>
const props = defineProps(['currentSection', 'navbarStickyActive']);

function scrollToSection(section) {
  const scrolledTo =
    section === 'aboutMeSection'
      ? document.getElementById('aboutMeSection')
      : section === 'skillsSection'
      ? document.getElementById('skillsSection')
      : document.getElementById('projectsSection');
  scrolledTo.scrollIntoView({ behavior: 'smooth' });
}
</script>

<style scoped lang="scss">
.header-navbar {
  height: 80px;
  width: 100%;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  z-index: 100;
  transition: all 0.2s ease;

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
    transition: all 0.4s ease;

    .sections-buttons {
      display: flex;
      justify-content: space-evenly;
      padding: 15px 0;
      overflow: hidden;
      width: 100%;
      max-width: 670px;
      text-align: center;

      li {
        font-size: clamp(1.2rem, 4vw, 1.8rem);
        font-weight: 400;
        cursor: pointer;
        // min-height: 35px;
        min-width: 90px;
        &:hover {
          text-shadow: 0 0 20px var(--tertiary-color-100);
          font-weight: 600;
          transform: scale(1.1);
        }
      }
    }
  }
}
.navbarStickyClass {
  box-shadow: 0 0 10px var(--principal-color-100);
  box-shadow: 0 0 10px var(--secondary-color-200);
  nav {
    top: 0;
  }
  background-image: url('src/assets/images/bg.webp');
}
.activeSection {
  text-shadow: 0 0 20px var(--tertiary-color-100);
  font-weight: 600;
  transform: scale(1.1);
}
</style>
