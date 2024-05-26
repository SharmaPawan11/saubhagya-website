<script setup lang="ts">
  function scrollTo(selector) {
    document.querySelector(selector).scrollIntoView({
      behavior: 'smooth'
    })
  }
</script>

<template>
  <div class="navbar">
    <div class="logo-container" id="home">
      <img src="~/assets/images/logo.svg" alt="">
      <div class="title-container">
        <h6>Law Chambers of</h6>
        <h1>Adv. Saubhagya</h1>
      </div>
    </div>
    <div class="navbar__items-container">
      <ScrollLink href="#home">
        <Button label="Home" link />
      </ScrollLink>
      <Button label="About Us" link />
      <ScrollLink href="#practice-area">
        <Button label="Services" link />
      </ScrollLink>
      <Button label="Cases" link />
      <Button label="Blog" link />
      <ScrollLink href="#contact-us">
        <Button label="Contact Us" class="contact-us-btn"/>
      </ScrollLink>

    </div>
    <Button icon="pi pi-bars" aria-label="Menu" class="menu-button"></Button>

  </div>
</template>

<style scoped lang="scss">
  .navbar {
    margin-left: 4rem;
    margin-right: 4rem;
    padding: 0.5rem 0;
    display: flex;
    border-bottom: 1px solid #646464;

    @media (max-width:940px) {
      margin-left: 2rem;
      margin-right: 2rem;
    }

    .logo-container {
      display: flex;
      gap: 1rem;
      .title-container {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;

        h1, h6 {
          font-family: Gauthier, serif;
          font-weight: 100;
          margin: 0
        }
        h1 {
          font-size: 1.5rem;
          align-self: center;
        }
        h6 {
          font-size: 1rem;
        }
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

      @media (max-width:890px) {
        display: none;
      }
    }

    Button.menu-button {
      height: max-content;
      align-self: center;
      margin-left: auto;
      @media (min-width:890px) {
        display: none;
      }
    }

  }
</style>
