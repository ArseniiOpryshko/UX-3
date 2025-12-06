<script setup lang="ts">
const finishedBookings = ref([
  {
    id: 5,
    bookingCode: "BK-5544",
    brandName: "Mercedes-Benz",
    carModel: "E-Class",
    startDate: "2023-09-10",
    endDate: "2023-09-12",
    statusName: "Completed",
  },
  {
    id: 6,
    bookingCode: "BK-3311",
    brandName: "Toyota",
    carModel: "Camry",
    startDate: "2023-08-01",
    endDate: "2023-08-05",
    statusName: "Completed",
  },
]);
</script>

<template>
  <div
    class="flex flex-col justify-center items-center gap-4 w-1/2 min-h-[170px] border-l-2 border-gray-200 pl-4"
  >
    <div
      v-if="finishedBookings.length > 0"
      v-for="booking in finishedBookings"
      :key="booking.id"
      class="w-full bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300"
    >
      <div class="flex justify-between items-center px-4 py-3 gap-4">
        <div>
          <p class="text-[18px] font-bold text-[#1F2937]">
            {{ booking.brandName + " " + booking.carModel }}
          </p>
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
          class="px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800"
        >
          {{ booking.statusName }}
        </span>
      </div>
    </div>

    <h2 v-else class="text-[22px] text-gray-600 font-medium mt-6">
      You have no past bookings
    </h2>
  </div>
</template>
