<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <div class="flex gap-2">
      <RouterLink :to="{ name: ROUTES.HOME }"> Home </RouterLink>
      <RouterLink
        data-test="app__router-link-contact"
        :to="{ name: ROUTES.CONTACT }"
      >
        contact
      </RouterLink>
      <RouterLink
        data-test="app__router-link-contact"
        :to="{ name: ROUTES.SUPABASE_TEST }"
      >
        supabase
      </RouterLink>
      <LocaleSwitcher />
    </div>
    <RouterView />
  </div>
</template>

<script lang="ts" setup>
  import { ROUTES } from '@/router'
</script>
