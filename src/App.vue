<script setup lang="ts">
import TheNav from './components/TheNav.vue'
import TheFooter from './components/TheFooter.vue'
import HeroSection from './components/sections/HeroSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import ServicesSection from './components/sections/ServicesSection.vue'
import ContactSection from './components/sections/ContactSection.vue'
</script>

<template>
  <div class="top-bar" />
  <TheNav />
  <main>
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <ContactSection />
  </main>
  <TheFooter />
</template>

<style scoped>
.top-bar {
  height: 3px;
  background-color: var(--color-brand);
  width: 100%;
}
</style>
