<script setup lang="ts">

</script>

<template>
  <header>
    <div class="hero__content">
      <Navbar></Navbar>
      <div class="text">
        <h1>Where Justice Prevails: <span>Anchored</span> <br> in Righteousness</h1>
        <p>Empowering you with unwavering legal support, ensuring your rights are upheld and justice is served with integrity.</p>
      </div>
    </div>
    <img src="~/assets/images/hero2_compressed.jpg" fetchpriority="high" alt="" />
  </header>
</template>

<style scoped lang="scss">
  header {
    display: grid;
    grid-template-areas: "hero";
    height: 90vh;
    max-height: 900px;
    background-color: rgba(#353935, 0.8);
    align-items: start;

    > * {
      grid-area: hero;
    }
  }

  .hero__content {
    z-index: 1;
    display: grid;
    height: 100%;
    grid-template-rows: minmax(100px, max-content);

    .text {
      align-self: center;
      //@media (max-width:690px) {
      //  align-self: start;
      //  margin-top: 4rem;
      //}
    }

    h1,p {
      margin-left: 4rem;
      @media (max-width:940px) {
        margin-left: 2rem;
      }
    }

    h1 {
      margin-top: 0;
      margin-bottom: 0;
      font-size: 3.5rem;
      font-weight: 100;
      font-family: Alike, serif;
      span {
        padding: 0 0.5rem;
        background-color: #C89D65;
      }

      @media (max-width:940px) {
        font-size: 2.5rem;
      }
    }

    p {
      margin-right: 1rem;
      @media (max-width:940px) {
        font-size: 0.8rem;
      }
    }
  }

  img {
    object-fit: cover;
    height: min(90vh, 900px);
    width: 100%;
    z-index: -1;
  }
</style>
