<script setup lang="ts">
import { ref } from 'vue';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: 'Who are the top lawyers in Lucknow for High Court cases?',
    answer: 'Advocate Saubhagya Mishra & Associates is among the most trusted law chambers in Lucknow, providing formidable representation before the Lucknow High Court in Constitutional writs (Article 226), criminal appeals, civil property disputes, anticipatory bail, and emergency stay orders. The chamber brings years of courtroom tenacity, direct litigator access, and transparent legal viability analysis.'
  },
  {
    question: 'How quickly can an advocate in Lucknow file for anticipatory bail or urgent stay relief?',
    answer: 'For emergency criminal protection or stay matters, our chambers deploy an immediate listing protocol. Under the Bharatiya Nagarik Suraksha Sanhita (BNSS) and CrPC, urgent anticipatory bail or interim stay petitions can be drafted, vetted, and moved before the District Sessions Court or the Lucknow High Court within 24 to 48 hours.'
  },
  {
    question: 'Which courts and judicial tribunals in Lucknow does the firm practice before?',
    answer: 'Our counsel actively represent litigants across all premier judicial forums in Lucknow, including the Allahabad High Court (Lucknow Bench), District & Sessions Court (Kaiserbagh Kutchery), Board of Revenue (UP), UP Real Estate Regulatory Authority (UP RERA, Gomti Nagar), Lucknow Family Court, and the State Consumer Disputes Redressal Commission.'
  },
  {
    question: 'What documents should I prepare for a property or land dispute consultation in Lucknow?',
    answer: 'For land and revenue matters, we recommend bringing registered sale deeds, certified Khasra/Khatauni extracts, municipal mutation receipts, any ongoing court order sheets or notices from the SDM/Tehsildar, and a chronological timeline of ownership disputes to enable a prompt forensic evaluation.'
  },
  {
    question: 'Where are your legal chambers located in Lucknow, and what are the office timings?',
    answer: 'We operate dual physical chambers in Lucknow: (1) High Court Chamber: Chamber No. 114 / A 309, Advocates Chamber Block, Lucknow High Court Campus, Vibhuti Khand, Gomti Nagar (10:00 AM – 4:30 PM); and (2) Jankipuram Chamber: 1/598, Sector H, near Engineering College Chauraha, Jankipuram, Lucknow (5:00 PM – 8:00 PM).'
  },
  {
    question: 'How do I schedule a confidential consultation with Advocate Saubhagya Mishra?',
    answer: 'Litigants can book a confidential review by calling our direct counsel lines at +91 94526 16163 or +91 89585 45352, sending an email to help@saubhagyamishra.com, or submitting the confidential case inquiry form directly on this website.'
  },
  {
    question: 'Can clients outside Lucknow or Uttar Pradesh file writ petitions in the Lucknow High Court?',
    answer: 'Yes. We frequently represent clients from across Uttar Pradesh (including Barabanki, Ayodhya, Sitapur, Raebareli, Unnao, Hardoi, Lakhimpur Kheri) and across India whose legal matters, public law challenges, or government administrative directives fall within the territorial jurisdiction of the Lucknow High Court.'
  }
];

const openIndex = ref<number | null>(0);

const toggleFaq = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index;
};
</script>

