<script setup lang="ts">
import TheNav from './components/TheNav.vue'
import TheFooter from './components/TheFooter.vue'
import HeroSection from './components/sections/HeroSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import ServicesSection from './components/sections/ServicesSection.vue'
import ProcessSection from './components/sections/ProcessSection.vue'
import ContactSection from './components/sections/ContactSection.vue'
</script>

<template>
  <div class="h-0.75 w-full bg-brand" />
  <TheNav />
  <main>
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <ProcessSection />
    <ContactSection />
  </main>
  <TheFooter />
</template>
