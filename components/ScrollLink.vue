<script setup lang="ts">
  const { href } = defineProps(['href'])
  function scroll() {
    console.log(href)
    document.querySelector(href).scrollIntoView({
      behavior: 'smooth'
    })
  }
</script>

<template>
  <a :href="href" @click.prevent="scroll">
    <slot></slot>
  </a>
</template>

<style scoped lang="scss">
 a {
   text-decoration: none;
 }
</style>
