<script setup lang="ts">

</script>

<template>
  <div class="footer">
    <img src="~/assets/images/logo.svg" alt="Footer" class="footer__logo">
    <p>Embracing the Complexity: Navigating India's Legal Landscape with Clear Solutions.</p>

    <div class="footer__socials-container">
      <a href="https://twitter.com/Msaubhagya_BHU">
        <img src="~/assets/images/twitter.svg" alt="Twitter">
      </a>
      <a href="https://www.facebook.com/saubhagya.mishra.731">
        <img src="~/assets/images/facebook.svg" alt="Facebook">
      </a>
      <a href="https://www.instagram.com/adv_saubhagya/">
        <img src="~/assets/images/instagram.svg" alt="Instagram">
      </a>
      <a href="https://www.linkedin.com/in/saubhagya-mishra-29538115b/">
        <img src="~/assets/images/linkedin.svg" alt="LinkedIn">
      </a>
    </div>

    <div class="footer__information-container">
      <div class="footer__about-us-container">
        <h2 class="section-header">
          ABOUT US
        </h2>
        <p class="footer__about-us-text">
          Adv. Saubhagya Mishra practices in Allahabad High Court, Lucknow Bench, he also practices in District & Sessions Court Lucknow as well as District Consumer Forum Lucknow.
        </p>
      </div>

      <div class="footer__practice-area-container">
        <h2 class="section-header">
          PRACTICE AREA
        </h2>
        <ul>
          <li><i class="pi pi-check"></i>Criminal Law</li>
          <li><i class="pi pi-check"></i>Matrimonial Matters</li>
          <li><i class="pi pi-check"></i>Consumer Protection</li>
          <li><i class="pi pi-check"></i>Civil Law</li>
        </ul>
      </div>

      <div class="footer__links-container">
        <h2 class="section-header">
          LINKS
        </h2>
        <ul>
          <li>Home</li>
          <li>Cases</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <div class="footer__contact-us-container">
        <h2 class="section-header">
          CONTACT US
        </h2>
        <ul>
          <li><i class="pi pi-phone"></i>+91-9452616163, +91-8958545352</li>
          <li><i class="pi pi-at"></i>saubhagyamishra4@gmail.com</li>
          <li><i class="pi pi-map-marker"></i>A 309, Advocates Chamber, Lucknow H.C.</li>
          <li><i class="pi pi-map-marker"></i>1/598, Sector H, Jankipuram, Lucknow </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .footer {
    padding: 3rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: #696969;
    &__logo {
      width: 6rem;
      height: 6rem;
      margin-left: auto;
      margin-right: auto;
    }
    p {
      font-size: 0.75rem;
      text-align: center;
    }

    &__information-container {
      margin-top: 2rem;
      display: grid;
      grid-template-areas: "a b c d";
      gap: 3rem;
      justify-content: center;

      @media (max-width:1281px) {
        grid-template-areas:
          "a b"
          "c d";
      }

      @media (max-width:640px) {
        grid-template-areas:
          "a"
          "b"
          "c"
          "d";
        justify-content: left;
        grid-template-columns: 1fr;
      }
    }

    &__socials-container {
      display: flex;
      gap: 1rem;
      justify-content: center;
      img {
        width: 2rem;
        color: white;
        &:hover {
          cursor: pointer;
        }
      }
    }

    .section-header {
      text-align: unset;
      position: relative;
      font-size: 1.2rem;
      font-weight: 400;
      &::before {
        left: unset;
        top: 30px;
      }
    }

    &__about-us-container {
      display: flex;
      flex-direction: column;
      p {
        font-size: 0.8rem;
        width: 30ch;
        line-height: 1.5rem;
        text-align: unset;
        @media (max-width:640px) {
          width: unset;
        }
      }
    }

    &__practice-area-container, &__contact-us-container, &__links-container {
      display: flex;
      flex-direction: column;

      ul {
        display: flex;
        flex-direction: column;
        list-style-type: none;
        padding: 0;
        gap: 0.75rem;
        li {
          display: flex;
          gap: 1rem;
          border-bottom: 1px dashed #353935;
          padding-bottom: 0.75rem;
          font-size: 0.9rem;
          min-width: 30ch;
        }
      }
      p {
        font-size: 0.8rem;
        max-width: 30ch;
        line-height: 1.1rem;
      }
    }

    &__links-container {
      cursor: pointer;
    }
  }
</style>
