<script setup lang="ts">
import Disclaimer from '@/components/Disclaimer.vue';
import Navbar from '@/components/Navbar.vue';
import Hero from '@/components/Hero.vue';
import Manifesto from '@/components/Manifesto.vue';
import PracticeSpectrum from '@/components/PracticeSpectrum.vue';
import Testimonials from '@/components/Testimonials.vue';
import CitizenRights from '@/components/CitizenRights.vue';
import ChambersConsultation from '@/components/ChambersConsultation.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <Disclaimer />
  <div class="app-layout">
    <Navbar />
    <main class="main-content">
      <Hero />
      <Manifesto />
      <PracticeSpectrum />
      <Testimonials />
      <CitizenRights />
      <ChambersConsultation />
    </main>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex-grow: 1;
  width: 100%;
  padding-top: 4.5rem;

  @media (max-width: 768px) {
    padding-top: 4rem;
  }
}
</style>
