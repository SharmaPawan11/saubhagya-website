<script setup lang="ts">

</script>

<template>
  <div class="our-clients">
    <h2 class="section-header">Our clients</h2>
    <div class="client-container">
      <div class="client">
        <img src="~/assets/images/Shridhar.jpg" alt="Neo Politico">
      </div>
      <div class="client">
        <img src="~/assets/images/np.jpg" alt="Neo Politico">
      </div>
      <div class="client">
        <img src="~/assets/images/nphindi.jpg" alt="Neo Politico">
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .our-clients {
    background-color: #e2e2e2;
    color: #353935;
    padding: 3rem 4rem;

    .section-header::before {
      left: 48%;
    }

    .client-container {
      margin-top:3rem;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 2rem;
      .client {
        flex-basis: 175px;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>