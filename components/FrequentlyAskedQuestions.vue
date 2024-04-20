<script setup lang="ts">

</script>

<template>
  <div class="frequently-asked-questions">
    <h2 class="section-header">Frequently asked questions</h2>
    <Accordion :activeIndex="0" class="test">
      <AccordionTab header="What are the rights of arrested persons in India?">
        <p class="m-0">
          Arrested persons have several rights, including the right to remain silent, the right to be informed of the grounds of arrest, the right to legal representation, and the right to be produced before a magistrate within 24 hours.
        </p>
      </AccordionTab>
      <AccordionTab header="What is the legal age of consent in India?">
        <p class="m-0 test" >
          The legal age of consent in India is 18 years. Any sexual activity with a person below this age is considered a criminal offense under various laws.
        </p>
      </AccordionTab>
      <AccordionTab header="How can I get information under the Right to Information (RTI) Act in India?">
        <p class="m-0">
          To obtain information under the RTI Act, an individual can file an application with the relevant public authority in writing, either online or offline. The authority is obligated to respond within a specific time frame.
        </p>
      </AccordionTab>
      <AccordionTab header="Is it legal to kill someone in self-defence in India?">
        <p class="m-0">
          Yes! Self-defence is known as the Right to private defence.
          Section 76 to 106 of IPC provides general exceptions from criminal liability. Section 96 to 106 provides defences when a person can kill someone in self-defence but section 99 of IPC Clearly mentions that the right to private defense can only be available when there is a a reasonable apprehension of death or grievous hurt to the person.
        </p>
      </AccordionTab>
    </Accordion>
  </div>
</template>

<style scoped lang="scss">
  .frequently-asked-questions {
    background-color: #f1f1f1;
    color: #353935;
    padding: 3rem 4rem;

    :deep(.p-accordion-header-link) {
      font-size: 1.2rem;
      background-color: #f1f1f1;
      color: #353935
    }
    :deep(.p-accordion-content) {
      background-color: transparent;
      color: #353935;
    }
  }
</style>
