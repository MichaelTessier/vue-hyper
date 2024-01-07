<script setup lang="ts">
  const { t } = useI18n()
  const { isClassicLayout, isCompactLayout, isModernLayout } = useTheme()

  const navigationItems = computed(() => [
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
  ])
</script>

<template>
  <aside
    data-test="aside"
    class="h-full"
    :class="{
      'p-8 bg-dark min-w-[240px]': isClassicLayout,
      'p-5 bg-dark': isCompactLayout,
      'p-6 bg-white shadow-xl min-w-[200px] rounded': isModernLayout,
    }"
  >
    <div
      data-test="aside__container"
      :class="{
        container: isCompactLayout,
      }"
    >
      <div
        class="mb-6 text-center"
        v-if="isClassicLayout"
      >
        <Logo />
      </div>
      <ul
        data-test="aside__navigation"
        :class="{
          'flex gap-4': isCompactLayout,
        }"
      >
        <li
          :data-test="`aside__navigation_item-${$index}`"
          v-for="(navigationItem, $index) in navigationItems"
          :key="navigationItem.label"
          :class="{
            'color-dark': isModernLayout,
            'mb-3': !isCompactLayout,
          }"
        >
          <HypLink
            :to="{ name: navigationItem.routeName }"
            :color="isModernLayout ? 'dark' : 'light'"
          >
            {{ navigationItem.label }}
          </HypLink>
        </li>
      </ul>
    </div>
  </aside>
</template>
