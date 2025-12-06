<script setup lang="ts">
const user = ref({
  id: 1,
  roleId: 1,
  fullName: "Mock User",
});

const tab = ref("account");
</script>

<template>
  <div class="flex justify-center items-start my-20">
    <div class="flex flex-col gap-2 w-[50px] h-full mr-4">
      <div
        @click="tab = 'account'"
        :class="[
          'flex justify-center items-center w-[50px] h-[50px] rounded cursor-pointer',
          tab == 'account' ? 'bg-gray-300' : '',
        ]"
      >
        <i class="pi pi-user text-[2rem]!"></i>
      </div>
      <div v-if="user?.roleId === 1">
        <div
          @click="tab = 'bookings'"
          :class="[
            'flex justify-center items-center w-[50px] h-[50px] rounded cursor-pointer',
            tab == 'bookings' ? 'bg-gray-300' : '',
          ]"
        >
          <i class="pi pi-book text-[2rem]!"></i>
        </div>
        <div
          @click="tab = 'history'"
          :class="[
            'flex justify-center items-center w-[50px] h-[50px] rounded cursor-pointer',
            tab == 'history' ? 'bg-gray-300' : '',
          ]"
        >
          <i class="pi pi-history text-[2rem]!"></i>
        </div>

        <div
          @click="tab = 'notification'"
          :class="[
            'flex justify-center items-center w-[50px] h-[50px] rounded cursor-pointer',
            tab == 'notification' ? 'bg-gray-300' : '',
          ]"
        >
          <i class="pi pi-inbox text-[2rem]!"></i>
        </div>
      </div>
    </div>
    <ProfileUserData v-if="tab == 'account'" />
    <ProfileBooking v-if="tab == 'bookings'" />
    <ProfileHistory v-if="tab == 'history'" />
    <ProfileNotification v-if="tab == 'notification'" />
  </div>
</template>