<template>
  <section class="faq" id="faq">
    <div class="faq__container">
      <div class="faq__header">
        <span class="faq__kicker">Frequently Asked Questions · Lawyers in Lucknow</span>
        <h2 class="faq__heading">Questions About Hiring Lawyers in Lucknow</h2>
        <p class="faq__desc">
          Essential insights regarding court representation, urgent anticipatory bail, land disputes, and consultation protocols before the Lucknow High Court and District Courts.
        </p>
      </div>

      <div class="faq__accordion">
        <div 
          v-for="(item, index) in faqs" 
          :key="index"
          :class="['faq__item', { 'faq__item--open': openIndex === index }]"
        >
          <button 
            type="button" 
            class="faq__trigger"
            :aria-expanded="openIndex === index"
            :aria-controls="`faq-answer-${index}`"
            @click="toggleFaq(index)"
          >
            <span class="faq__question">{{ item.question }}</span>
            <span class="material-symbols-outlined faq__icon">
              {{ openIndex === index ? 'remove' : 'add' }}
            </span>
          </button>
          
          <div 
            v-show="openIndex === index" 
            :id="`faq-answer-${index}`"
            class="faq__panel"
          >
            <p class="faq__answer">{{ item.answer }}</p>
          </div>
        </div>
      </div>

      <div class="faq__footer">
        <p class="faq__footer-text">
          Have a specific legal query regarding an ongoing proceeding or impending notice?
        </p>
        <a href="#consultation" class="faq__footer-link">
          <span>Request Confidential Case Review</span>
          <span class="material-symbols-outlined faq__footer-icon">arrow_forward</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.faq {
  width: 100%;
  background-color: var(--color-surface);
  padding: 5rem 0;

  @media (max-width: 768px) {
    padding: 3.5rem 0;
  }

  &__container {
    width: 100%;
    max-width: 58rem;
    margin: 0 auto;
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

  &__header {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-xs);
  }

  &__kicker {
    font-family: var(--font-ui);
    font-size: 11px;
    line-height: 16px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: var(--color-secondary);
  }

  &__heading {
    font-family: var(--font-headline);
    font-size: 2.25rem;
    line-height: 2.75rem;
    font-weight: 600;
    color: var(--color-primary);

    @media (max-width: 768px) {
      font-size: 1.75rem;
      line-height: 2.25rem;
    }
  }

  &__desc {
    font-family: var(--font-body);
    font-size: 15px;
    line-height: 24px;
    color: var(--color-on-surface-variant);
    max-width: 44rem;
    margin-top: var(--space-xs);
  }

  &__accordion {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
  }

  &__item {
    background-color: var(--color-surface-container-lowest);
    border: 1px solid rgba(227, 226, 224, 0.7);
    border-radius: var(--radius-lg);
    overflow: hidden;
    transition: border-color var(--transition-fast), box-shadow var(--transition-fast);

    &:hover {
      border-color: var(--color-secondary);
    }

    &--open {
      border-color: var(--color-secondary);
      box-shadow: 0 4px 16px rgba(1, 18, 15, 0.05);
    }
  }

  &__trigger {
    width: 100%;
    background: none;
    border: none;
    padding: var(--space-md) var(--space-lg);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-md);
    cursor: pointer;
    text-align: left;

    @media (max-width: 640px) {
      padding: var(--space-md);
    }
  }

  &__question {
    font-family: var(--font-headline);
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    color: var(--color-primary);
  }

  &__icon {
    font-size: 20px;
    color: var(--color-secondary);
    flex-shrink: 0;
    transition: transform var(--transition-fast);
  }

  &__panel {
    padding: 0 var(--space-lg) var(--space-md);
    animation: fadeIn 0.25s ease-out;

    @media (max-width: 640px) {
      padding: 0 var(--space-md) var(--space-md);
    }
  }

  &__answer {
    font-family: var(--font-body);
    font-size: 14px;
    line-height: 22px;
    color: var(--color-on-surface-variant);
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: var(--space-md);
    padding: var(--space-md) var(--space-lg);
    background-color: var(--color-surface-container-low);
    border-radius: var(--radius-lg);
    border: 1px dashed var(--color-outline-variant);

    @media (max-width: 640px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  &__footer-text {
    font-family: var(--font-body);
    font-size: 13px;
    line-height: 20px;
    color: var(--color-on-surface-variant);
  }

  &__footer-link {
    display: inline-flex;
    align-items: center;
    gap: var(--space-xs);
    font-family: var(--font-ui);
    font-size: 11px;
    line-height: 16px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--color-secondary);
    text-decoration: none;
    transition: color var(--transition-fast);

    &:hover {
      color: var(--color-primary);
    }
  }

  &__footer-icon {
    font-size: 16px;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
