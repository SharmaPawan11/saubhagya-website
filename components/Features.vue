<script setup lang="ts">

</script>

<template>
  <div class="component-container">
    <div class="feature-container">
      <div class="feature-container__item">
        <img src="~/assets/images/gavel.svg" alt="">
        <h3>Qualified Attorneys</h3>
        <p>Seasoned attorneys delivering tailored solutions with integrity and expertise</p>
      </div>
      <div class="feature-container__item">
        <img src="~/assets/images/time.svg" alt="">
        <h3>All time support</h3>
        <p>Round-the-clock support, ensuring you receive guidance and assistance whenever needed</p>
      </div>
      <div class="feature-container__item">
        <img src="~/assets/images/weight.svg" alt="">
        <h3>Reasonable Fees</h3>
        <p>Transparent pricing ensuring affordability without compromising quality legal services</p>
      </div>
      <div class="feature-container__item">
        <img src="~/assets/images/success.svg" alt="">
        <h3>High Success Rate</h3>
        <p>Consistently delivering favorable outcomes, our high success rate speaks volumes</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .component-container {
    background-color: #f9f9f9;
  }

  .feature-container {
    position: relative;
    top: -75px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    width: 70%;
    padding: 2rem 1rem;
    background-color: #f3f3f3;
    color: #353935;
    margin-left: auto;
    margin-right: auto;

    &__item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      max-width: 22ch;
      gap: 0.5rem;
      img {
        width: 2rem;
        height: 2rem;
        margin-bottom: 1rem;
      }
      h3 {
        font-weight: 400;
        margin: 0
      }
      p {
        font-size: 0.75rem;
        font-weight: 500;
        text-align: center;
        margin: 0;
        line-height: 1.5rem;
      }
    }
  }
</style>
