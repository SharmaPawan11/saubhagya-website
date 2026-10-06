<script setup lang="ts">
const disciplines = [
  {
    num: '01',
    icon: 'terrain',
    title: 'Land & Revenue Jurisprudence',
    description: 'Ancestral property partition suits, registry deed fraud rectification, revenue record mutation (Khasra & Khatauni reconciliations), and statutory appeals before SDM, Commissioner, and Board of Revenue.'
  },
  {
    num: '02',
    icon: 'verified_user',
    title: 'Criminal Defense & Bail Practice',
    description: 'Urgent anticipatory bail applications before Sessions & High Court, regular bail defense under Bharatiya Nagarik Suraksha Sanhita / CrPC, and Section 482 quashing petitions against malicious FIRs.'
  },
  {
    num: '03',
    icon: 'shield',
    title: 'Civil Litigation & Injunctions',
    description: 'Immediate restraining orders (temporary injunctions) against unauthorized possession, suits for specific performance of property agreements, title declaration, and high-value breach of contract actions.'
  },
  {
    num: '04',
    icon: 'diversity_3',
    title: 'Matrimonial & Family Law',
    description: 'Compassionate yet firm legal intervention: mutual and contested divorce proceedings, defense in Section 125 CrPC maintenance applications, child custody determinations, and domestic dispute settlements.'
  },
  {
    num: '05',
    icon: 'account_balance_wallet',
    title: 'High Court Writ Petitions',
    description: 'Constitutional challenges under Article 226 of the Constitution of India against arbitrary state or municipal directives. Writ of Mandamus, Certiorari, and Quo Warranto before the Lucknow High Court.'
  },
  {
    num: '06',
    icon: 'domain_add',
    title: 'Consumer Forum & RERA Disputes',
    description: 'Enforcing real estate delivery contracts, securing refund orders with statutory interest against delinquent developers before UP RERA, and litigating deficient service claims before State Commissions.'
  }
];
</script>

<template>
  <section class="practice" id="practice-spectrum">
    <div class="practice__container">
      <!-- Section Header -->
      <div class="practice__header">
        <div class="practice__header-title-wrap">
          <span class="practice__kicker">Disciplined Specializations</span>
          <h2 class="practice__heading">Practice Spectrum</h2>
        </div>
        <p class="practice__description">
          Meticulously structured legal chambers handling civil, criminal, constitutional, and regulatory litigation across original and appellate benches.
        </p>
      </div>

      <!-- 6-Card Architectural Grid -->
      <div class="practice__grid">
        <div 
          v-for="item in disciplines" 
          :key="item.num" 
          class="practice__card"
        >
          <div class="practice__card-content">
            <div class="practice__card-top">
              <span class="practice__discipline">{{ item.num }} / DISCIPLINE</span>
              <span class="material-symbols-outlined practice__icon">{{ item.icon }}</span>
            </div>
            <h3 class="practice__title">{{ item.title }}</h3>
            <p class="practice__desc">
              {{ item.description }}
            </p>
          </div>
          <a href="#consultation" class="practice__card-cta">
            <span>Review Precedents</span>
            <span class="material-symbols-outlined practice__card-cta-icon">arrow_forward</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.practice {
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: var(--space-md);
    padding-bottom: var(--space-sm);

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: flex-end;
    }
  }

  &__header-title-wrap {
    display: flex;
    flex-direction: column;
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

  &__description {
    font-family: var(--font-body);
    font-size: 15px;
    line-height: 24px;
    color: var(--color-on-surface-variant);
    max-width: 28rem;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--gutter-mobile);

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
      gap: var(--gutter-desktop);
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
    border: 1px solid rgba(227, 226, 224, 0.6);
    transition: all var(--transition-normal);

    &:hover {
      box-shadow: 0 16px 32px rgba(1, 18, 15, 0.08);
      transform: translateY(-3px);

      .practice__title,
      .practice__icon,
      .practice__card-cta {
        color: var(--color-secondary);
      }

      .practice__card-cta-icon {
        transform: translateX(4px);
      }
    }
  }

  &__card-content {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
  }

  &__card-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__discipline {
    font-family: var(--font-ui);
    font-size: 12px;
    line-height: 16px;
    color: var(--color-secondary);
    font-weight: 700;
    letter-spacing: 0.12em;
  }

  &__icon {
    font-size: 22px;
    color: var(--color-on-surface-variant);
    transition: color var(--transition-normal);
  }

  &__title {
    font-family: var(--font-headline);
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 600;
    color: var(--color-primary);
    letter-spacing: 0.01em;
    transition: color var(--transition-normal);
  }

  &__desc {
    font-family: var(--font-body);
    font-size: 13px;
    line-height: 20px;
    color: var(--color-on-surface-variant);
  }

  &__card-cta {
    display: inline-flex;
    align-items: center;
    gap: var(--space-xs);
    padding-top: var(--space-md);
    font-family: var(--font-ui);
    font-size: 12px;
    line-height: 16px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--color-primary);
    transition: color var(--transition-normal);
  }

  &__card-cta-icon {
    font-size: 16px;
    transition: transform var(--transition-fast);
  }
}
</style>
