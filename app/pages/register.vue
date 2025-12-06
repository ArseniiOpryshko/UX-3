<script setup lang="ts">
const username = ref("");
const email = ref("");
const phone = ref("");
const password = ref("");

const submit = async (e: Event) => {
  e.preventDefault();

  console.log("Registration attempt with:", {
    username: username.value,
    email: email.value,
    phone: phone.value,
    password: password.value,
  });

  alert(
    "Registration functionality is currently mocked. Check console for data."
  );
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
      <form @submit="submit" class="flex flex-col gap-3 w-full p-10">
        <h1 class="text-[24px] text-left font-bold mb-2">Register</h1>

        <IftaLabel>
          <InputText class="w-full" id="username" v-model="username" required />
          <label for="username">Username</label>
        </IftaLabel>

        <IftaLabel>
          <InputText
            class="w-full"
            id="email"
            type="email"
            v-model="email"
            required
          />
          <label for="email">Email</label>
        </IftaLabel>

        <IftaLabel>
          <InputText
            class="w-full"
            id="phone"
            v-model="phone"
            required
            mask="+999 999 999 999"
            placeholder="+421 900 123 456"
          />
          <label for="phone">Phone</label>
        </IftaLabel>

        <IftaLabel>
          <InputText
            class="w-full"
            id="password"
            type="password"
            v-model="password"
            :minlength="6"
            required
          />
          <label for="password">Password</label>
        </IftaLabel>

        <Button
          label="Register"
          class="w-full flex justify-center mt-2"
          type="submit"
          size="large"
        />
      </form>
    </div>
  </div>
</template>
