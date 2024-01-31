<script setup lang="ts">
  const router = useRouter()
  const { logout } = useAuth()

  const onClick = async () => {
    await logout()

    router.push({ name: AUTH_ROUTES.LOGIN })
  }
</script>

<template>
  <HypLink
    color="light"
    @click="onClick"
  >
    {{ $t('auth.logout.label') }}
  </HypLink>
</template>
