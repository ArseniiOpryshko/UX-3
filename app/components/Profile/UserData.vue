<script setup lang="ts">
const fullName = ref("Arsenii Opryshko");
const email = ref("arsenii@example.com");
const phone = ref("+421 900 111 222");
const password = ref("");

const handleEdit = async () => {
  console.log("Updating profile with:", {
    userName: fullName.value,
    email: email.value,
    phone: phone.value,
    password: password.value,
  });

  alert("Mock: Data updated successfully.");
};

function logOut() {
  console.log("Logging out...");
  window.location.href = "/login";
}
</script>

<template>
  <div class="flex flex-col w-1/2 border-l-2 border-gray-200 pl-4">
    <Toast />

    <form @submit.prevent="handleEdit">
      <div class="flex gap-4 w-full">
        <div class="flex flex-col gap-4 w-1/2">
          <IftaLabel>
            <InputText
              class="w-full"
              id="fullName"
              v-model="fullName"
              required
            />
            <label for="fullName">Full name</label>
          </IftaLabel>

          <IftaLabel>
            <InputText class="w-full" id="email" v-model="email" required />
            <label for="email">Email</label>
          </IftaLabel>
        </div>

        <div class="flex flex-col w-1/2 gap-4">
          <IftaLabel>
            <InputText class="w-full" id="phone" v-model="phone" required />
            <label for="phone">Phone</label>
          </IftaLabel>

          <IftaLabel>
            <InputText
              type="password"
              class="w-full"
              id="password"
              v-model="password"
              placeholder="New password"
              minlength="6"
            />
            <label for="password">Password</label>
          </IftaLabel>
        </div>
      </div>

      <div class="w-full flex justify-end gap-5 mt-4">
        <Button label="Edit" severity="info" type="submit" />
        <Button
          @click="logOut"
          label="Log out"
          severity="danger"
          type="button"
        />
      </div>
    </form>
  </div>
</template>
