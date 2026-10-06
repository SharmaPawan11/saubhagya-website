<script setup lang="ts">
const clientVoices = [
  {
    quote: '“Advocate Saubhagya Mishra & Associates’ clarity of thought and commanding grasp over complex statutory provisions resolved our long-pending writ before the Lucknow High Court within record time.”',
    name: 'Shashank Shekhar Shukla',
    role: 'High Court Litigant · Lucknow'
  },
  {
    quote: '“During an excruciatingly tense civil property conflict, his patient counsel and strategic injunction filing secured our family ancestral land from unlawful encroachment.”',
    name: 'Himanshu Yadav',
    role: 'Civil Dispute Litigant'
  },
  {
    quote: '“Remarkably swift procedural turnaround. Our commercial dispute documentation and bench presentation were carried out with immaculate precision and zero hidden overheads.”',
    name: 'Priyesh Dwivedi',
    role: 'Commercial & Property Litigant'
  },
  {
    quote: '“His articulation before the High Court judge was both respectful and commanding. His attention to minor technical discrepancies in the government order turned the petition in our favor.”',
    name: 'Vishvadeep Rai',
    role: 'High Court Writ Matter'
  }
];
</script>

<template>
  <section class="testimonials" id="testimonials">
    <div class="testimonials__container">
      <div class="testimonials__header">
        <div>
          <span class="testimonials__kicker">Litigant Chronicles</span>
          <h2 class="testimonials__heading">Verified Client Voices</h2>
        </div>
        <p class="testimonials__desc">
          Actual experiences from complex dispute resolutions and High Court litigations across Uttar Pradesh.
        </p>
      </div>

      <div class="testimonials__grid">
        <div 
          v-for="item in clientVoices" 
          :key="item.name" 
          class="testimonials__card"
        >
          <div class="testimonials__body">
            <div class="testimonials__stars">
              <span v-for="i in 5" :key="i" class="material-symbols-outlined testimonials__star">star</span>
            </div>
            <p class="testimonials__quote">
              {{ item.quote }}
            </p>
          </div>
          <div class="testimonials__author-wrap">
            <h4 class="testimonials__author">{{ item.name }}</h4>
            <span class="testimonials__role">{{ item.role }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.testimonials {
  width: 100%;
  background-color: var(--color-surface-container-low);
  padding: 4.5rem 0;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }

  &__container {
    width: 100%;
    padding: 0 var(--margin-desktop);
    display: flex;
    flex-direction: column;
    gap: var(--space-lg);

    @media (max-width: 1024px) {
      padding: 0 var(--margin-tablet);
    }
    @media (max-width: 640px) {
      padding: 0 var(--margin-mobile);
    }
  }

  &__header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: var(--space-md);

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: flex-end;
    }
  }

  &__kicker {
    font-family: var(--font-ui);
    font-size: 10px;
    line-height: 14px;
    font-weight: 700;
    color: var(--color-secondary);
    text-transform: uppercase;
    letter-spacing: 0.16em;
  }

  &__heading {
    font-family: var(--font-headline);
    font-size: 2.75rem;
    line-height: 1.15;
    font-weight: 500;
    color: var(--color-primary);
    margin-top: 0.25rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  &__desc {
    font-family: var(--font-body);
    font-size: 15px;
    line-height: 24px;
    color: var(--color-on-surface-variant);
    max-width: 24rem;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--gutter-mobile);

    @media (min-width: 640px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(4, 1fr);
      gap: 1.5rem;
    }
  }

  &__card {
    background-color: var(--color-surface-container-lowest);
    padding: var(--space-lg);
    border-radius: var(--radius-xl);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: var(--space-md);
    border: 1px solid rgba(227, 226, 224, 0.5);
    transition: transform var(--transition-normal), box-shadow var(--transition-normal);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 24px rgba(1, 18, 15, 0.06);
    }
  }

  &__body {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
  }

  &__stars {
    display: flex;
    color: var(--color-secondary);
    gap: 2px;
  }

  &__star {
    font-size: 18px;
  }

  &__quote {
    font-family: var(--font-body);
    font-size: 15px;
    line-height: 24px;
    color: var(--color-on-surface);
  }

  &__author-wrap {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  &__author {
    font-family: var(--font-headline);
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    color: var(--color-primary);
  }

  &__role {
    font-family: var(--font-ui);
    font-size: 10px;
    line-height: 14px;
    font-weight: 700;
    color: var(--color-secondary);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
}
</style>
