<script setup lang="ts">
  import type { StatusCode } from '../../composables/useAuthError'

  const { supabase } = useSupabase()
  const authStore = useAuthStore()
  const router = useRouter()
  const { host } = useHost()

  const { errorMessageByStatus } = useAuthError()

  const errorMessage = ref('')
  const isResend = ref(false)

  const emailRedirectTo = computed(() => {
    const href = router.resolve({ name: AUTH_ROUTES.REGISTER_CONFIRMED }).href

    return `${host.value}${href}`
  })

  const resend = async () => {
    try {
      const { data, error } = await supabase.auth.resend({
        type: 'signup',
        email: authStore.user?.email ?? '',
        options: {
          emailRedirectTo: emailRedirectTo.value,
        },
      })

      if (error) {
        errorMessage.value = errorMessageByStatus(error.status as StatusCode)

        return
      }

      if (data) {
        isResend.value = true
      }
    } catch {
      errorMessage.value = errorMessageByStatus(500)
    }
  }
</script>

<template>
  <section class="text-center min-w-[440px]">
    <HypTypo
      class="mb-10"
      type="display-heading-small"
      data-test="verify-email__title"
    >
      {{ $t('auth.verifyEmail.title') }}
    </HypTypo>

    <HypTypo
      class="mb-10"
      data-test="verify-email__message"
    >
      {{ $t('auth.verifyEmail.message') }}
    </HypTypo>

    <HypTypo
      v-if="errorMessage"
      class="mb-6"
      color="error"
      data-test="verify-email__error"
    >
      {{ errorMessage }}
    </HypTypo>

    <HypTypo
      v-if="isResend"
      class="mb-6"
      color="error"
      data-test="verify-email__success"
    >
      {{ $t('auth.verifyEmail.success') }}
    </HypTypo>

    <HypButton
      data-test="verify-email__resend"
      @click="resend"
      :label="$t('auth.verifyEmail.resend.label')"
    />
  </section>
</template>
