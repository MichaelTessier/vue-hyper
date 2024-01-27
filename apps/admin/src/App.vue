<script lang="ts" setup>
  const { getUser } = useAuth()
  const authStore = useAuthStore()
  const router = useRouter()
  const isReady = ref(false)

  onMounted(async () => {
    const user = await getUser()
    if (user) {
      authStore.$patch({ user })
    } else {
      router.push({ name: AUTH_ROUTES.LOGIN })
    }

    isReady.value = true
  })
</script>

<template>
  <RouterView v-if="isReady" />
</template>
