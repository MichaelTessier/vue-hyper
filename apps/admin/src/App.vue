<template>
  <GlobalLayout>
    <template #header>
      <ThemeSchemeSwitcher />
      <ThemeVariantSwitcher />
      <ThemeLayoutSwitcher />
      <LocaleSwitcher />
    </template>

    <template #aside>
      <Aside />
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
