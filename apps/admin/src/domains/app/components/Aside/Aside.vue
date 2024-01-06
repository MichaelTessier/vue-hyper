<script setup lang="ts"></script>

<template>
  <div>
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
  </div>
</template>
