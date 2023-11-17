<template>
  <GlobalLayout>
    <template #header>
      <LocaleSwitcher />
      <ThemeSchemeSwitcher />
      <ThemeVariantSwitcher />
      <ThemeLayoutSwitcher />
    </template>

    <template #aside>
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
    </template>

    <template #content>
      <div class="p-5">

      <HypButton
        label="CONTACT"
        variant="primary"
        :to="{ name: ROUTES.CONTACT }"
      />

      <HypButton
        label="test"
        variant="primary"
        href="http://google.fr"
        target="_blank"
      />
    </div>

      <RouterView />
    </template>
  </GlobalLayout>
</template>

<script lang="ts" setup>
import LocaleSwitcher from '@/components/LocaleSwitcher/LocaleSwitcher.vue'
</script>
