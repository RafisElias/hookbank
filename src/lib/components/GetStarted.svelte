<script lang="ts">
  import { ArrowUp } from 'src/lib/components/Icons';
</script>

<div
  class="container flex-center w-[8.75rem] aspect-square bg-blue-gradient rounded-full p-[0.125rem] cursor-pointer"
>
  <div class="flex-center flex-col bg-primary w-full h-full rounded-full">
    <div class="flex-start flex-row gap-2">
      <p class="font-poppins font-medium text-[1.125rem] leading-[1.438rem]">
        <span class="text-gradient">Get</span>
      </p>
      <ArrowUp classes="w-auto h-auto object-contain" />
      <!-- <img src={arrowUp} class="w-auto h-auto object-contain" alt="arrow icon" /> -->
    </div>
    <p class="font-poppins font-medium text-[1.125rem] leading-[1.438rem]">
      <span class="text-gradient">Started</span>
    </p>
  </div>
</div>
