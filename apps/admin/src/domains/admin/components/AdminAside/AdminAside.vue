<script setup lang="ts">
  const { t } = useI18n()
  const { isClassicLayout, isCompactLayout, isModernLayout } = useLayout()

  const navigationItems = computed(() => [
    {
      label: t('admin.navigation.dashboard'),
      routeName: ADMIN_ROUTES.DASHBOARD,
    },
  ])
</script>

<template>
  <aside
    data-test="admin-aside"
    class="h-full"
    :class="{
      'p-8 bg-dark min-w-[240px]': isClassicLayout,
      'p-5 bg-dark': isCompactLayout,
      'p-6 bg-white shadow-xl min-w-[200px] rounded': isModernLayout,
    }"
  >
    <div
      data-test="admin-aside__container"
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
        data-test="admin-aside__navigation"
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
