<script setup lang="ts">

  const reviews = ref([
    {
      name: 'Shashank Shekhar Shukla',
      message: 'Saubhagya Mishra is a brilliant young lawyer who is incredibly sharp and knows his stuff inside and out. His unwavering dedication to his clients and genuine efforts to explain raw legal complexities in a manner accessible to all are truly unparalleled. I have personally benefitted from seeking his services and have first hand experience of his down to earth nature and absolute command over law. I offer my unequivocal recommendation for him to anyone seeking legal representation.',
      thumb: '/testimonials/letter-s.png'
    },
    {
      name: 'Himanshu Yadav',
      message: 'Advocate Saubhagya Mishra demonstrated a profound understanding of my case and exhibited a level of commitment that was truly commendable. Saubhagya Mishra\'s legal acumen is second to none and his ability to navigate complex legal intricacies with ease is truly impressive. He took time to listen attentively to my concerns, offering insightful guidance and crafting a strategic approach that was tailored to my unique circumstances.',
      thumb: '/testimonials/himanshu-yadav.png'
    },
    {
      name: 'Vishvadeep Rai',
      message: 'I cannot recommend Saubhagya Mishra highly enough. his expertise, professionalism and dedication to his clients are unmatched. He is not only incredibly knowledgeable in his field but also compassionate and understanding, making a potentially stressful situation much more manageable. His communication skills are excellent. His dedication, attention to detail and expertise in this field are truly impressive. I highly recommend his services to anyone seeking exceptional legal representation.',
      thumb: '/testimonials/vishvadeep-rai.png'
    },
    {
      name: 'Priyesh Dwivedi',
      message: 'Your ability to handle intricate legal matters efficiently has been a key factor in our success. Thank you for your exceptional service.',
      thumb: '/testimonials/priyesh-dwivedi.png'
    },
    {
      name: 'Vibhanshu Pandey',
      message: 'I worked as an intern under him it was a very professional experience for me. I developed a vast knowledge while working with him. I would like to recommend him to lawyers as well as clients also.',
      thumb: '/testimonials/vibhanshu-pandey.png'
    },
    {
      name: 'Prachy Mishra',
      message: 'Saubhagya Sir is one of the best advocates in Lucknow. I have worked under him as an intern and can assure about his pro level knowledge and practicality of law.',
      thumb: '/testimonials/prachy-mishra.png'
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
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '778px',
      numVisible: 1,
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
      Let's hear out what our <br> customer says
    </h2>
    <Carousel :value="reviews" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions" circular :autoplayInterval="5000">
      <template #item="slotProps">
        <div class="review-container">
          <p>{{slotProps.data.message}}</p>
          <div class="person-info">
            <img :src="slotProps.data.thumb" alt="Reviewer Thumb">
            <h3>{{slotProps.data.name}}</h3>
          </div>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<style scoped lang="scss">
  .testimonial {
    background-color: #f9f9f9;
    color: #353935;
    padding: 3rem 4rem;

    @media (max-width: 690px) {
      padding: 3rem 1rem;
    }

    :deep(.p-highlight) {
      .p-link {
        background-color: #C89D65;
      }
    }

    .section-header {
      text-align: left;
      margin-left: 2rem;
    }
    .section-header::before {
      left: 0;
    }

    .review-container {
      padding: 0.5rem;
      margin: 0.5rem;

      p {
        font-size: 0.95rem;
        line-height: 1.3rem;
        min-height: 20ch;
      }

      .person-info {
        display: flex;
        gap: 2rem;
        img {
          width: 3rem;
          height: 3rem;
        }

        h3 {
          font-size: 1rem;
        }
      }


    }


  }
</style>
