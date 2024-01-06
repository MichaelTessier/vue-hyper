<script setup lang="ts">
  const { t } = useI18n()

  const navigationItems = [
    {
      label: t('navigation.home'),
      routeName: ROUTES.HOME,
    },
    {
      label: t('navigation.contact'),
      routeName: ROUTES.CONTACT,
    },
    {
      label: t('navigation.test'),
      routeName: ROUTES.SUPABASE_TEST,
    },
  ]
</script>

<template>
  <section class="p-3">
    <Logo />
    <ul data-test="aside__navigation">
      <li
        :data-test="`aside__navigation_${$index}`"
        v-for="(navigationItem, $index) in navigationItems"
        :key="navigationItem.label"
      >
        <RouterLink :to="{ name: navigationItem.routeName }">
          {{ navigationItem.label }}
        </RouterLink>
      </li>
    </ul>
  </section>
</template>
