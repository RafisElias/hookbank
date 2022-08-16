<script lang="ts">
  import Button from './Button.svelte';
  import { features } from 'src/constants';
</script>

<section id="features" class="grid md:grid-cols-2 grid-cols-1 padding-y  text-white font-poppins">
  <div class="section-info">
    <h2 class="heading-2">
      You do the business, <br class="sm:block hidden" /> we’ll handle the money.
    </h2>
    <p class="paragraph max-w-[470px] mb-10 mt-5">
      With the right credit card, you can improve your financial life by building credit, earning
      rewards and saving money. But with hundreds of credit cards on the market.
    </p>
    <Button title="Get Start" />
  </div>
  <div class="flex flex-col gap-10 flex-center md:ml-10 ml-0 md:mt-0 mt-10 relative">
    {#each features as feature}
      <div
        id={feature.id}
        class="flex items-center gap-6 rounded-[20px] p-5 hover:cursor-pointer feature-card"
      >
        <div class="w-16 aspect-square flex bg-dimBlue items-center justify-center rounded-full">
          <img src={feature.icon} alt="icon {feature.icon}" class="w-1/2 h-1/2" />
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-2">{feature.title}</h4>
          <p class="text-base font-normal text-dimWhite">{feature.content}</p>
        </div>
      </div>
    {/each}
  </div>
</section>
