<script setup lang="ts">
import { ref } from 'vue';

const formState = ref({
  name: '',
  phone: '',
  category: 'Land & Revenue Dispute',
  summary: ''
});

const isSubmitted = ref(false);
const statusMessage = ref('');

const handleSubmit = () => {
  if (formState.value.name && formState.value.phone) {
    statusMessage.value = 'Case details logged. Registry desk will contact you within 2 legal hours.';
    isSubmitted.value = true;
    formState.value = {
      name: '',
      phone: '',
      category: 'Land & Revenue Dispute',
      summary: ''
    };
    setTimeout(() => {
      isSubmitted.value = false;
      statusMessage.value = '';
    }, 6000);
  }
};
</script>

<template>
  <section class="consultation" id="consultation">
    <div class="consultation__container">
      <!-- Split Heading -->
      <div class="consultation__header">
        <div>
          <span class="consultation__kicker">Direct Engagement</span>
          <h2 class="consultation__heading">Chambers &amp; Consultation Suite</h2>
        </div>
        <p class="consultation__desc">
          Dual physical offices situated at the High Court judicial block and Jankipuram for accessible morning and evening counsel.
        </p>
      </div>

      <div class="consultation__grid">
        <!-- Left: Dual Chamber Cards & Protocol Strip -->
        <div class="consultation__chambers-col">
          <!-- Chamber 1: High Court -->
          <div class="consultation__chamber-card">
            <div class="consultation__chamber-top">
              <div class="consultation__badge">
                <span class="consultation__badge-dot consultation__badge-dot--secondary"></span>
                <span class="consultation__badge-text consultation__badge-text--secondary">Judicial Hours Facility</span>
              </div>
              <h3 class="consultation__chamber-title">Lucknow High Court Chamber</h3>
              <p class="consultation__chamber-address">
                A 309, Advocates Chamber Block,<br />
                Lucknow High Court Campus, Vibhuti Khand, Gomti Nagar,<br />
                Lucknow – 226010, Uttar Pradesh
              </p>
            </div>
            <div class="consultation__chamber-hours-strip">
              <div class="consultation__hours-block">
                <span class="consultation__hours-label">Court Registry Hours</span>
                <span class="consultation__hours-val">10:00 AM – 4:30 PM</span>
              </div>
              <div class="consultation__mobile-block">
                <span class="consultation__mobile-label">Direct Mobile</span>
                <a href="tel:+919452616163" class="consultation__mobile-link">
                  <span class="material-symbols-outlined consultation__mobile-icon">call</span>
                  <span>+91 94526 16163</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Chamber 2: Jankipuram -->
          <div class="consultation__chamber-card">
            <div class="consultation__chamber-top">
              <div class="consultation__badge">
                <span class="consultation__badge-dot consultation__badge-dot--primary"></span>
                <span class="consultation__badge-text consultation__badge-text--primary">Evening Consultation Facility</span>
              </div>
              <h3 class="consultation__chamber-title">Jankipuram Chamber</h3>
              <p class="consultation__chamber-address">
                1/598, Sector H, Near Engineering College Chauraha,<br />
                Jankipuram, Lucknow – 226021,<br />
                Uttar Pradesh
              </p>
            </div>
            <div class="consultation__chamber-hours-strip">
              <div class="consultation__hours-block">
                <span class="consultation__hours-label">Evening Consultation Hours</span>
                <span class="consultation__hours-val">5:00 PM – 8:00 PM</span>
              </div>
              <div class="consultation__mobile-block">
                <span class="consultation__mobile-label">Direct Mobile</span>
                <a href="tel:+918958545352" class="consultation__mobile-link">
                  <span class="material-symbols-outlined consultation__mobile-icon">call</span>
                  <span>+91 89585 45352</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Direct Counsel Numbers Strip -->
          <div class="consultation__protocol-card">
            <div class="consultation__protocol-header">
              <div class="consultation__protocol-tag">
                <span class="material-symbols-outlined consultation__protocol-icon">schedule</span>
                <span class="consultation__protocol-title">Consultation Hours &amp; Urgent Relief Protocol</span>
              </div>
              <span class="consultation__protocol-days">Mon – Sat</span>
            </div>
            <div class="consultation__protocol-grid">
              <div class="consultation__protocol-item">
                <span class="consultation__protocol-label">Chambers Availability</span>
                <p class="consultation__protocol-text">
                  <strong>10:00 AM – 8:00 PM</strong><br />
                  <span>Prior appointment recommended</span>
                </p>
              </div>
              <div class="consultation__protocol-item">
                <span class="consultation__protocol-label">Urgent Bench Relief</span>
                <p class="consultation__protocol-text">
                  <strong>Immediate Listing Protocol</strong><br />
                  <span>For Anticipatory Bail, Habeas Corpus &amp; Stay Applications</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Confidential Booking Form -->
        <div class="consultation__form-card">
          <div class="consultation__form-header">
            <span class="consultation__form-kicker">Privileged &amp; Confidential</span>
            <h3 class="consultation__form-title">Request Confidential Case Review</h3>
            <p class="consultation__form-desc">
              Submit your matter outline for private consideration prior to scheduling an in-person chamber consultation.
            </p>
          </div>

          <form class="consultation__form" @submit.prevent="handleSubmit">
            <!-- Full Name -->
            <div class="consultation__field">
              <label class="consultation__label" for="clientName">Litigant Full Name</label>
              <input 
                id="clientName"
                v-model="formState.name"
                class="consultation__input" 
                placeholder="e.g. Ramesh Chandra Verma" 
                required 
                type="text"
              />
            </div>

            <!-- Phone Number -->
            <div class="consultation__field">
              <label class="consultation__label" for="clientPhone">Direct Contact Number</label>
              <input 
                id="clientPhone"
                v-model="formState.phone"
                class="consultation__input" 
                placeholder="+91 98765 43210" 
                required 
                type="tel"
              />
            </div>

            <!-- Matter Category -->
            <div class="consultation__field">
              <label class="consultation__label" for="matterCategory">Matter Category</label>
              <select 
                id="matterCategory"
                v-model="formState.category"
                class="consultation__select"
              >
                <option value="Land &amp; Revenue Dispute">Land &amp; Revenue Jurisprudence / Mutation</option>
                <option value="High Court Writ Petition">High Court Writ Petition (Article 226)</option>
                <option value="Bail &amp; Criminal Defense">Anticipatory Bail &amp; Criminal Defense (BNS/CrPC)</option>
                <option value="Civil Injunction &amp; Property Title">Civil Litigation &amp; Injunctions</option>
                <option value="Matrimonial &amp; Family Dispute">Matrimonial, Maintenance &amp; Family Law</option>
                <option value="Consumer &amp; UP RERA Action">Consumer Forum &amp; UP RERA Dispute</option>
              </select>
            </div>

            <!-- Brief Summary -->
            <div class="consultation__field">
              <label class="consultation__label" for="matterSummary">Brief Summary of Current Stage</label>
              <textarea 
                id="matterSummary"
                v-model="formState.summary"
                class="consultation__textarea" 
                placeholder="Mention whether FIR has been registered, case number, existing stay orders, or pending notices..." 
                rows="3"
              ></textarea>
            </div>

            <!-- Submission CTA -->
            <button class="consultation__submit" type="submit">
              <span>Request Confidential Case Review</span>
              <span class="material-symbols-outlined consultation__submit-icon">verified</span>
            </button>

            <!-- Status message container -->
            <div 
              v-if="isSubmitted" 
              class="consultation__status"
            >
              {{ statusMessage }}
            </div>
          </form>

          <p class="consultation__privilege-note">
            All submitted disclosures remain protected under Attorney-Client Privilege.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.consultation {
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
    gap: var(--gutter-desktop);

    @media (min-width: 1024px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  &__chambers-col {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
  }

  &__chamber-card {
    background-color: var(--color-surface-container-lowest);
    padding: var(--space-lg);
    border-radius: var(--radius-xl);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: var(--space-md);
    border: 1px solid rgba(227, 226, 224, 0.5);
  }

  &__chamber-top {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
  }

  &__badge {
    display: inline-flex;
    align-items: center;
    gap: var(--space-xs);
    padding: 0.25rem 0.5rem;
    background-color: var(--color-surface-container);
    border-radius: var(--radius-sm);
    align-self: flex-start;
  }

  &__badge-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;

    &--secondary {
      background-color: var(--color-secondary);
    }

    &--primary {
      background-color: var(--color-primary);
    }
  }

  &__badge-text {
    font-family: var(--font-ui);
    font-size: 10px;
    line-height: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.12em;

    &--secondary {
      color: var(--color-secondary);
    }

    &--primary {
      color: var(--color-primary);
    }
  }

  &__chamber-title {
    font-family: var(--font-headline);
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 600;
    color: var(--color-primary);
    padding-top: var(--space-xs);
  }

  &__chamber-address {
    font-family: var(--font-body);
    font-size: 15px;
    line-height: 24px;
    color: var(--color-on-surface-variant);
  }

  &__chamber-hours-strip {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: var(--space-sm);
    background-color: var(--color-surface-container-low);
    padding: var(--space-md);
    border-radius: var(--radius-md);

    @media (min-width: 576px) {
      flex-direction: row;
      align-items: center;
    }
  }

  &__hours-block {
    display: flex;
    flex-direction: column;
  }

  &__hours-label {
    font-family: var(--font-ui);
    font-size: 10px;
    line-height: 14px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--color-on-surface-variant);
  }

  &__hours-val {
    font-family: var(--font-headline);
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    color: var(--color-primary);
  }

  &__mobile-block {
    display: flex;
    flex-direction: column;

    @media (min-width: 576px) {
      align-items: flex-end;
    }
  }

  &__mobile-label {
    font-family: var(--font-ui);
    font-size: 10px;
    line-height: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--color-secondary);
  }

  &__mobile-link {
    display: inline-flex;
    align-items: center;
    gap: var(--space-xs);
    font-family: var(--font-ui);
    font-size: 15px;
    line-height: 24px;
    font-weight: 700;
    color: var(--color-primary);
    transition: color var(--transition-fast);

    &:hover {
      color: var(--color-secondary);
    }
  }

  &__mobile-icon {
    font-size: 18px;
    color: var(--color-secondary);
  }

  &__protocol-card {
    background-color: var(--color-primary-container);
    color: var(--color-on-primary);
    padding: var(--space-md);
    border-radius: var(--radius-xl);
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
    box-shadow: 0 4px 12px rgba(1, 18, 15, 0.15);
  }

  &__protocol-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(227, 226, 224, 0.2);
    padding-bottom: var(--space-xs);
  }

  &__protocol-tag {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
  }

  &__protocol-icon {
    font-size: 20px;
    color: var(--color-secondary-container);
  }

  &__protocol-title {
    font-family: var(--font-ui);
    font-size: 10px;
    line-height: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: var(--color-secondary-fixed);
  }

  &__protocol-days {
    font-family: var(--font-ui);
    font-size: 10px;
    line-height: 14px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--color-on-primary-container);
  }

  &__protocol-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-sm);
    padding-top: 2px;

    @media (min-width: 576px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  &__protocol-label {
    font-family: var(--font-ui);
    font-size: 10px;
    line-height: 14px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--color-secondary-container);
    display: block;
  }

  &__protocol-text {
    font-family: var(--font-body);
    font-size: 13px;
    line-height: 1.4;
    color: var(--color-on-primary);
    padding-top: 2px;

    strong {
      color: var(--color-surface);
      font-weight: 600;
    }

    span {
      color: var(--color-on-primary-container);
      font-size: 12px;
    }
  }

  &__form-card {
    background-color: var(--color-surface-container-lowest);
    padding: var(--space-lg);
    border-radius: var(--radius-xl);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: var(--space-md);
    border: 1px solid rgba(227, 226, 224, 0.6);

    @media (min-width: 768px) {
      padding: var(--space-xl);
    }
  }

  &__form-header {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
    padding-bottom: var(--space-sm);
  }

  &__form-kicker {
    font-family: var(--font-ui);
    font-size: 10px;
    line-height: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: var(--color-secondary);
  }

  &__form-title {
    font-family: var(--font-headline);
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 600;
    color: var(--color-primary);
  }

  &__form-desc {
    font-family: var(--font-body);
    font-size: 13px;
    line-height: 20px;
    color: var(--color-on-surface-variant);
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
  }

  &__field {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  &__label {
    font-family: var(--font-ui);
    font-size: 10px;
    line-height: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--color-primary);
  }

  &__input,
  &__select,
  &__textarea {
    width: 100%;
    background-color: var(--color-surface);
    padding: var(--space-sm) var(--space-md);
    border-radius: var(--radius-md);
    font-family: var(--font-body);
    font-size: 15px;
    line-height: 24px;
    color: var(--color-primary);
    border: 1px solid var(--color-surface-container-highest);
    transition: background-color var(--transition-fast), border-color var(--transition-fast);

    &::placeholder {
      color: var(--color-outline);
    }

    &:focus {
      outline: none;
      background-color: var(--color-surface-container-low);
      border-color: var(--color-secondary);
    }
  }

  &__textarea {
    resize: none;
  }

  &__submit {
    width: 100%;
    background-color: var(--color-primary-container);
    color: var(--color-on-primary);
    padding: 0.75rem var(--space-lg);
    border-radius: var(--radius-md);
    border: none;
    font-family: var(--font-ui);
    font-size: 12px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(1, 18, 15, 0.15);
    transition: all var(--transition-normal);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-xs);

    &:hover {
      background-color: var(--color-primary);
      box-shadow: 0 6px 16px rgba(1, 18, 15, 0.25);
    }
  }

  &__submit-icon {
    font-size: 18px;
  }

  &__status {
    padding: var(--space-sm);
    background-color: var(--color-surface-container);
    border-radius: var(--radius-md);
    text-align: center;
    font-family: var(--font-ui);
    font-size: 11px;
    line-height: 16px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--color-secondary);
    animation: fadeIn 0.3s ease;
  }

  &__privilege-note {
    font-family: var(--font-ui);
    font-size: 10px;
    line-height: 14px;
    color: var(--color-on-surface-variant);
    text-align: center;
    padding-top: var(--space-sm);
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
