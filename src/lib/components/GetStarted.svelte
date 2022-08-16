<script lang="ts">
  import { arrowUp } from 'src/assets';
</script>

<div
  class="container flex-center w-[8.75rem] aspect-square bg-blue-gradient rounded-full p-[0.125rem] cursor-pointer"
>
  <div class="flex-center flex-col bg-primary w-full h-full rounded-full">
    <div class="flex-start flex-row gap-2">
      <p class="font-poppins font-medium text-[1.125rem] leading-[1.438rem]">
        <span class="text-gradient">Get</span>
      </p>
      <img src={arrowUp} class="w-auto h-auto object-contain" alt="arrow icon" />
    </div>
    <p class="font-poppins font-medium text-[1.125rem] leading-[1.438rem]">
      <span class="text-gradient">Started</span>
    </p>
  </div>
</div>

<style>
  .container img {
    animation: up-down 1.5s ease-in-out infinite;
  }

  @keyframes up-down {
    0% {
      transform: translate(0);
    }
    50% {
      transform: translate(5px, -5px);
    }
    100% {
      transform: translate(0);
    }
  }
</style>
