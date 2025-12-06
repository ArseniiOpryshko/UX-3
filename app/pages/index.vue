<script setup lang="ts">
const brands = ref([
  { id: 1, name: "BMW" },
  { id: 2, name: "Mercedes-Benz" },
  { id: 3, name: "Audi" },
  { id: 4, name: "Toyota" },
]);

const models = ref([
  { name: "X5" },
  { name: "E-Class" },
  { name: "Q8" },
  { name: "Camry" },
]);

const prices = ref({
  minPrice: 50,
  maxPrice: 1000,
});

const cars = ref([
  {
    id: 1,
    brand: { name: "BMW" },
    model: "X5 M-Competition",
    description:
      "A luxury SUV that combines performance and comfort for the ultimate driving experience.",
    engine: "4.4L V8",
    year: 2023,
    maxSpeed: 290,
    transmission: "Automatic",
    dailyPrice: 250,
    images: [{ url: "https://placehold.co/600x400" }],
  },
  {
    id: 2,
    brand: { name: "Mercedes-Benz" },
    model: "G-Class",
    description:
      "The iconic G-Wagon offers unmatched style and off-road capability.",
    engine: "4.0L V8",
    year: 2022,
    maxSpeed: 210,
    transmission: "Automatic",
    dailyPrice: 400,
    images: [{ url: "https://placehold.co/600x400" }],
  },
  {
    id: 3,
    brand: { name: "Audi" },
    model: "RS7",
    description:
      "Sportback design with a powerful engine and sleek aerodynamics.",
    engine: "4.0L V8",
    year: 2024,
    maxSpeed: 305,
    transmission: "Automatic",
    dailyPrice: 320,
    images: [{ url: "https://placehold.co/600x400" }],
  },
]);

const selectedBrand = ref(null);
const selectedModel = ref(null);
const sliderValue = ref(0);

const handleSearch = () => {
  console.log("Search triggered with:", {
    brand: selectedBrand.value,
    model: selectedModel.value,
    price: sliderValue.value,
  });
};
</script>

<template>
  <div>
    <div>
      <img
        class="h-[600px] w-full object-cover object-center"
        src="~~/assets/images/catalog-preview.jpg"
        alt="Catalog image"
      />
      <div class="flex flex-col absolute top-30 left-30">
        <h2 class="text-[46px] text-white font-bold mb-[25px]">
          Let's find your perfect car
        </h2>
        <div
          class="flex flex-col items-center justify-center gap-5 p-10 rounded-2xl w-[450px] text-black bg-white"
        >
          <IftaLabel class="w-full">
            <Select
              v-model="selectedBrand"
              inputId="dd-brand"
              :options="brands"
              optionLabel="name"
              class="w-full"
              variant="filled"
            />
            <label for="dd-brand">Select brand</label>
          </IftaLabel>
          <IftaLabel class="w-full">
            <Select
              v-model="selectedModel"
              inputId="dd-model"
              :options="models"
              optionLabel="name"
              class="w-full"
              variant="filled"
              :disabled="!selectedBrand"
            />
            <label for="dd-model">Select model</label>
          </IftaLabel>
          <IftaLabel class="w-full">
            <InputText class="w-full mb-4" />
            <Slider :max="prices.maxPrice" />
            <label>Select max price</label>
            <div class="flex justify-between mt-2">
              <span class="text-sm text-gray-500">${{ prices.minPrice }}</span>
              <span class="text-sm text-gray-500">${{ prices.maxPrice }}</span>
            </div>
          </IftaLabel>
          <div
            @click="handleSearch"
            class="flex items-center justify-center w-full h-[50px] bg-[#405FF2] border border-blue-600 rounded-xl text-[24px] font-bold text-white cursor-pointer hover:bg-[#1E5BBF] transition duration-300"
          >
            <i class="pi pi-search mr-2"></i>
            <span>Search</span>
          </div>
        </div>
      </div>
    </div>

    <div class="mb-10">
      <h2 class="text-[30px] text-center font-bold my-[25px]">Our Fleet</h2>
      <div class="flex flex-wrap gap-6 justify-center">
        <CarsCard
          v-if="cars.length != 0"
          v-for="car in cars"
          :key="car.id"
          :car="car"
          class="w-[300px] h-[400px]"
        />
        <p v-else>
          No cars found. Try changing filters or looking for other models.
        </p>
      </div>
    </div>
  </div>
</template>
