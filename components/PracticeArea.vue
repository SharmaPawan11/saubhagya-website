<script setup lang="ts">

</script>

<template>
  <div class="practice-area">
    <h2 class="section-header">Our practice area</h2>
    <div class="practice-area__item_container">
      <div class="practice-area__item">
        <img src="~/assets/images/handcuffs.svg" alt="Handcuffs">
        <h3>Civil Litigation</h3>
        <p>Dispute between people/businesses over money or some injury to personal rights</p>
      </div>
      <div class="practice-area__item">
        <img src="~/assets/images/revenue.svg" alt="Revenue">
        <h3>Revenue Matters</h3>
        <p>Proceedings relating to the rent, revenue, or profits of land used for agricultural purposes</p>
      </div>
      <div class="practice-area__item">
        <img src="~/assets/images/criminal.svg" alt="Criminal">
        <h3>Criminal Law</h3>
        <p>Criminal justice system administers punishments based on the Indian Penal Code (IPC)</p>
      </div>
      <div class="practice-area__item">
        <img src="~/assets/images/couple.svg" alt="Couple">
        <h3>Matrimonial Matters</h3>
        <p>Marriage laws in India are governed by various personal laws based on the religion</p>
      </div>
      <div class="practice-area__item">
        <img src="~/assets/images/consumer.svg" alt="Consumer">
        <h3>Consumer Protection</h3>
        <p>General enactments other than the law of torts which aimed at protection of consumers interests</p>
      </div>
      <div class="practice-area__item">
        <img src="~/assets/images/corporate.svg" alt="Corporate">
        <h3>Corporate Law</h3>
        <p>Corporate law in India deals with the formation, funding & death of a corporation</p>
      </div>
      <div class="practice-area__item">
        <img src="~/assets/images/cyber.svg" alt="Handcuffs">
        <h3>Cyber Crime</h3>
        <p>Crime laws in India provides a legal framework to check & mitigate cyber crimes</p>
      </div>
      <div class="practice-area__item">
        <img src="~/assets/images/real-estate.svg" alt="Handcuffs">
        <h3>Real Estate Matters</h3>
        <p>Indian real estate falls under the purview of a combination of State-specific and Central laws</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .practice-area {
    background-color: #f1f1f1;
    color: #353935;
    padding: 3rem 4rem;

    h3 {
      font-weight: 600;
    }

    &__item_container {
      margin-top: 3rem;
      justify-content: center;
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
    }

    &__item {
      flex-basis: 16rem;
      text-align: center;
      img {
        width: 4rem;
        height: 4rem;
      }
    }
  }
</style>
