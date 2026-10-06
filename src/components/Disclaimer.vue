<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { 
  DialogRoot, 
  DialogContent, 
  DialogPortal, 
  DialogTitle, 
  DialogClose, 
  DialogDescription 
} from 'reka-ui';

const STORAGE_KEY = 'sm_disclaimer_accepted';
const isOpen = ref(false);

onMounted(() => {
  try {
    const isAccepted = sessionStorage.getItem(STORAGE_KEY);
    if (!isAccepted) {
      isOpen.value = true;
    }
  } catch (e) {
    isOpen.value = true;
  }

  window.addEventListener('open-disclaimer', () => {
    isOpen.value = true;
  });
});

const handleAccept = () => {
  isOpen.value = false;
  try {
    sessionStorage.setItem(STORAGE_KEY, 'true');
  } catch (e) {
    // Graceful fallback
  }
};
</script>

<template>
  <DialogRoot 
    v-model:open="isOpen" 
    :modal="false"
    @update:open="(val) => { if (!val) handleAccept(); }"
  >
    <DialogPortal>
      <div v-if="isOpen" class="disclaimer-backdrop" />
      <DialogContent @interact-outside="(event) => event.preventDefault()" class="disclaimer-modal">
        <DialogTitle class="disclaimer-modal__title">
          Disclaimer
        </DialogTitle>
        <DialogDescription class="disclaimer-modal__body">
          <p class="disclaimer-modal__paragraph">
            Pursuant to regulations by the Bar Council of India, legal practitioners are strictly prohibited from soliciting work or advertising in any manner. This website serves solely general informational purposes and is not intended for advertising.
          </p>
          <p class="disclaimer-modal__paragraph">
            Saubhagya Mishra & Associates explicitly disclaims any intention to solicit clients through this website. We do not assume responsibility for decisions made by visitors solely based on the information provided herein.
          </p>
          <hr class="disclaimer-modal__divider" />
          <h6 class="disclaimer-modal__ack">
            By 'ENTERING', visitors acknowledge that the content of this website:
          </h6>
          <ul class="disclaimer-modal__list">
            <li class="disclaimer-modal__item">
              does not constitute advertising or solicitation of any nature, and
            </li>
            <li class="disclaimer-modal__item">
              is intended solely for their understanding of our chambers' practice, activities, and identity.
            </li>
          </ul>
        </DialogDescription>
        <div class="disclaimer-modal__actions">
          <DialogClose class="disclaimer-modal__btn" @click="handleAccept">
            ENTER
          </DialogClose>
        </div>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

<style scoped lang="scss">
@counter-style alpha-brackets {
  system: alphabetic;
  symbols: a b;
  prefix: "(";
  suffix: ") ";
}

.disclaimer-backdrop {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(1, 18, 15, 0.85);
  backdrop-filter: blur(8px);
  z-index: 99;
  pointer-events: auto;
  touch-action: none;
}

.disclaimer-modal {
  width: min(92vw, 620px);
  max-height: 90vh;
  max-height: 90dvh;
  overflow-y: auto;
  background-color: var(--color-surface);
  border: 1px solid var(--color-secondary);
  border-radius: var(--radius-lg);
  padding: 2.25rem;
  z-index: 100;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  box-shadow: 0 20px 40px rgba(1, 18, 15, 0.4);

  @media (max-width: 576px) {
    padding: 1.5rem 1.25rem;
    gap: 1rem;
  }

  &__title {
    font-family: var(--font-headline);
    font-size: 1.75rem;
    color: var(--color-primary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-weight: 700;

    @media (max-width: 576px) {
      font-size: 1.4rem;
    }
  }

  &__body {
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
  }

  &__paragraph {
    font-family: var(--font-body);
    font-size: 0.9375rem;
    line-height: 1.6;
    color: var(--color-on-surface-variant);
  }

  &__divider {
    border: none;
    height: 1px;
    background-color: var(--color-outline-variant);
    margin: 0.5rem 0;
  }

  &__ack {
    font-family: var(--font-ui);
    font-size: 0.8125rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--color-secondary);
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
    padding-left: 0.5rem;
  }

  &__item {
    font-family: var(--font-body);
    font-size: 0.875rem;
    color: var(--color-on-surface-variant);
    list-style-type: alpha-brackets;
    list-style-position: inside;

    &::marker {
      color: var(--color-secondary);
      font-family: var(--font-ui);
      font-weight: 600;
    }
  }

  &__actions {
    display: flex;
    justify-content: flex-end;
    margin-top: 0.75rem;

    @media (max-width: 576px) {
      width: 100%;
    }
  }

  &__btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 2.25rem;
    background-color: var(--color-primary-container);
    color: var(--color-on-primary);
    font-family: var(--font-ui);
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    border: 1px solid var(--color-primary);
    border-radius: var(--radius-full);
    cursor: pointer;
    transition: background-color var(--transition-normal), color var(--transition-normal);

    &:hover {
      background-color: var(--color-primary);
    }

    @media (max-width: 576px) {
      width: 100%;
    }
  }
}
</style>
