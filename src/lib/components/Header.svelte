<script lang="ts">
  import { logo, menu, close } from 'src/assets';
  import { navLinks } from 'src/constants';

  let toogle = false;
</script>

<header class="box-width mx-auto padding-x lg:px-16 xl:px-0 text-white py-6">
  <div class="flex justify-between items-center">
    <a href="/">
      <img src={logo} alt="hookbank logo" class="h-8" />
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
        <img
          src={toogle ? close : menu}
          alt="menu"
          class="w-7 object-contain aspect-square cursor-pointer"
          on:click={() => (toogle = !toogle)}
        />

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
