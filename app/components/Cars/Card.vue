<script setup lang="ts">
defineProps<{
  car: any;
}>();
</script>

<template>
  <NuxtLink
    :to="'/catalog/' + car.id"
    class="block flex flex-col border-1 border-gray-300 rounded-2xl overflow-hidden w-full max-w-[300px] bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
  >
    <div class="w-full h-[180px] overflow-hidden">
      <img
        :src="car.images[0].url"
        alt="Car image"
        class="w-full h-full object-cover"
      />
    </div>

    <div class="flex flex-col justify-between p-3 h-[240px]">
      <p class="text-[20px] font-bold">
        {{ car.brand.name + " " + car.model }}
      </p>
      <p class="text-[16px] mb-2 line-clamp-2 text-gray-600">
        {{ car.description }}
      </p>

      <div class="flex flex-wrap text-[14px] gap-y-2 text-gray-700">
        <p class="w-1/2">
          <i class="pi pi-microchip mr-1"></i>{{ car.engine }}
        </p>
        <p class="w-1/2"><i class="pi pi-calendar mr-1"></i>{{ car.year }}</p>
        <p class="w-1/2">
          <i class="pi pi-gauge mr-1"></i>{{ car.maxSpeed }} km/h
        </p>
        <p class="w-1/2">
          <i class="pi pi-sliders-h mr-1"></i>{{ car.transmission }}
        </p>
      </div>

      <div class="border-t border-gray-200 my-2"></div>

      <div class="flex justify-between items-center">
        <p class="text-[18px] font-bold text-gray-800">
          ${{ car.dailyPrice }} / day
        </p>
        <p class="text-[14px] text-blue-600 flex items-center gap-1">
          Details <i class="pi pi-arrow-up-right"></i>
        </p>
      </div>
    </div>
  </NuxtLink>
</template>
