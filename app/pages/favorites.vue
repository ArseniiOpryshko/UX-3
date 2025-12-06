<script setup lang="ts">
const favoriteCars = ref([
  {
    id: 1,
    brand: { name: "BMW" },
    model: "X5 M-Competition",
    description: "A luxury SUV that combines performance and comfort.",
    engine: "4.4L V8",
    year: 2023,
    maxSpeed: 290,
    transmission: "Automatic",
    dailyPrice: 250,
    images: [{ url: "https://placehold.co/600x400" }],
  },
  {
    id: 3,
    brand: { name: "Audi" },
    model: "RS7",
    description: "Sportback design with a powerful engine.",
    engine: "4.0L V8",
    year: 2024,
    maxSpeed: 305,
    transmission: "Automatic",
    dailyPrice: 320,
    images: [{ url: "https://placehold.co/600x400" }],
  },
]);
</script>

<template>
  <div>
    <h2 class="text-[30px] text-center font-bold my-[25px]">Favorite Cars</h2>
    <div class="flex flex-wrap gap-10 mb-20 justify-center">
      <CarsCard
        v-if="favoriteCars.length != 0"
        v-for="car in favoriteCars"
        :key="car.id"
        :car="car"
        class="w-[300px] h-[400px]"
      />
      <p v-else>You have no favorite cars.</p>
    </div>
  </div>
</template>
