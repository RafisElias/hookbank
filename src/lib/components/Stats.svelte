<script lang="ts">
  import { stats } from 'src/constants';
</script>

<section class="text-white flex flex-row justify-between flex-wrap sm:mb-20 mb-6">
  {#each stats as stat}
    <div id={stat.id} class="flex font-poppins gap-[25.5px] items-center flex-1 m-3">
      <h4 class="xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] font-semibold">
        {stat.value}
      </h4>
      <p
        class="text-gradient xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] uppercase font-normal"
      >
        {stat.title}
      </p>
    </div>
  {/each}
</section>
