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
          @click="scrollToSection('aboutMeSection')"
          :class="{ activeSection: props.currentSection == 'aboutMeSection' }"
        >
          About me
        </li>
        <li
          @click="scrollToSection('skillsSection')"
          :class="{ activeSection: props.currentSection == 'skillsSection' }"
        >
          Skills
        </li>
        <li
          @click="scrollToSection('projectsSection')"
          :class="{ activeSection: props.currentSection == 'projectsSection' }"
        >
          Projects
        </li>
      </ul>
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
        position: relative;
        min-width: 90px;
        &::after {
          transition: all 0.3s ease;
          opacity: 0;
          content: '';
          position: absolute;
          left: -5%;
          bottom: -2px;
          width: 0;
          height: 50%;
          clip-path: polygon(
            48% 79%,
            100% 79%,
            100% 93%,
            48% 93%,
            38% 100%,
            0 100%,
            0 88%,
            38% 88%
          );
          background-color: var(--text-color-blue-white);
        }
        &:hover {
          &::after {
            width: 110% !important;
            opacity: 1;
          }
        }
      }
    }
  }
}
.navbarStickyClass {
  box-shadow: 0 0 10px var(--tertiary-color-100);
  nav {
    top: 0;
  }
  backdrop-filter: blur(6px);
}
.activeSection {
  &::after {
    width: 110% !important;
    opacity: 1 !important;
  }
}
</style>
