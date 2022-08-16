<script lang="ts">
  import {
    Billing,
    Business,
    CardDeal,
    Clients,
    Cta,
    Footer,
    Header,
    Hero,
    Stats,
    Testimonial
  } from 'src/lib/components';
</script>

<main class="bg-primary w-full overflow-hidden min-h-screen">
  <Header />

  <Hero />

  <div class="bg-primary box-width mx-auto padding-x lg:px-16 xl:px-0">
    <Stats />
    <Business />
    <Billing />
    <CardDeal />
    <Testimonial />
    <Clients />
    <Cta />
  </div>
  <Footer />
</main>
