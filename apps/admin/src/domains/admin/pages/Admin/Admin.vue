<template>
  <AdminLayout>
    <template #header>
      <AdminHeader />
    </template>

    <template #aside>
      <AdminAside />
    </template>

    <template #content>
      <RouterView />
    </template>
  </AdminLayout>
</template>
