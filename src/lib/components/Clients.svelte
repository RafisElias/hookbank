<script lang="ts">
  import { clients } from 'src/constants';
</script>

<section id="clients" class="text-white flex-center flex-wrap gap-7 mt-0 mb-16">
  {#each clients as client}
    <div class="sm:min-w-48 min-w-[120px]">
      <img src={client.logo} alt={client.id} class="sm:w-48 w-[100px] h-auto" />
    </div>
  {/each}
</section>
