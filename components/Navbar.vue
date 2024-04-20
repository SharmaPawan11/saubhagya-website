<script setup lang="ts">

</script>

<template>
  <div class="navbar">
    <div class="logo-container">
      <img src="~/assets/images/logo.svg" alt="">
      <h1>Adv. Saubhagya</h1>
    </div>
    <div class="navbar__items-container">
      <Button label="Home" link />
      <Button label="About Us" link />
      <Button label="Services" link />
      <Button label="Cases" link />
      <Button label="Blog" link />
      <Button label="Contact Us" class="contact-us-btn" />

    </div>
  </div>
</template>

<style scoped lang="scss">
  .navbar {
    margin-left: 4rem;
    margin-right: 4rem;
    padding: 0.5rem 0;
    display: flex;
    border-bottom: 1px solid #646464;

    .logo-container {
      display: flex;
      gap: 1rem;
      h1 {
        font-family: Gauthier, serif;
        font-size: 1.5rem;
        font-weight: 100;
        align-self: center;
      }
      img {
        width: 48px;
      }
    }

    &__items-container {
      display: flex;
      align-items: center;
      margin-left: auto;

      Button {
        font-size: 0.9rem;
      }

      .contact-us-btn {
        margin-left: 2rem;
        border-radius: 0;
        height: 2.5rem;
        width: 9rem;
      }
    }
  }
</style>
