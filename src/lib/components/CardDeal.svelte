<script lang="ts">
  import Button from './Button.svelte';
</script>

<section
  id="card-deal"
  class="grid md:grid-cols-2 grid-cols-1 padding-y text-white font-poppins gap-12"
>
  <div class="section-info text-center md:text-left items-center md:items-start">
    <h2 class="heading-2">
      Find a better card deal <br class="sm:hidden block" /> in few easy steps.
    </h2>
    <p class="paragraph max-w-[470px] mb-10 mt-5 mx-auto md:mx-0 ">
      Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris
      tortor.ç Aliquet ultrices ac, ametau.
    </p>
    <Button title="Get Start" />
  </div>
  <div class="section-info">
    <img src="src/assets/card.png" alt="card" />
  </div>
</section>
