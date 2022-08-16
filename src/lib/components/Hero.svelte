<script lang="ts">
  import { discount, robot } from 'src/assets';
  import GetStarted from './GetStarted.svelte';
</script>

<section
  id="home"
  class="flex md:flex-row flex-col padding-y text-white box-width mx-auto padding-x lg:px-16 xl:px-0"
>
  <div class="flex-1 flex-start flex-col xl:px-0 pr-6">
    <div
      class="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 gap-2"
    >
      <img src={discount} alt="discount icon" />
      <p class="paragraph">
        <span class="text-white">20%</span> DISCOUNT FOR
        <span class="text-white">1 MONTH</span> ACCOUNT
      </p>
    </div>
    <div class="flex flex-row items-center w-full">
      <h1
        class="flex-1 font-poppins font-semibold ss:text-[4.5rem] text-[3.25rem] text-white ss:leading-[6.25rem] leading-[4.688rem]"
      >
        The Next <br class="sm:block hidden" /> <span class="text-gradient">Generation</span>
      </h1>
      <div class="ss:flex hidden md:mr-4 mr-0">
        <GetStarted />
      </div>
    </div>
    <h1
      class="flex-1 font-poppins font-semibold ss:text-[4.25rem] text-[3.25rem] text-white ss:leading-[6.25rem] leading-[4.688rem] w-full"
    >
      Payment Method.
    </h1>
    <p class="paragraph max-w-[470px] mt-5">
      Our team of experts uses a methodology to identify the credit cards most likely to fit your
      needs. We examine annual percentage rates, annual fees.
    </p>
  </div>
  <div class="flex flex-1 flex-center md:my-0 my-10 relative">
    <img src={robot} alt="robot" class="w-full h-full z-[5] relative" />
    <div class="absolute z-0 w-2/5 h-[35%] top-0 pink__gradient" />
    <div class="absolute z-[1] w-4/5 rounded-full h-4/5 bottom-40 white__gradient" />
    <div class="absolute z-0 w-1/2 h-1/2 rigth-20 bottom-20 blue__gradient" />
  </div>
  <div class="ss:hidden flex-center">
    <GetStarted />
  </div>
</section>
