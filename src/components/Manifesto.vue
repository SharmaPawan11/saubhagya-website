<script setup lang="ts">
const pillars = [
  {
    icon: 'person_check',
    iconColor: 'primary',
    title: 'Direct Litigator Access',
    description: 'No junior clerk filters or administrative insulation. Litigants communicate directly with lead counsel at every inflection point, from drafting through bench arguments.',
    tagline: 'Unfiltered Strategic Clarity'
  },
  {
    icon: 'balance',
    iconColor: 'secondary',
    title: 'Fee & Merits Transparency',
    description: 'We perform an honest forensic appraisal of petition viability prior to any filing. Zero false assurances, clear billing schedules, and complete candor regarding judicial outcomes.',
    tagline: 'Objective Case Viability'
  },
  {
    icon: 'account_balance',
    iconColor: 'primary',
    title: 'High Court Bench Presence',
    description: 'Backed by comprehensive precedent research, rapid emergency writ compilation, and articulate oral defense before Single and Division Benches of the Lucknow High Court.',
    tagline: 'Incisive Oral Advocacy'
  }
];
</script>

<template>
  <section class="manifesto" id="high-court-cases">
    <div class="manifesto__container">
      <!-- Big Quote Banner -->
      <div class="manifesto__quote-banner">
        <span class="manifesto__kicker">Chamber Jurisprudence · No Procedural Maze</span>
        <blockquote class="manifesto__quote">
          “Legal counsel should never be obscured by courtroom Latin or an endless procedural maze. We offer transparent strategy, rigorous evidentiary command, and direct litigator access.”
        </blockquote>
        <p class="manifesto__citation">— Advocate Saubhagya Mishra &amp; Associates</p>
      </div>

      <!-- 3 Core Pillars -->
      <div class="manifesto__pillars">
        <div 
          v-for="item in pillars" 
          :key="item.title" 
          class="manifesto__pillar-card"
        >
          <div class="manifesto__pillar-body">
            <div :class="['manifesto__icon-wrap', `manifesto__icon-wrap--${item.iconColor}`]">
              <span class="material-symbols-outlined manifesto__icon">{{ item.icon }}</span>
            </div>
            <h3 class="manifesto__pillar-title">{{ item.title }}</h3>
            <p class="manifesto__pillar-desc">
              {{ item.description }}
            </p>
          </div>
          <div class="manifesto__pillar-tagline">{{ item.tagline }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.manifesto {
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
    gap: var(--space-xl);

    @media (max-width: 1024px) {
      padding: 0 var(--margin-tablet);
    }
    @media (max-width: 640px) {
      padding: 0 var(--margin-mobile);
    }
  }

  &__quote-banner {
    max-width: 56rem;
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
  }

  &__kicker {
    font-family: var(--font-ui);
    font-size: 10px;
    line-height: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: var(--color-secondary);
  }

  &__quote {
    font-family: var(--font-headline);
    font-size: 2rem;
    line-height: 1.35;
    font-weight: 500;
    color: var(--color-primary);
    letter-spacing: -0.01em;

    @media (max-width: 768px) {
      font-size: 1.5rem;
      line-height: 1.4;
    }
  }

  &__citation {
    font-family: var(--font-ui);
    font-size: 12px;
    line-height: 16px;
    font-weight: 600;
    color: var(--color-on-surface-variant);
    text-transform: uppercase;
    letter-spacing: 0.14em;
    padding-top: var(--space-xs);
  }

  &__pillars {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--gutter-mobile);

    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
    }
  }

  &__pillar-card {
    background-color: var(--color-surface-container-lowest);
    padding: var(--space-lg);
    border-radius: var(--radius-xl);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: box-shadow var(--transition-normal), transform var(--transition-normal);
    border: 1px solid rgba(227, 226, 224, 0.5);

    &:hover {
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
      transform: translateY(-2px);
    }
  }

  &__pillar-body {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
  }

  &__icon-wrap {
    width: 3rem;
    height: 3rem;
    border-radius: var(--radius-md);
    background-color: var(--color-surface-container);
    display: flex;
    align-items: center;
    justify-content: center;

    &--primary {
      color: var(--color-primary);
    }

    &--secondary {
      color: var(--color-secondary);
    }
  }

  &__icon {
    font-size: 24px;
  }

  &__pillar-title {
    font-family: var(--font-headline);
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 600;
    color: var(--color-primary);
    letter-spacing: 0.01em;
  }

  &__pillar-desc {
    font-family: var(--font-body);
    font-size: 15px;
    line-height: 24px;
    color: var(--color-on-surface-variant);
  }

  &__pillar-tagline {
    padding-top: var(--space-md);
    font-family: var(--font-ui);
    font-size: 10px;
    line-height: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--color-secondary);
  }
}
</style>
