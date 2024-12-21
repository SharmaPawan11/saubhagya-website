<script setup lang="ts">
  const props = defineProps({
    fixedTop: String,
    contactHref: String,
  })
</script>

<template>
  <a class="container" v-bind:href="contactHref">
    <div class="icon-container">
      <slot name="icon"></slot>
    </div>
  </a>
</template>

<style scoped lang="scss">
.container {
  position: fixed;
  top: v-bind('fixedTop');
  right: 0;
  z-index: 999;
  cursor: pointer;
  .icon-container {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #444;
    :slotted(img) {
      width: 70%;
      height: 70%;
    }
  }
}
</style>
