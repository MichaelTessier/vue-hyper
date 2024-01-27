<script lang="ts" setup>
  const TIME_TO_REDIRECT = 5000
  const { getUser, errorMessage } = useAuth()
  const authStore = useAuthStore()
  const router = useRouter()

  onMounted(async () => {
    const user = await getUser()

    if (user) {
      authStore.$patch({ user })

      setTimeout(() => {
        router.push({ name: ADMIN_ROUTES.ADMIN })
      }, TIME_TO_REDIRECT)
    }
  })
</script>

<template>
  <section
    class="text-center min-w-[440px]"
    data-test="register-confirmed"
  >
    <template v-if="errorMessage">
      <HypTypo
        class="mb-10"
        data-test="register-confirmed__error"
      >
        {{ errorMessage }}
      </HypTypo>
    </template>

    <template v-if="authStore.isAuthenticated">
      <HypTypo
        class="mb-10"
        type="display-heading-small"
        data-test="register-confirmed__title"
      >
        {{ $t('auth.registerConfirmed.title') }}
      </HypTypo>

      <HypTypo
        class="mb-10"
        data-test="register-confirmed__message"
      >
        {{ $t('auth.registerConfirmed.message') }}
      </HypTypo>

      <HypButton
        data-test="register-confirmed__to-dashboard"
        :to="{ name: ADMIN_ROUTES.ADMIN }"
        :label="$t('auth.registerConfirmed.toDashboard')"
      />
    </template>
  </section>
</template>
