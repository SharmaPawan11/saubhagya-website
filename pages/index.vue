<template>
  <div>
    <Disclaimer></Disclaimer>
    <Hero></Hero>
    <Features></Features>
    <Experience></Experience>
    <PracticeArea></PracticeArea>
    <OurClients></OurClients>
    <Testimonial></Testimonial>
    <FrequentlyAskedQuestions></FrequentlyAskedQuestions>
    <WhatsappSticky></WhatsappSticky>
    <PhoneSticky></PhoneSticky>
    <ContactUs></ContactUs>
    <Footer></Footer>
  </div>
</template>
<script setup lang="ts">
useSeoMeta({
  ogSiteName: 'Saubhagya Mishra & Associates',
  title: 'Saubhagya Mishra & Associates | Lawyers in Lucknow | 9452616163',
  ogTitle: 'Saubhagya Mishra & Associates | Lawyers in Lucknow | 9452616163',
  description: 'Advocate Saubhagya Mishra & Associates - Expert legal services in Lucknow specializing in criminal law, matrimonial matters, consumer protection, and civil litigation. Offering affordable fees, 24/7 support, and a proven track record of success. Contact us for personalized legal solutions and free consultations.',
  ogDescription: 'Advocate Saubhagya Mishra & Associates - Expert legal services in Lucknow specializing in criminal law, matrimonial matters, consumer protection, and civil litigation. Offering affordable fees, 24/7 support, and a proven track record of success. Contact us for personalized legal solutions and free consultations.',
  ogImage: 'https://lh3.googleusercontent.com/p/AF1QipNTo6bcZaPAjkofczmy9VglXdhdIpp-849FpBv4=s1360-w1360-h1020',
  twitterCard: 'summary_large_image',
  robots: {
    index: true,
    follow: true
  },
  viewport: {
    width: "device-width",
    initialScale: "1.0"
  }
})
const jsonld = {
  "@context": "https://schema.org",
  "@type": "Website",
  "name": "Saubhagya Mishra & Associates",
  "alternateName": ["Adv. Saubhagya Mishra", "Saubhagya Mishra", "Advocate Saubhagya"],
  "url": "https://saubhagyamishra.com/"
}

useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(jsonld)
    }
  ],
  __dangerouslyDisableSanitizers: ['script'],
})
</script>
