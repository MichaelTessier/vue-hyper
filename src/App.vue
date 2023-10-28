<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <div class="flex gap-2">
      <RouterLink :to="{ name: 'home' }"> Home </RouterLink>
      <RouterLink
        data-test="app__router-link-contact"
        to="/contact"
      >
        Contact</RouterLink
      >
    </div>

    <RouterView />
  </div>
</template>
