<script setup lang="ts">
const notifications = ref([
  {
    id: 1,
    message: "Your booking has been confirmed.",
    createdAt: "2023-11-19T10:00:00",
    booking: {
      bookingCode: "BK-7890",
    },
  },
  {
    id: 2,
    message: "Reminder: Your rental starts tomorrow.",
    createdAt: "2023-11-20T08:00:00",
    booking: {
      bookingCode: "BK-7890",
    },
  },
]);

const sortedNotifications = computed(() =>
  [...notifications.value].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )
);

const deleteNotification = (id: number) => {
  console.log(`Deleting notification ID: ${id}`);
  notifications.value = notifications.value.filter((n) => n.id !== id);
  alert("Mock: Notification deleted");
};
</script>

<template>
  <div
    class="flex flex-col justify-center items-center gap-4 w-1/2 min-h-[170px] border-l-2 border-gray-200 pl-4"
  >
    <Toast />

    <div
      v-if="notifications.length > 0"
      v-for="notification in sortedNotifications"
      :key="notification.booking.bookingCode + notification.createdAt"
      class="w-full bg-white rounded-xl border border-gray-300 shadow-md px-4 py-3 hover:shadow-lg transition-all duration-300"
    >
      <div class="flex justify-between items-start gap-4">
        <div class="flex flex-col gap-1">
          <p class="text-[16px] font-semibold text-gray-800">
            Message for booking:
            <span class="text-blue-700">{{
              notification.booking.bookingCode
            }}</span>
          </p>
          <p class="text-[15px] text-gray-700">{{ notification.message }}</p>
        </div>

        <div class="flex flex-col items-end gap-1">
          <span class="text-[13px] text-gray-500 whitespace-nowrap">
            {{
              new Date(notification.createdAt).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })
            }}
          </span>
          <button
            @click="deleteNotification(notification.id)"
            class="text-red-500 hover:text-red-700 transition cursor-pointer"
            title="Delete message"
          >
            <i class="pi pi-trash" style="font-size: 1rem"></i>
          </button>
        </div>
      </div>
    </div>

    <h2 v-else class="text-[22px] text-gray-600 font-medium mt-6">
      You have no notifications
    </h2>
  </div>
</template>
