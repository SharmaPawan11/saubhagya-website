<script setup lang="ts">
const practiceLinks = [
  'High Court Writ Petitions',
  'Criminal Defense & Bail Practice',
  'Property, Land & Revenue Writs',
  'Civil Injunctions & Property Title',
  'Matrimonial & Family Law',
  'UP RERA & Consumer Disputes'
];

const engageLinks = [
  { name: 'Overview', href: '#' },
  { name: 'The Chamber', href: '#consultation' },
  { name: 'Selected Opinions', href: '#high-court-cases' },
  { name: 'Citizen Gazette', href: '#insights' }
];

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__grid">
        <!-- Col 1: Identity & Helpline -->
        <div class="footer__col footer__col--identity">
          <div class="footer__brand-wrap">
            <div class="footer__brand">
              <img 
                src="/images/legal-logo.svg" 
                alt="Saubhagya Mishra & Associates Emblem" 
                class="footer__brand-logo"
              />
              <div class="footer__brand-text">
                <span class="footer__brand-name">Saubhagya Mishra &amp; Associates</span>
                <span class="footer__brand-title">Lawyers &amp; High Court Counsel · Lucknow</span>
              </div>
            </div>
            <p class="footer__desc">
              Lucknow High Court &amp; District Sessions. Providing leading courtroom representation in Constitutional Petitions, Criminal Defense, Anticipatory Bail, Land Disputes, and Commercial Litigation in Lucknow.
            </p>
          </div>

          <div class="footer__contact">
            <span class="footer__contact-label">Direct Chambers Contact</span>
            <p class="footer__contact-item">
              <span>Email: </span>
              <a href="mailto:help@saubhagyamishra.com" class="footer__contact-link">help@saubhagyamishra.com</a>
            </p>
            <p class="footer__contact-item">
              <span>Mobile: </span>
              <a href="tel:+919452616163" class="footer__contact-link footer__contact-link--bold">+91 94526 16163</a>
              <span> / </span>
              <a href="tel:+918958545352" class="footer__contact-link footer__contact-link--bold">+91 89585 45352</a>
            </p>
          </div>
        </div>

        <!-- Col 2: Chamber Locations in Lucknow -->
        <div class="footer__col footer__col--locations">
          <div class="footer__heading-wrap">
            <h4 class="footer__heading">Chambers in Lucknow</h4>
            <div class="footer__heading-line"></div>
          </div>
          <div class="footer__locations">
            <div class="footer__location-card">
              <span class="footer__location-name">Lucknow High Court Chamber</span>
              <p class="footer__location-address">
                Chamber No. 114, Senior Advocates Block,<br />
                Lucknow High Court Campus,<br />
                Vibhuti Khand, Gomti Nagar, Lucknow 226010
              </p>
            </div>
            <div class="footer__location-card">
              <span class="footer__location-name">Jankipuram Chamber</span>
              <p class="footer__location-address">
                1/598, Sector H, Near Engineering College Chauraha,<br />
                Jankipuram, Lucknow 226021
              </p>
            </div>
          </div>
        </div>

        <!-- Col 3: Practice Spectrum -->
        <div class="footer__col footer__col--practice">
          <div class="footer__heading-wrap">
            <h4 class="footer__heading">Practice Areas</h4>
            <div class="footer__heading-line"></div>
          </div>
          <ul class="footer__nav-list">
            <li v-for="item in practiceLinks" :key="item" class="footer__nav-item">
              <a href="#practice-spectrum" class="footer__nav-link">
                <span class="footer__nav-dash">—</span>
                <span>{{ item }}</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- Col 4: Engage -->
        <div class="footer__col footer__col--engage">
          <div class="footer__heading-wrap">
            <h4 class="footer__heading">Quick Navigation</h4>
            <div class="footer__heading-line"></div>
          </div>
          <ul class="footer__engage-list">
            <li v-for="item in engageLinks" :key="item.name" class="footer__engage-item">
              <a :href="item.href" class="footer__engage-link">
                {{ item.name }}
              </a>
            </li>
            <li class="footer__engage-item">
              <a href="#consultation" class="footer__engage-link footer__engage-link--highlight">
                Schedule Consultation →
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Regulatory Notice & Bottom Bar -->
      <div class="footer__regulatory">
        <p class="footer__regulatory-text">
          <strong>Regulatory Notice &amp; Disclaimer:</strong> As per the regulations of the Bar Council of India, legal practitioners are strictly prohibited from soliciting work or advertising in any manner. By continuing to navigate this chamber website, the user acknowledges that the contents are provided solely for general informational purposes and that there has been no solicitation, invitation, or inducement of any nature by Saubhagya Mishra &amp; Associates.
        </p>
        <div class="footer__bottom">
          <p class="footer__copyright">
            © {{ currentYear }} Saubhagya Mishra &amp; Associates. All rights reserved. Lucknow High Court.
          </p>
          <p class="footer__tagline">
            Top Lawyers in Lucknow · Bespoke Legal Craft
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  width: 100%;
  background-color: var(--color-surface-container-low);
  color: var(--color-on-surface);
  margin-top: auto;
  border-top: 1px solid rgba(227, 226, 224, 0.6);

  &__container {
    width: 100%;
    padding: var(--space-xl) var(--margin-desktop);

    @media (max-width: 1024px) {
      padding: var(--space-xl) var(--margin-tablet);
    }
    @media (max-width: 640px) {
      padding: 2.5rem var(--margin-mobile);
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.5rem;

    @media (min-width: 640px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 2.5rem;
    }

    @media (min-width: 1024px) {
      grid-template-columns: 3.4fr 2.8fr 3fr 2fr;
      gap: 2.5rem;
    }

    @media (min-width: 1280px) {
      gap: 3.5rem;
    }
  }

  &__col {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    &--identity {
      justify-content: flex-start;
      gap: 1.5rem;
    }
  }

  &__brand-wrap {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
  }

  &__brand {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
  }

  &__brand-logo {
    height: 2.5rem;
    width: auto;
    object-fit: contain;
    opacity: 0.95;
    flex-shrink: 0;
  }

  &__brand-text {
    display: flex;
    flex-direction: column;
  }

  &__brand-name {
    font-family: var(--font-headline);
    font-size: 1.25rem;
    line-height: 1.35;
    font-weight: 600;
    color: var(--color-primary);
    letter-spacing: -0.01em;
  }

  &__brand-title {
    font-family: var(--font-ui);
    font-size: 10px;
    line-height: 14px;
    font-weight: 700;
    color: var(--color-secondary);
    text-transform: uppercase;
    letter-spacing: 0.14em;
    margin-top: 2px;
  }

  &__desc {
    font-family: var(--font-body);
    font-size: 13px;
    line-height: 22px;
    color: var(--color-on-surface-variant);
    padding-top: var(--space-xs);
    max-width: 24rem;
  }

  &__contact {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    padding-top: 0.5rem;
  }

  &__contact-label {
    font-family: var(--font-ui);
    font-size: 10px;
    line-height: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: var(--color-secondary);
    margin-bottom: 2px;
  }

  &__contact-item {
    font-family: var(--font-body);
    font-size: 14px;
    line-height: 22px;
    color: var(--color-primary);
    font-weight: 500;

    span {
      color: var(--color-on-surface-variant);
      font-weight: 400;
    }
  }

  &__contact-link {
    color: var(--color-primary);
    text-decoration: underline;
    text-decoration-color: var(--color-outline-variant);
    transition: color var(--transition-fast);

    &:hover {
      color: var(--color-secondary);
    }

    &--bold {
      font-weight: 600;
    }
  }

  &__heading-wrap {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  &__heading {
    font-family: var(--font-ui);
    font-size: 15px;
    line-height: 22px;
    font-weight: 700;
    color: var(--color-primary);
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  &__heading-line {
    width: 2.25rem;
    height: 2px;
    background-color: var(--color-secondary);
    margin-top: 2px;
  }

  &__locations {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    margin-top: 0.35rem;
  }

  &__location-card {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  &__location-name {
    font-family: var(--font-ui);
    font-size: 11px;
    line-height: 15px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--color-secondary);
  }

  &__location-address {
    font-family: var(--font-body);
    font-size: 13px;
    line-height: 20px;
    color: var(--color-on-surface-variant);
  }

  &__nav-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 0.35rem;
  }

  &__nav-item {
    font-family: var(--font-body);
    font-size: 14px;
    line-height: 20px;
    color: var(--color-on-surface-variant);
  }

  &__nav-link {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    transition: color var(--transition-fast);

    &:hover {
      color: var(--color-primary);
    }
  }

  &__nav-dash {
    color: var(--color-secondary);
    font-weight: 700;
    flex-shrink: 0;
  }

  &__engage-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 0.35rem;
  }

  &__engage-item {
    font-family: var(--font-ui);
    font-size: 12px;
    line-height: 18px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: 600;
  }

  &__engage-link {
    color: var(--color-on-surface-variant);
    transition: color var(--transition-fast);

    &:hover {
      color: var(--color-primary);
    }

    &--highlight {
      color: var(--color-secondary);
      font-weight: 700;

      &:hover {
        color: var(--color-primary);
      }
    }
  }

  &__regulatory {
    margin-top: var(--space-xl);
    padding: 1.25rem var(--space-md);
    background-color: rgba(239, 238, 235, 0.7);
    border-radius: var(--radius-md);
    border: 1px solid rgba(227, 226, 224, 0.5);
  }

  &__regulatory-text {
    font-family: var(--font-ui);
    font-size: 10px;
    line-height: 16px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--color-on-surface-variant);

    strong {
      color: var(--color-primary);
    }
  }

  &__bottom {
    margin-top: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
    justify-content: space-between;
    align-items: center;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }

  &__copyright {
    font-family: var(--font-ui);
    font-size: 11px;
    line-height: 15px;
    color: var(--color-on-surface-variant);
  }

  &__tagline {
    font-family: var(--font-ui);
    font-size: 10px;
    line-height: 14px;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: var(--color-secondary);
    font-weight: 700;
  }
}
</style>
