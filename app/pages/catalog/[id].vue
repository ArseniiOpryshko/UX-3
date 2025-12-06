<script setup lang="ts">
const car = ref({
  id: 1,
  brand: { name: "Porsche" },
  model: "911 GT3",
  description:
    "A high-performance sports car that offers an exhilarating driving experience with precision handling and iconic design.",
  transmission: "PDK Automatic",
  color: "Shark Blue",
  engine: "4.0L Flat-6",
  year: 2023,
  maxSpeed: 318,
  seats: 2,
  dailyPrice: 450,
  images: [
    { id: 1, url: "https://placehold.co/800x600" },
    { id: 2, url: "https://placehold.co/800x600" },
    { id: 3, url: "https://placehold.co/800x600" },
    { id: 4, url: "https://placehold.co/800x600" },
  ],
});

const dateRange = ref<[Date, Date] | null>(null);
const isFavourite = ref<boolean>(false);
const disabledDates = ref<Date[]>([]);

onMounted(() => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfter = new Date(today);
  dayAfter.setDate(dayAfter.getDate() + 2);

  disabledDates.value = [tomorrow, dayAfter];
});

const totalPrice = computed(() => {
  if (
    !car.value ||
    !dateRange.value ||
    !dateRange.value[0] ||
    !dateRange.value[1]
  ) {
    return null;
  }

  const msPerDay = 1000 * 60 * 60 * 24;
  const start = dateRange.value[0].getTime();
  const end = dateRange.value[1].getTime();
  const days = Math.floor((end - start) / msPerDay) + 1;

  return {
    days,
    total: car.value.dailyPrice * days,
  };
});

// Mock Actions
const toggleFavourite = () => {
  isFavourite.value = !isFavourite.value;
};

const bookCar = () => {
  if (!dateRange.value || !dateRange.value[0] || !dateRange.value[1]) {
    alert("Please select a date range");
    return;
  }

  const start = dateRange.value[0].toLocaleDateString();
  const end = dateRange.value[1].toLocaleDateString();

  console.log(`Booking attempt for ${car.value.brand.name} ${car.value.model}`);
  console.log(`From: ${start} To: ${end}`);
  console.log(`Total Price: $${totalPrice.value?.total}`);

  alert("Booking successful! Check console for details.");
};

const isDateDisabled = (slotDate: any) => {
  const constructedDate = new Date(slotDate.year, slotDate.month, slotDate.day);
  return disabledDates.value.some(
    (d) => d.toDateString() === constructedDate.toDateString()
  );
};
</script>

<template>
  <div class="flex flex-col w-full h-full px-6 py-10 bg-gray-100">
    <Toast />

    <div
      class="flex flex-col lg:flex-row bg-white rounded-2xl shadow-lg overflow-hidden"
    >
      <div class="flex flex-col gap-6 lg:w-1/2 p-8">
        <div class="flex justify-between items-start">
          <div>
            <h2 class="text-4xl font-extrabold text-gray-800">
              {{ car?.brand.name + " " + car?.model }}
            </h2>
            <p class="text-lg text-gray-600 mt-2">
              {{ car?.description }}
            </p>
          </div>
          <div
            class="text-yellow-500 text-3xl cursor-pointer"
            @click="toggleFavourite"
          >
            <i :class="isFavourite ? 'pi pi-star-fill' : 'pi pi-star'" />
          </div>
        </div>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[18px] text-gray-700"
        >
          <p><span class="font-bold">Brand:</span> {{ car?.brand.name }}</p>
          <p><span class="font-bold">Model:</span> {{ car?.model }}</p>
          <p>
            <span class="font-bold">Transmission:</span> {{ car?.transmission }}
          </p>
          <p><span class="font-bold">Color:</span> {{ car?.color }}</p>
          <p><span class="font-bold">Engine:</span> {{ car?.engine }}</p>
          <p><span class="font-bold">Year:</span> {{ car?.year }}</p>
          <p>
            <span class="font-bold">Max speed:</span>
            {{ car?.maxSpeed }} km/h
          </p>
          <p><span class="font-bold">Seats:</span> {{ car?.seats }}</p>
        </div>

        <div class="flex flex-col gap-2 mt-6">
          <p class="text-xl font-bold text-gray-800">
            You are renting the car for these dates:
          </p>
          <IftaLabel>
            <DatePicker
              v-model="dateRange"
              selectionMode="range"
              :minDate="new Date()"
              :disabledDates="disabledDates"
            >
              <template #date="slotProps">
                <span
                  :style="{
                    textDecoration: isDateDisabled(slotProps.date)
                      ? 'line-through'
                      : 'none',
                    color: isDateDisabled(slotProps.date) ? 'gray' : 'inherit',
                  }"
                >
                  {{ slotProps.date.day }}
                </span>
              </template>
            </DatePicker>
            <label for="date">Select dates</label>
          </IftaLabel>
          <p class="text-xl font-semibold text-gray-700">
            Total price:
            <span v-if="totalPrice">
              {{ totalPrice.total }}$ ({{ car?.dailyPrice }}$ / day)
            </span>
            <span v-else> 0$ ({{ car?.dailyPrice }}$ / day) </span>
          </p>

          <div
            @click="bookCar"
            class="flex items-center justify-center w-1/3 min-w-[250px] h-[50px] bg-[#405FF2] border border-blue-600 rounded-xl text-[20px] font-bold text-white mt-2 cursor-pointer hover:bg-[#1E5BBF] transition duration-300"
          >
            <i class="pi pi-calendar-clock mr-2"></i>
            <span>Book now</span>
          </div>
        </div>
      </div>

      <div class="lg:w-1/2 w-full h-[400px] lg:h-auto">
        <img
          :src="car?.images[0]!.url"
          alt="Car preview"
          class="w-full h-full object-cover"
        />
      </div>
    </div>

    <div class="w-full mt-10 p-6 bg-white rounded-2xl shadow-md">
      <h2 class="text-2xl font-bold mb-6 text-center text-gray-800">
        Car Gallery
      </h2>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
      >
        <img
          v-for="carImage in car?.images"
          :key="carImage.id"
          :src="carImage.url"
          alt="Car image"
          class="w-full h-48 object-cover rounded-xl transition-transform duration-300 hover:scale-105 shadow-sm"
        />
      </div>
    </div>
  </div>
</template>
