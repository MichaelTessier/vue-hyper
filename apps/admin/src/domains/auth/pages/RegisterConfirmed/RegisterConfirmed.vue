<script lang="ts" setup>
  import type { StatusCode } from '../../composables/useAuthError'

  const TIME_TO_REDIRECT = 5000

  const { supabase } = useSupabase()
  const { errorMessageByStatus } = useAuthError()
  const authStore = useAuthStore()
  const router = useRouter()

  const errorMessage = ref('')

  onMounted(async () => {
    const { data, error } = await supabase.auth.getUser()

    if (error) {
      errorMessage.value = errorMessageByStatus(error.status as StatusCode)
    }

    if (data.user) {
      authStore.$patch({ user: data.user })

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
        @click="router.push({ name: ADMIN_ROUTES.ADMIN })"
      />
    </template>
  </section>
</template>
