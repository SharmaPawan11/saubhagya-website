<script setup lang="ts">
const rightsGuides = [
  {
    icon: 'policy',
    theme: 'primary',
    title: 'Rights If Detained or Questioned by Police',
    description: 'You possess the fundamental right to know the precise grounds of detention, examine the arrest memo, communicate immediately with legal counsel of choice, and must be produced before the nearest judicial magistrate within 24 hours without exception.'
  },
  {
    icon: 'fence',
    theme: 'secondary',
    title: 'Urgent Steps in Case of Unlawful Land Encroachment',
    description: 'Never resort to physical retaliation. Immediately secure certified revenue map copies (Chakbandi/Khatauni), register formal police complaint diary entries, and file for urgent preventive action under Section 145 or a civil emergency stay suit.'
  },
  {
    icon: 'find_in_page',
    theme: 'primary',
    title: 'How to Obtain Public Records Under RTI',
    description: 'Utilize the statutory Right to Information procedure with structured questions to Public Information Officers (PIO). State agencies are mandated by law to provide verified records or file disclosures within 30 statutory days.'
  },
  {
    icon: 'folder_special',
    theme: 'secondary',
    title: 'What Documents to Bring for Your First Consultation',
    description: 'To maximize analytical value, bring all available court order sheets, copies of issued legal notices, registered title deeds or agreement agreements, official FIR copies, and a chronological bulleted timeline of events.'
  }
];
</script>

<template>
  <section class="citizen-rights" id="insights">
    <div class="citizen-rights__container">
      <div class="citizen-rights__header">
        <span class="citizen-rights__kicker">Public Legal Empowerment</span>
        <h2 class="citizen-rights__heading">Demystified Citizen Rights</h2>
        <p class="citizen-rights__desc">
          Clear, straightforward procedural guidance for everyday citizens navigating law enforcement, revenue officials, and judicial administration.
        </p>
      </div>

      <div class="citizen-rights__grid">
        <div 
          v-for="guide in rightsGuides" 
          :key="guide.title" 
          class="citizen-rights__card"
        >
          <div :class="['citizen-rights__icon-wrap', `citizen-rights__icon-wrap--${guide.theme}`]">
            <span class="material-symbols-outlined citizen-rights__icon">{{ guide.icon }}</span>
          </div>
          <div class="citizen-rights__content">
            <h3 class="citizen-rights__title">{{ guide.title }}</h3>
            <p class="citizen-rights__text">{{ guide.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.citizen-rights {
  width: 100%;
  background-color: var(--color-surface);
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
    max-width: 44rem;
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
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

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  &__desc {
    font-family: var(--font-body);
    font-size: 15px;
    line-height: 24px;
    color: var(--color-on-surface-variant);
    padding-top: 0.25rem;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--gutter-mobile);

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }
  }

  &__card {
    background-color: var(--color-surface-container-low);
    padding: var(--space-lg);
    border-radius: var(--radius-xl);
    display: flex;
    align-items: flex-start;
    gap: var(--space-md);
    border: 1px solid rgba(227, 226, 224, 0.4);
    transition: transform var(--transition-normal), box-shadow var(--transition-normal);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
    }
  }

  &__icon-wrap {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    &--primary {
      background-color: var(--color-primary);
      color: var(--color-on-primary);
    }

    &--secondary {
      background-color: var(--color-secondary);
      color: var(--color-on-secondary);
    }
  }

  &__icon {
    font-size: 20px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
  }

  &__title {
    font-family: var(--font-headline);
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 600;
    color: var(--color-primary);
  }

  &__text {
    font-family: var(--font-body);
    font-size: 13px;
    line-height: 20px;
    color: var(--color-on-surface-variant);
  }
}
</style>
