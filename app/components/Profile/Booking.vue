<script setup lang="ts">
const activeBookings = ref([
  {
    id: 1,
    bookingCode: "BK-7890",
    startDate: "2023-11-20",
    endDate: "2023-11-25",
    status: { name: "Confirmed" },
    car: {
      id: 101,
      brand: { name: "BMW" },
      model: "X5",
    },
  },
  {
    id: 2,
    bookingCode: "BK-1122",
    startDate: "2023-12-01",
    endDate: "2023-12-03",
    status: { name: "Cancelled" },
    car: {
      id: 102,
      brand: { name: "Audi" },
      model: "Q8",
    },
  },
]);

const cancelBooking = async (id: number) => {
  console.log(`Cancelling booking ID: ${id}`);
  alert("Mock: Booking cancelled successfully");
};
</script>

<template>
  <div
    class="flex flex-col justify-center items-center gap-4 w-1/2 min-h-[170px] border-l-2 border-gray-200 pl-4"
  >
    <Toast />

    <div
      v-if="activeBookings.length > 0"
      v-for="booking in activeBookings"
      :key="booking.id"
      class="w-full bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300"
    >
      <div class="flex justify-between items-center px-4 py-3 gap-4">
        <div>
          <NuxtLink
            :to="'/catalog/' + booking.car.id"
            class="text-[18px] font-bold text-[#1F2937] hover:underline"
          >
            {{ booking.car.brand.name + " " + booking.car.model }}
          </NuxtLink>
          <p class="text-[15px] text-green-700">
            Code: {{ booking.bookingCode }}
          </p>
        </div>

        <p class="text-[15px] text-gray-700 whitespace-nowrap">
          {{
            new Date(booking.startDate).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })
          }}
          —
          {{
            new Date(booking.endDate).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })
          }}
        </p>

        <span
          class="px-3 py-1 rounded-full text-sm font-semibold"
          :class="{
            'bg-yellow-100 text-yellow-800':
              booking.status.name === 'Confirmed',
            'bg-red-100 text-red-800': booking.status.name === 'Cancelled',
          }"
        >
          {{ booking.status.name }}
        </span>

        <Button
          v-if="booking.status.name !== 'Cancelled'"
          @click="cancelBooking(booking.id)"
          label="Cancel"
          severity="danger"
          size="small"
        />
      </div>
    </div>

    <h2 v-else class="text-[22px] text-gray-600 font-medium mt-6">
      You have no active bookings
    </h2>
  </div>
</template>
