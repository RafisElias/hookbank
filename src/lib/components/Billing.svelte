<script lang="ts">
  import { bill } from 'src/assets';
  import { Google, Apple } from 'src/lib/components/Icons';
</script>

<section
  id="product"
  class="grid md:grid-cols-2 grid-cols-1 gap-12 padding-y text-white font-poppins"
>
  <div class="section-info relative">
    <img src={bill} alt="bill" class="z-[5] relative" />
    <div class="absolute z-[3] -left-1/2 top-0 w-1/2 h-1/2 rounded-full white__gradient" />
    <div class="absolute z-0 -left-1/2 bottom-0 w-1/2 h-1/2 rounded-full pink__gradient" />
  </div>
  <div class="section-info row-start-1 row-end-2 md:col-start-2">
    <h2 class="heading-2">
      Easily control your <br class="sm:hidden block" /> billing & invoicing.
    </h2>
    <p class="paragraph max-w-[470px] mb-10 mt-5">
      Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum
      orci rhoncus aliporttitor integer platea placerat.
    </p>
    <div class="flex gap-8 w-full justify-center ss:justify-start">
      <Google classes="cursor-pointer" />
      <Apple classes="cursor-pointer" />

      <!-- <img src={google} alt="google play store" class="cursor-pointer" /> -->
      <!-- <img src={apple} alt="apple store" class="cursor-pointer" /> -->
    </div>
  </div>
</section>
