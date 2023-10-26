<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <div class="flex gap-2">
      <RouterLink :to="{ name: 'home' }">Home</RouterLink>
      <RouterLink :to="{ name: 'contact' }">Contact</RouterLink>
    </div>

    <HelloWorld
      title="Vue hyper"
      text="Hello world"
    />

    <RouterView />
  </div>
</template>
