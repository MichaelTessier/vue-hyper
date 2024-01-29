<script lang="ts" setup>
  const { getUser } = useAuth()
  const router = useRouter()
  const isReady = ref(false)

  onMounted(async () => {
    const user = await getUser()
    if (!user) {
      router.push({ name: AUTH_ROUTES.LOGIN })
    }

    isReady.value = true
  })
</script>

<template>
  <RouterView v-if="isReady" />
</template>
