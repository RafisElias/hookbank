<script lang="ts">
  import Logo from './Svgs/Logo.svelte';
  import { Menu, Close } from './Icons';
  import { navLinks } from 'src/constants';

  let toogle = false;
</script>

<header class="box-width mx-auto padding-x lg:px-16 xl:px-0 text-white py-6">
  <div class="flex justify-between items-center">
    <a href="/">
      <Logo classes="h-8 w-auto" />
    </a>
    <nav>
      <ul class="list-none sm:flex hidden gap-14 items-center">
        {#each navLinks as link}
          <li
            class="font-poppins font-normal text-base hover:text-white"
            class:text-dimWhite={link.id !== 'home'}
          >
            <a href="#{link.id}">
              {link.title}
            </a>
          </li>
        {/each}
      </ul>

      <div class="sm:hidden flex relative">
        <div on:click={() => (toogle = !toogle)}>
          {#if toogle}
            <Close classes="w-7 h-auto object-contain aspect-square cursor-pointer" />
          {:else}
            <Menu classes="w-7 h-auto object-contain aspect-square cursor-pointer" />
          {/if}
        </div>

        <div
          class={toogle
            ? ' flex absolute p-6 bg-black-gradient top-12 right-0 ml-4 my-2 min-w-[140px] rounded-xl flex-1 justify-center sidebar'
            : 'hidden absolute'}
        >
          <ul class="list-none flex flex-col gap-4 items-center">
            {#each navLinks as link}
              <li
                class="font-poppins font-normal text-base "
                class:text-dimWhite={link.id !== 'home'}
              >
                <a href="#{link.id}">
                  {link.title}
                </a>
              </li>
            {/each}
          </ul>
        </div>
      </div>
    </nav>
  </div>
</header>
