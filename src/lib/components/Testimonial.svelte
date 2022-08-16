<script lang="ts">
  import { feedbacks } from 'src/constants';
</script>

<section id="clients" class="flex flex-col padding-y text-white font-poppins relative">
  <div class="absolute z-0 w-3/5 h-3/5 rounded-full blue__gradient -right-1/2" />
  <div class="grid grid-cols-1 md:grid-cols-2 text-center md:text-left">
    <h2 class="heading-2">What people are saying about us</h2>
    <p class="paragraph max-w-[470px] mx-auto md:mx-0 mb-10 mt-5">
      Everything you need to accept card payments and grow your business anywhere on the planet.
    </p>
  </div>
  <div class="flex flex-wrap justify-center relative gap-5 mt-12">
    {#each feedbacks as feedback}
      <div
        class="flex flex-col justify-between px-10 py-12 gap-10 rounded-[20px] feedback-card cursor-pointer max-w-[370px] my-5"
      >
        <div>
          <img src="src/assets/quotes.svg" alt="double quotes" />
        </div>
        <p class="text-lg font-normal tracking-wide leading-8">
          {feedback.content}
        </p>
        <div class="flex items-center gap-4">
          <img src={feedback.img} alt={feedback.img} class="w-12 aspect-square" />
          <div>
            <p class="text-xl leading-8 font-semibold">{feedback.name}</p>
            <p class="text-base text-dimWhite font-normal">{feedback.title}</p>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>
