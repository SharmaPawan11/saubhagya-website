<script setup lang="ts">
const visible = ref(true);
</script>

<template>
  <div class="card flex justify-content-center">
    <Dialog v-model:visible="visible" modal header="Disclaimer" :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
      <p class="mb-5">
        Pursuant to regulations by the Indian Bar Council, law firms are prohibited from advertising or soliciting work via public communication. This website serves solely informational purposes and is not intended for advertising. Saubhagya Mishra & Associates explicitly disclaims any intention to solicit clients through this website. We do not assume responsibility for decisions made by visitors solely based on the information provided herein. By 'ENTERING', visitors acknowledge that the content of this website - <br><br>
        (a) does not constitute advertising or solicitation, and <br>
        (b) is intended solely for their understanding of our activities and identity.
      </p>
    </Dialog>
  </div>
</template>




<style scoped lang="scss">
  p {
    font-size: 0.9rem;
    line-height: 1.5rem;
  }
</style>
