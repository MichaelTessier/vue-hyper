<script setup lang="ts">
  const { resendEmailConfirmation, errorMessage } = useAuth()
  const authStore = useAuthStore()
  const { resolveRoute } = useHost()

  const isResend = ref(false)

  const resend = async () => {
    if (!authStore.user?.email) return

    isResend.value = await resendEmailConfirmation(
      authStore.user.email,
      resolveRoute(AUTH_ROUTES.REGISTER_CONFIRMED)
    )
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
