<script setup lang="ts">
const metrics = [
  { value: '50+', label: 'Successful Litigations', highlight: false },
  { value: '6+', label: 'Years Courtroom Tenacity', highlight: false },
  { value: 'Dual', label: 'High Court & Sessions Roster', highlight: true }
];
</script>

<template>
  <section class="hero">
    <!-- Subtle architectural radial glows -->
    <div class="hero__glow hero__glow--top-right"></div>
    <div class="hero__glow hero__glow--bottom-left"></div>

    <div class="hero__container">
      <div class="hero__grid">
        <!-- Left: Typography & Narrative -->
        <div class="hero__content">
          <div class="hero__badge">
            <span class="hero__badge-dot"></span>
            <span class="hero__badge-text">Lucknow High Court &amp; District Sessions · Lawyers in Lucknow</span>
          </div>

          <h1 class="hero__heading">
            Principled Counsel.<br />
            <span class="hero__heading-italic">Strategic Trial &amp;</span><br />
            Appellate Advocacy.
          </h1>

          <p class="hero__description">
            Advocate Saubhagya Mishra &amp; Associates delivers formidable courtroom defense, property dispute clarity, and high-stakes constitutional writ remedies across the Lucknow High Court and District Sessions. Recognized among the leading lawyers in Lucknow for uncompromising evidentiary precision and decisive judicial relief.
          </p>

          <!-- Dual CTAs -->
          <div class="hero__ctas">
            <a href="#consultation" class="hero__cta hero__cta--primary">
              <span>Schedule Chamber Consultation</span>
              <span class="material-symbols-outlined hero__cta-icon">arrow_forward</span>
            </a>
            <a href="tel:+919452616163" class="hero__cta hero__cta--secondary">
              <span class="material-symbols-outlined hero__cta-icon hero__cta-icon--accent">phone_in_talk</span>
              <span>Direct Counsel Line: +91 94526 16163</span>
            </a>
          </div>

          <!-- Credential Ticker Strip -->
          <div class="hero__metrics">
            <div 
              v-for="item in metrics" 
              :key="item.label" 
              class="hero__metric-card"
            >
              <span :class="['hero__metric-value', { 'hero__metric-value--secondary': item.highlight }]">
                {{ item.value }}
              </span>
              <span class="hero__metric-label">{{ item.label }}</span>
            </div>
          </div>
        </div>

        <!-- Right: Architectural Image Container & Live High Court Badge -->
        <div class="hero__visual">
          <div class="hero__visual-wrapper">
            <div class="hero__visual-frame"></div>
            <div class="hero__visual-card">
              <img 
                src="/images/hero_webp.webp" 
                alt="Classic polished brass scales of justice resting on mahogany courtroom counsel desk" 
                class="hero__image"
              />
              <!-- Live Roster Card Overlay -->
              <div class="hero__overlay-card">
                <div class="hero__overlay-left">
                  <div class="hero__overlay-dot-container">
                    <span class="hero__overlay-dot hero__overlay-dot--ping"></span>
                    <span class="hero__overlay-dot"></span>
                  </div>
                  <div class="hero__overlay-info">
                    <span class="hero__overlay-title">Active Roster Presence</span>
                    <span class="hero__overlay-subtitle">Lucknow High Court</span>
                  </div>
                </div>
                <span class="material-symbols-outlined hero__overlay-icon">gavel</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: var(--color-surface);
  padding: 4.5rem 0 5rem;

  @media (max-width: 768px) {
    padding: 3rem 0 3.5rem;
  }

  &__glow {
    pointer-events: none;
    position: absolute;
    border-radius: var(--radius-full);
    filter: blur(80px);
    opacity: 0.25;

    &--top-right {
      top: -10rem;
      right: 2.5rem;
      width: 24rem;
      height: 24rem;
      background-color: var(--color-secondary-fixed-dim);
    }

    &--bottom-left {
      bottom: 0;
      left: 25%;
      width: 20rem;
      height: 20rem;
      background-color: var(--color-primary-fixed);
    }
  }

  &__container {
    width: 100%;
    padding: 0 var(--margin-desktop);

    @media (max-width: 1024px) {
      padding: 0 var(--margin-tablet);
    }
    @media (max-width: 640px) {
      padding: 0 var(--margin-mobile);
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--gutter-desktop);
    align-items: center;

    @media (min-width: 1024px) {
      grid-template-columns: 7fr 5fr;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
    position: relative;
    z-index: 10;
  }

  &__badge {
    display: inline-flex;
    align-items: center;
    gap: var(--space-xs);
    align-self: flex-start;
    padding: 0.35rem 1rem;
    background-color: var(--color-surface-container-low);
    border-radius: var(--radius-full);
  }

  &__badge-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--color-secondary);
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  &__badge-text {
    font-family: var(--font-ui);
    font-size: 10px;
    line-height: 14px;
    font-weight: 700;
    color: var(--color-secondary);
    text-transform: uppercase;
    letter-spacing: 0.14em;
  }

  &__heading {
    font-family: var(--font-headline);
    font-size: 3.75rem;
    line-height: 1.08;
    color: var(--color-primary);
    font-weight: 600;
    letter-spacing: -0.02em;

    @media (max-width: 1024px) {
      font-size: 2.75rem;
    }
    @media (max-width: 640px) {
      font-size: 2.15rem;
    }
  }

  &__heading-italic {
    font-style: italic;
    font-weight: 400;
    color: var(--color-secondary);
  }

  &__description {
    font-family: var(--font-body);
    font-size: 1.125rem;
    line-height: 1.8;
    color: var(--color-on-surface-variant);
    max-width: 44rem;
    padding-top: var(--space-xs);

    @media (max-width: 640px) {
      font-size: 0.95rem;
      line-height: 1.6;
    }
  }

  &__ctas {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--space-md);
    padding-top: var(--space-md);

    @media (max-width: 640px) {
      flex-direction: column;
      align-items: stretch;
      width: 100%;
    }
  }

  &__cta {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.85rem 1.75rem;
    border-radius: var(--radius-full);
    font-family: var(--font-ui);
    font-size: 12px;
    line-height: 16px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    transition: all var(--transition-normal);

    @media (max-width: 640px) {
      width: 100%;
      text-align: center;
    }

    &--primary {
      background-color: var(--color-primary-container);
      color: var(--color-on-primary);
      gap: var(--space-xs);
      box-shadow: 0 10px 25px rgba(1, 18, 15, 0.2);

      &:hover {
        background-color: var(--color-primary);
        box-shadow: 0 14px 30px rgba(1, 18, 15, 0.3);
      }
    }

    &--secondary {
      background-color: var(--color-surface-container-lowest);
      color: var(--color-primary);
      gap: var(--space-xs);
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);

      &:hover {
        background-color: var(--color-surface-container);
      }
    }
  }

  &__cta-icon {
    font-size: 18px;

    &--accent {
      color: var(--color-secondary);
    }
  }

  &__metrics {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-md);
    max-width: 36rem;
    padding-top: var(--space-lg);

    @media (max-width: 640px) {
      grid-template-columns: 1fr;
    }
  }

  &__metric-card {
    display: flex;
    flex-direction: column;
    background-color: rgba(244, 243, 240, 0.7);
    padding: var(--space-md);
    border-radius: var(--radius-md);
    border: 1px solid rgba(227, 226, 224, 0.4);
  }

  &__metric-value {
    font-family: var(--font-headline);
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 600;
    color: var(--color-primary);

    &--secondary {
      color: var(--color-secondary);
    }
  }

  &__metric-label {
    font-family: var(--font-ui);
    font-size: 10px;
    line-height: 14px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--color-on-surface-variant);
    margin-top: 0.25rem;
  }

  &__visual {
    position: relative;
    margin-top: var(--space-lg);

    @media (min-width: 1024px) {
      margin-top: 0;
    }
  }

  &__visual-wrapper {
    position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: 28rem;

    @media (min-width: 1024px) {
      max-width: none;
    }
  }

  &__visual-frame {
    position: absolute;
    inset: -0.5rem;
    background: linear-gradient(to top right, rgba(255, 195, 136, 0.2), rgba(21, 40, 36, 0.1));
    border-radius: var(--radius-xl);
    filter: blur(4px);
  }

  &__visual-card {
    position: relative;
    background-color: var(--color-surface-container-lowest);
    padding: var(--space-xs);
    border-radius: var(--radius-xl);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
    overflow: hidden;
  }

  &__image {
    width: 100%;
    height: 420px;
    object-fit: cover;
    border-radius: var(--radius-lg);

    @media (max-width: 640px) {
      height: 320px;
    }
  }

  &__overlay-card {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    right: 1rem;
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    padding: var(--space-md);
    border-radius: var(--radius-lg);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid rgba(227, 226, 224, 0.6);
  }

  &__overlay-left {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
  }

  &__overlay-dot-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 12px;
    height: 12px;
  }

  &__overlay-dot {
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--color-secondary);

    &--ping {
      width: 12px;
      height: 12px;
      animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
      opacity: 0.75;
    }
  }

  &__overlay-info {
    display: flex;
    flex-direction: column;
  }

  &__overlay-title {
    font-family: var(--font-ui);
    font-size: 10px;
    line-height: 14px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--color-primary);
  }

  &__overlay-subtitle {
    font-family: var(--font-body);
    font-size: 13px;
    line-height: 18px;
    color: var(--color-on-surface-variant);
  }

  &__overlay-icon {
    font-size: 24px;
    color: var(--color-secondary);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
}

@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}
</style>
