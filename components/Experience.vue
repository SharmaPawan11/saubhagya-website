<script setup lang="ts">

</script>

<template>
  <div class="experience">
    <div class="experience__info-container">
      <h2 class="section-header">
        Among the leading lawyers across <br> Lucknow.
      </h2>
      <h3>Loyalty is very important to client</h3>
      <p>Trusted legal experts in Lucknow, dedicated to loyal representation, integrity, and personalized solutions for our valued clients' success</p>
      <div class="experience__highlights">
        <div class="experience__highlights-item">
          <img src="~/assets/images/gavel.svg" alt="gavel">
          <p><span>50+</span> Cases solved</p>
        </div>
        <div class="experience__highlights-item">
          <img src="~/assets/images/certificate.svg" alt="gavel">
          <p><span>6+</span> Years of experience </p>
        </div>
        <div class="experience__highlights-item">
          <img src="~/assets/images/client.svg" alt="gavel">
          <p><span>100+</span> Happy Clients</p>
        </div>
        <div class="experience__highlights-item">
          <img src="~/assets/images/network.svg" alt="gavel">
          <p><span>10+</span> Firm Countrywide</p>
        </div>
      </div>
    </div>
    <div class="experience__image">
      <img src="~/assets/images/output.jpg" alt="visual">
    </div>
  </div>
</template>

<style scoped lang="scss">
  .experience {
    flex-wrap: wrap;
    justify-content: center;
    background-color: #f9f9f9;
    color: #353935;
    display: flex;
    gap: 2rem;

    &__info-container {
      padding: 2rem 4rem;
      margin-left: 2rem;
      display: flex;
      flex-direction: column;
      @media (max-width:690px) {
        padding: 3rem 1rem;
      }

      .section-header {
        max-width: 19ch;
        text-align: left;
        margin-top: 0;
        margin-bottom: 0;
      }
      .section-header::before {
        left: 0;
      }

      h3 {
        margin-right: auto;
        font-weight: 600;
        max-width: 32.3ch;
      }

      p {
        margin-top: 0;
        margin-right: auto;
        font-weight: 500;
        line-height: 1.5rem;
        max-width: 39ch;
      }
    }

    &__image {
      img {
        width: 100%;
        padding: 1rem;
        max-width: 450px;
      }
    }

    &__highlights {
      margin-top: 1rem;
      display: grid;
      gap: 2rem;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      &-item {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        p {
          font-size: 0.9rem;
          span {
            font-size: 1.5rem;
          }
        }
        img {
          width: 3rem;
        }
      }
    }

  }
</style>
