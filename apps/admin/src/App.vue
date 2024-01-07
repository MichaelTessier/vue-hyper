<template>
  <GlobalLayout>
    <template #header>
      <Header />
    </template>

    <template #aside>
      <Aside />
    </template>

    <template #content>
      <RouterView />
    </template>
  </GlobalLayout>
</template>
