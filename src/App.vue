<template>
  <main id="main-container">
    <section class="wrapper">
      <MainPage id="mainPage" />
      <!-- <Navbar ref="navbar" id="navbar" /> -->
    </section>
    <Navbar
      :currentSection="currentSection"
      :navbarStickyActive="navbarStickyActive"
      ref="navbarHeader"
      id="navbarHeader"
    />
    <section class="wrapper" id="contentWrapper">
      <AboutSection ref="aboutMeSection" id="aboutMeSection" />
      <SkillsSection ref="skillsSection" id="skillsSection" />
      <ProjectsSection ref="projectsSection" id="projectsSection" />
    </section>
    <Transition
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <div class="button-to-top" v-show="navbarStickyActive">
        <button @click="scrollToTop">
          <svg>
            <use href="@/assets/icons.svg#arrow-up" />
          </svg>
        </button>
      </div>
    </Transition>
    <div class="cursor hidden lg:block" ref="cursor" id="cursor"></div>
  </main>
</template>

<script setup>
import MainPage from '@/views/MainPage.vue';
import Navbar from '@/components/NavbarComponent.vue';

import AboutSection from '@/components/AboutSection.vue';
import SkillsSection from '@/components/SkillsSection.vue';
import ProjectsSection from '@/components/ProjectsSection.vue';

import { onMounted, ref } from 'vue';
const currentSection = ref('');
const navbarStickyActive = ref(false);
const cursor = ref(null);

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

document.addEventListener('pointermove', (e) => {
  cursor.value.style.top = `${e.clientY}px`;
  cursor.value.style.left = `${e.clientX}px`;
});

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          currentSection.value = entry.target.getAttribute('id');
        }
      });
    },
    {
      rootMargin: '-50% 0px -50% 0px'
    }
  );

  const mainPage = document.getElementById('mainPage');
  const aboutMeSection = document.getElementById('aboutMeSection');
  const skillsSection = document.getElementById('skillsSection');
  const projectsSection = document.getElementById('projectsSection');
  observer.observe(mainPage);
  observer.observe(aboutMeSection);
  observer.observe(skillsSection);
  observer.observe(projectsSection);

  const navbarHeader = document.getElementById('navbarHeader');
  const observerStickyNavbar = new IntersectionObserver(
    (entries) => {
      // console.log(entries);
      if (entries[0].isIntersecting) {
        console.log(entries);
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

<style scoped>
#main-container {
  position: relative;
  background-image: url('src/assets/images/bg.webp');
}
</style>
