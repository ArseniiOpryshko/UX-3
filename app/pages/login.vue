<script setup lang="ts">
const email = ref("");
const password = ref("");

const submit = async (e: Event) => {
  e.preventDefault();

  console.log("Login attempt with:", {
    email: email.value,
    password: password.value,
  });

  alert("Login functionality is currently mocked.");
};
</script>

<template>
  <div class="flex flex-row">
    <Toast />
    <div class="w-2/3">
      <div class="flex items-center justify-center h-screen">
        <div class="flex flex-col">
          <img
            class="w-full h-[100vh] object-cover object-center"
            src="~~/assets/images/catalog-preview.jpg"
            alt="Auteba logo"
          />
        </div>
      </div>
    </div>
    <div
      class="flex flex-col items-center justify-center h-screen w-1/3 mx-auto"
    >
      <form @submit="submit" class="flex flex-col gap-4 w-full p-10">
        <h1 class="text-[24px] font-bold mb-4">Login</h1>

        <IftaLabel>
          <InputText class="w-full" id="email" v-model="email" type="email" />
          <label for="email">Email</label>
        </IftaLabel>

        <IftaLabel>
          <InputText
            class="w-full"
            id="password"
            v-model="password"
            type="password"
          />
          <label for="password">Password</label>
        </IftaLabel>

        <Button
          label="Login"
          class="w-full flex justify-center mt-2"
          type="submit"
          size="large"
        />

        <NuxtLink
          to="/register"
          class="text-center text-blue-900 cursor-pointer"
          >Register</NuxtLink
        >
      </form>
    </div>
  </div>
</template>
