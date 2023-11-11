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
      <RouterView />
    </template>
  </GlobalLayout>
</template>
