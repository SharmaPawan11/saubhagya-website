<script setup lang="ts">
  const products = ref([
    {
      name: '',
      message: 'Advocate Saubhagya Mishra demonstrated a profound understanding of my case and exhibited a level of commitment that was truly commendable. Saubhagya Mishra\'s legal acumen is second to none and his ability to navigate complex legal intricacies with ease is truly impressive. He took time to listen attentively to my concerns, offering insightful guidance and crafting a strategic approach that was tailored to my unique circumstances.',
      thumb: ''
    },
    {
      name: '',
      message: 'I cannot recommend Saubhagya Mishra highly enough. his expertise, professionalism and dedication to his clients are unmatched. He is not only incredibly knowledgeable in his field but also compassionate and understanding, making a potentially stressful situation much more manageable. His communication skills are excellent. His dedication, attention to detail and expertise in this field are truly impressive. I highly recommend his services to anyone seeking exceptional legal representation.',
      thumb: ''
    }
  ]);
  const responsiveOptions = ref([
    {
      breakpoint: '1400px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '1199px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '575px',
      numVisible: 1,
      numScroll: 1
    }
  ]);
</script>

<template>
  <div class="testimonial">
    <h2 class="section-header">
      Let's hear out what our customer says
    </h2>
    <Carousel :value="products" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions" circular :autoplayInterval="5000">
      <template #item="slotProps">

      </template>
    </Carousel>
  </div>
</template>

<style scoped lang="scss">
  .testimonial {
    padding: 3rem 4rem;

    .section-header {
      text-align: left;
    }
    .section-header::before {
      left: 0;
    }
  }
</style>
