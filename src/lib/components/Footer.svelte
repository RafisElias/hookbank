<script lang="ts">
  import Logo from 'src/lib/components/Svgs/Logo.svelte';
  import { footerLinks, socialMedia } from 'src/constants';
</script>

<footer
  class="font-poppins flex flex-col padding-y mt-16 gap-5 text-white box-width mx-auto padding-x lg:px-16 xl:px-0"
>
  <div class="section justify-between items-start w-full gap-y-4">
    <div class="flex flex-1 flex-col">
      <Logo classes="mb-5 w-[266px] h-[72px] object-contain" />
      <!-- <img src={logo} alt="hoobank logo footer" class="mb-5 w-[266px] h-[72px] object-contain" /> -->
      <p class="paragraph max-w-[310px] text-center md:text-left">
        A new way to make the payments easy, reliable and secure.
      </p>
    </div>
    <div class="flex-[1.5] flex flex-row justify-between flex-wrap md:mt-0 mt-0">
      {#each footerLinks as footerLink}
        <div class="min-w-[150px] ss:my-0 my-4">
          <h4 class="text-lg mb-6">{footerLink.title}</h4>
          <ul class="list-none space-y-3">
            {#each footerLink.links as link}
              <li class="paragraph leading-6  hover:text-secondary cursor-pointer">
                {link.name}
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </div>
  <hr class="border-t-[1px] border-t-[#3F3E45] w-full h-[0px]" />

  <div class="w-full flex justify-between items-center md:flex-row flex-col pt-6 ">
    <p class="text-lg text-center">Copyright 2021 HooBank. All Rights Reserved.</p>
    <div class="flex flex-row md:mt-0 mt-6 gap-6 justify-center">
      {#each socialMedia as social}
        <svelte:component
          this={social.icon}
          classes="w-auto h-auto cursor-pointer hover:text-secondary"
          aria
        />
      {/each}
    </div>
  </div>
</footer>
