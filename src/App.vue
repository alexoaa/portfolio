<template>
  <main id="mainContainer">
    <section class="wrapper">
      <MainSection id="mainSection" />
    </section>
    <Navbar
      :currentSection="currentSection"
      :navbarStickyActive="navbarStickyActive"
      id="navbarHeader"
    />
    <section class="wrapper" id="contentWrapper">
      <AboutSection id="aboutMeSection" :aboutMeSectionActive="aboutMeSectionActive" />
      <SkillsSection id="skillsSection" :skillsSectionActive="skillsSectionActive" />
      <ProjectsSection id="projectsSection" :projectsSectionActive="projectsSectionActive" />
    </section>
    <Transition
      enter-active-class="animate__animated animate__fadeIn animate__faster"
      leave-active-class="animate__animated animate__fadeOut animate__faster"
    >
      <div class="button-to-top" v-show="navbarStickyActive">
        <button @click="scrollToTop">
          <svg>
            <use href="@/assets/icons.svg#arrow-up" />
          </svg>
        </button>
      </div>
    </Transition>
    <div class="cursor hidden lg:block" ref="cursorRef" id="cursor"></div>
    <FooterComponent />
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue';

import Navbar from '@/components/NavbarComponent.vue';
import MainSection from '@/views/MainSection.vue';
import AboutSection from '@/components/AboutSection.vue';
import SkillsSection from '@/components/SkillsSection.vue';
import ProjectsSection from '@/components/ProjectsSection.vue';
import FooterComponent from '@/components/FooterComponent.vue';

const currentSection = ref('');
const navbarStickyActive = ref(false);
const cursorRef = ref(null);

const aboutMeSectionActive = ref(false);
const skillsSectionActive = ref(false);
const projectsSectionActive = ref(false);

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

document.addEventListener('pointermove', (e) => {
  cursorRef.value.style.top = `${e.clientY}px`;
  cursorRef.value.style.left = `${e.clientX}px`;
});

onMounted(() => {
  const mainSectionEl = document.getElementById('mainSection');
  const aboutMeSectionEl = document.getElementById('aboutMeSection');
  const skillsSectionEl = document.getElementById('skillsSection');
  const projectsSectionEl = document.getElementById('projectsSection');
  const navbarHeader = document.getElementById('navbarHeader');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          currentSection.value = entry.target.id;
          if (entry.target.id === 'aboutMeSection') aboutMeSectionActive.value = true;
          else if (entry.target.id === 'skillsSection') skillsSectionActive.value = true;
          else if (entry.target.id === 'projectsSection') projectsSectionActive.value = true;
        }
      });
    },
    {
      rootMargin: '-50% 0px -50% 0px'
    }
  );

  observer.observe(mainSectionEl);
  observer.observe(aboutMeSectionEl);
  observer.observe(skillsSectionEl);
  observer.observe(projectsSectionEl);

  const observerStickyNavbar = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        navbarStickyActive.value = true;
      } else {
        navbarStickyActive.value = false;
      }
    },
    {
      rootMargin: '0px 0px -100% 0px'
    }
  );
  observerStickyNavbar.observe(navbarHeader);
});
</script>

<style scoped lang="scss">
#mainContainer {
  position: relative;
  background-image: url('src/assets/images/bg.webp');
  background-attachment: fixed;
}
</style>
