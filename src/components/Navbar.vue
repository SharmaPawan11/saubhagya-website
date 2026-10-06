<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isMobileOpen = ref(false);
const menuContainer = ref<HTMLElement | null>(null);
const itemContainer = ref<HTMLElement | null>(null);

const toggleMobileMenu = () => {
  if (!menuContainer.value || !itemContainer.value) return;
  const containerHeight = menuContainer.value.getBoundingClientRect().height || 0;
  const linksHeight = itemContainer.value.scrollHeight || 0;

  if (containerHeight < 5) {
    menuContainer.value.style.height = `${linksHeight}px`;
    isMobileOpen.value = true;
  } else {
    menuContainer.value.style.height = '0px';
    isMobileOpen.value = false;
  }
};

const closeMobileMenu = () => {
  if (menuContainer.value) {
    menuContainer.value.style.height = '0px';
  }
  isMobileOpen.value = false;
};

const handleResize = () => {
  if (typeof window !== 'undefined' && window.innerWidth > 1024 && isMobileOpen.value) {
    closeMobileMenu();
  }
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

const navLinks = [
  { name: 'Expertise', href: '#practice-spectrum' },
  { name: 'Blog', href: '#insights' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'About Us', href: '#high-court-cases' }
];
</script>

<template>
  <header class="navbar">
    <div class="navbar__container">
      <!-- Brand / Logo -->
      <a href="#" class="navbar__brand" @click="closeMobileMenu">
        <img 
          src="/images/legal-logo.svg" 
          alt="Saubhagya Mishra & Associates Emblem" 
          class="navbar__brand-logo"
        />
        <div class="navbar__brand-text">
          <span class="navbar__brand-name">Saubhagya Mishra &amp; Associates</span>
          <span class="navbar__brand-tagline">Lawyers &amp; High Court Counsel · Lucknow</span>
        </div>
      </a>

      <!-- Center Desktop Navigation Links -->
      <nav class="navbar__links" aria-label="Main Navigation">
        <a 
          v-for="link in navLinks" 
          :key="link.name" 
          :href="link.href" 
          class="navbar__link"
        >
          {{ link.name }}
        </a>
      </nav>

      <!-- Right Side Actions -->
      <div class="navbar__actions">
        <div class="navbar__counsel">
          <span class="navbar__counsel-label">Counsel Line</span>
          <a href="tel:+919452616163" class="navbar__counsel-phone">+91 94526 16163</a>
        </div>
        <a href="#consultation" class="navbar__cta">
          Schedule Consultation
        </a>
        <button 
          class="navbar__toggle" 
          @click="toggleMobileMenu" 
          :aria-expanded="isMobileOpen"
          aria-label="Toggle navigation menu"
        >
          <span class="material-symbols-outlined navbar__toggle-icon">
            {{ isMobileOpen ? 'close' : 'menu' }}
          </span>
        </button>
      </div>
    </div>

    <!-- Mobile Slide Menu -->
    <div class="navbar__mobile-menu" ref="menuContainer">
      <div class="navbar__mobile-inner" ref="itemContainer">
        <a 
          v-for="link in navLinks" 
          :key="link.name" 
          :href="link.href" 
          class="navbar__mobile-link"
          @click="closeMobileMenu"
        >
          {{ link.name }}
        </a>
        <div class="navbar__mobile-counsel">
          <span class="navbar__counsel-label">Direct Counsel Line</span>
          <a href="tel:+919452616163" class="navbar__counsel-phone">+91 94526 16163</a>
        </div>
        <a href="#consultation" class="navbar__mobile-cta" @click="closeMobileMenu">
          Schedule Consultation
        </a>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  background-color: rgba(250, 249, 246, 0.95);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(227, 226, 224, 0.7);
  transition: all var(--transition-normal);

  &__container {
    max-width: 100%;
    padding: 1.25rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;

    @media (min-width: 1200px) {
      padding: 1.25rem 3rem;
    }

    @media (max-width: 768px) {
      padding: 1rem 1.25rem;
    }
  }

  &__brand {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    text-decoration: none;
    flex-shrink: 0;

    &:hover .navbar__brand-logo {
      transform: scale(1.05);
    }

    &:hover .navbar__brand-name {
      color: var(--color-secondary);
    }
  }

  &__brand-logo {
    height: 2rem;
    width: auto;
    object-fit: contain;
    opacity: 0.9;
    transition: transform var(--transition-normal);
  }

  &__brand-text {
    display: flex;
    flex-direction: column;
    text-align: left;
  }

  &__brand-name {
    font-family: var(--font-headline);
    font-size: 1.15rem;
    line-height: 1.3;
    font-weight: 600;
    letter-spacing: -0.01em;
    text-transform: uppercase;
    color: var(--color-primary);
    transition: color var(--transition-normal);

    @media (max-width: 576px) {
      font-size: 0.95rem;
    }

    @media (max-width: 380px) {
      font-size: 0.85rem;
    }
  }

  &__brand-tagline {
    font-family: var(--font-ui);
    font-size: 10px;
    line-height: 14px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--color-secondary);
    font-weight: 600;

    @media (max-width: 480px) {
      font-size: 9px;
      letter-spacing: 0.1em;
    }
  }

  &__links {
    display: flex;
    align-items: center;
    gap: 2.25rem;

    @media (max-width: 1024px) {
      display: none;
    }
  }

  &__link {
    font-family: var(--font-ui);
    font-size: 12px;
    line-height: 16px;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--color-on-surface-variant);
    padding: 0.25rem 0;
    position: relative;
    transition: color var(--transition-fast);

    &:hover {
      color: var(--color-primary);
    }

    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;
      background-color: var(--color-secondary);
      transition: width var(--transition-normal);
    }

    &:hover::after {
      width: 100%;
    }
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    flex-shrink: 0;
  }

  &__counsel {
    display: flex;
    flex-direction: column;
    text-align: right;

    @media (max-width: 640px) {
      display: none;
    }
  }

  &__counsel-label {
    font-family: var(--font-ui);
    font-size: 10px;
    line-height: 14px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--color-on-surface-variant);
  }

  &__counsel-phone {
    font-family: var(--font-ui);
    font-size: 13px;
    line-height: 18px;
    font-weight: 600;
    color: var(--color-primary);
    transition: color var(--transition-fast);

    &:hover {
      color: var(--color-secondary);
    }
  }

  &__cta {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(1, 18, 15, 0.25);
    background-color: transparent;
    color: var(--color-primary);
    padding: 0.5rem 1.25rem;
    border-radius: var(--radius-full);
    font-family: var(--font-ui);
    font-size: 12px;
    line-height: 16px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    transition: all var(--transition-normal);

    &:hover {
      background-color: var(--color-primary);
      color: var(--color-on-primary);
      box-shadow: 0 4px 10px rgba(1, 18, 15, 0.15);
    }

    @media (max-width: 480px) {
      display: none;
    }
  }

  &__toggle {
    display: none;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    cursor: pointer;
    color: var(--color-primary);
    padding: 0.25rem;

    @media (max-width: 1024px) {
      display: flex;
    }
  }

  &__toggle-icon {
    font-size: 28px;
  }

  &__mobile-menu {
    height: 0;
    overflow: hidden;
    transition: height 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    background-color: var(--color-surface);
    border-top: 1px solid rgba(227, 226, 224, 0.6);

    @media (min-width: 1025px) {
      display: none;
    }
  }

  &__mobile-inner {
    padding: 1.5rem 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  &__mobile-link {
    font-family: var(--font-ui);
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--color-on-surface);
    padding: 0.5rem 0;
    border-bottom: 1px solid rgba(227, 226, 224, 0.5);

    &:hover {
      color: var(--color-secondary);
    }
  }

  &__mobile-counsel {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding-top: 0.5rem;
  }

  &__mobile-cta {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-primary-container);
    color: var(--color-on-primary);
    padding: 0.75rem 1.5rem;
    border-radius: var(--radius-full);
    font-family: var(--font-ui);
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    text-align: center;
    margin-top: 0.5rem;

    &:hover {
      background-color: var(--color-primary);
    }
  }
}
</style>
