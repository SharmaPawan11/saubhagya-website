<script setup lang="ts">
  const runtimeConfig = useRuntimeConfig()
  const toast = useToast();

  const name = ref(null);
  const email = ref(null);
  const phone = ref(null);
  const message = ref(null);
  const error = ref(null);
  const submitted = ref(false);

  const resetStates = () => {
    submitted.value = false;
    error.value = null;
  };

  const resetForm = () => {
    name.value = null;
    email.value = null;
    phone.value = null;
    message.value = null;
  };


  const onSubmit = async () => {
    resetStates();

    try {
      const response = await $fetch(runtimeConfig.public.FormCarryUrl, {
        method: 'POST',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: name.value, email: email.value, message: message.value, phone: phone.value })
      });

      if (response.code === 200) {
        submitted.value = true;
        resetForm();
        toast.add({
          severity: "contrast",
          summary: 'Thank You',
          detail: 'Your response has been recorded. Our Team will contact you shortly',
          life: 3000
        });
      } else if (response.code === 422) {
        error.value = response.message;
      } else {
        error.value = response.message;
      }
      console.log(error)
    } catch (err) {
      error.value = err.message ? err.message : err;
      console.log(error)
    }

  }
</script>

<template>
    <div id="contact-us" class="contact-us-form">
        <h2 class="section-header">
          Request a free advise from <br> us today
        </h2>
        <div class="contact-us-form__information_container">
          <form class="contact-us-form__input_container" @submit.prevent="onSubmit">
            <FloatLabel>
              <InputText id="name" v-model="name" class="contact-us-form__input" />
              <label for="name" class="contact-us-form__input_label">Your Name</label>
            </FloatLabel>
            <FloatLabel>
              <InputText id="email" v-model="email" class="contact-us-form__input" />
              <label for="email" class="contact-us-form__input_label">Your Email</label>
            </FloatLabel>
            <FloatLabel>
              <InputText id="phone" v-model="phone" class="contact-us-form__input" />
              <label for="phone" class="contact-us-form__input_label">Phone</label>
            </FloatLabel>
            <FloatLabel>
              <Textarea id="message" v-model="message" rows="5" cols="30" class="contact-us-form__textarea" />
              <label for="message" class="contact-us-form__textarea_label" >Your Messsage</label>
            </FloatLabel>
            <div class="contact-us-form__submit_button">
              <Button type="submit" label="Get Free Consultation"/>
            </div>
          </form>
          <div class="contact-us-form__contact_info_container">
            <div class="contact-us-form__information_item">
              <i class="pi pi-at"></i>
              <div class="text-container">
                <h3>Email</h3>
                <p>help@saubhagyamishra.com</p>
              </div>
            </div>
            <div class="contact-us-form__information_item">
              <i class="pi pi-phone"></i>
              <div class="text-container">
                <h3>Phone</h3>
                <p>+91-9452616163</p>
              </div>
            </div>
            <div class="contact-us-form__information_item">
              <i class="pi pi-map-marker"></i>
              <div class="text-container">
                <h3>Office Address</h3>
                <p>A 309, Advocates Chamber, Lucknow High Court, Lucknow</p>
                <p>1/598, Sector H, Jankipuram, Lucknow 226021</p>

              </div>
            </div>
            <div class="contact-us-form__information_item">
              <i class="pi pi-clock"></i>
              <div class="text-container">
                <h3>Office Hour</h3>
                <p>10am - 8pm</p>
              </div>
            </div>
          </div>
        </div>
        <Toast position="center" />
    </div>
</template>

<style scoped lang="scss">

    .contact-us-form {

      background-color: white;
      padding:3rem;

      @media (max-width:450px) {
        padding: 2rem;
      }

      h2.section-header {
        color: #353935;
      }

      &__information_container {
        display: flex;
        padding: 4rem;
        gap: 2rem;
        flex-wrap: wrap-reverse;
        background-color: #f1f1f1;
        @media (max-width:1281px) {
          padding: 3rem;
        }
        @media (max-width:450px) {
          padding: 1.5rem;
        }
      }

      &__input_container {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        flex-basis: 430px;
        flex-grow: 1;
        flex-shrink: 1;
      }

      &__input {
        flex-basis: 1rem;
        width: 100%;
        height: 4em;
        background-color: white;
        color: #353935;
        &:focus {
           background-color: #353935;
            color: white;
         }
      }

      &__input_label {
        color: #353935;
      }

      &__textarea {
        width: 100%;
        height: 10em;
        background-color: white;
        color: #353935;
        &:focus {
          background-color: #353935;
          color: white;
        }
      }

      &__textarea_label {
        color: #353935;
      }

      &__contact_info_container {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        flex-shrink: 1;
        gap: 2rem;
        //flex-basis: 50%; //512px
        padding-top: 2rem;
        padding-left: 2rem;
        margin-bottom: 2rem;
        color: #353935;
        @media (max-width:1132px) {
          padding-left: unset;
        }
      }

      &__information_item {
        display: flex;
        gap: 2rem;
        i {
          align-self: center;
          font-size: 2rem;
        }
        .text-container {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        h3 {
          margin: unset;
          font-weight: normal;
          font-size: 1.5rem;
        }
        p{
          margin: unset;
          word-break: break-word;
        }
      }

      Button {
        height: 3.5rem;
        background-color: #bfbfbf;
        //flex-basis: 50%;
      }
    }
</style>
