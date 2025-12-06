<script setup>
const route = useRoute();
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <div class="flex items-center justify-between px-4 bg-[#05001F]">
      <img class="w-[90px]" src="~~/assets/images/logo.png" alt="" />
      <div class="flex items-center gap-4">
        <NuxtLink
          to="#"
          :class="[
            'block px-2 py-1 text-lg font-bold rounded-xl cursor-pointer',
            route.path === '#' ? 'bg-white text-black' : 'text-white',
          ]"
          ><i class="pi pi-home"></i>

          Home</NuxtLink
        >
        <NuxtLink
          to="/"
          :class="[
            'block px-2 py-1 text-lg font-bold rounded-xl cursor-pointer',
            route.path === '/' ? 'bg-white text-black' : 'text-white',
          ]"
          ><i class="pi pi-car"></i> Cars</NuxtLink
        >
        <NuxtLink
          to="/favorites"
          :class="[
            'block px-2 py-1 text-lg font-bold rounded-xl cursor-pointer',
            route.path === '/favorites' ? 'bg-white text-black' : 'text-white',
          ]"
        >
          <i class="pi pi-heart"></i> Favorites</NuxtLink
        >
      </div>
      <NuxtLink
        to="/profile"
        class="block px-2 py-1 text-lg font-bold text-white bg-[#078D2D] rounded-xl cursor-pointer"
      >
        <i class="pi pi-user"></i>
        Profile
      </NuxtLink>
    </div>
    <div class="flex-grow">
      <slot />
    </div>
    <div class="flex flex-col w-full bg-[#05001F] text-white">
      <div class="flex items-center justify-between px-4">
        <img class="w-[300px]" src="~~/assets/images/logo.png" alt="" />
        <div class="flex gap-20 w-1/3">
          <div class="flex flex-col gap-4">
            <NuxtLink to="/" class="text-[20px] font-bold">Home</NuxtLink>
            <NuxtLink to="/catalog" class="text-[20px] font-bold"
              >Cars</NuxtLink
            >
            <NuxtLink to="/profile" class="text-[20px] font-bold"
              >Profile</NuxtLink
            >
          </div>
          <div class="flex flex-col gap-4">
            <NuxtLink to="/favorites" class="text-[20px] font-bold"
              >Favorites</NuxtLink
            >
            <div class="text-[20px] font-bold cursor-pointer">
              User Agreement
            </div>
            <div class="text-[20px] font-bold cursor-pointer">Advertising</div>
          </div>
        </div>
      </div>
      <div class="w-full h-[1px] bg-white"></div>
      <p class="text-center p-4">PROJECT BY ARSENII OPRYSHKO</p>
    </div>
  </div>
</template>
