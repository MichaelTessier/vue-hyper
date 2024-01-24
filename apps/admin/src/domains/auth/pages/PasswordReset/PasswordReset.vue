<script setup lang="ts">
  import type { StatusCode } from '@/domains/auth/composables/useAuthError'

  const router = useRouter()
  const { supabase } = useSupabase()
  const { errorMessageByStatus } = useAuthError()
  const { host } = useHost()

  const form = reactive({
    email: '',
  })

  const errorMessage = ref('')
  const isSend = ref(false)

  const emailRedirectTo = computed(() => {
    const href = router.resolve({ name: AUTH_ROUTES.PASSWORD_UPDATE }).href

    return `${host.value}${href}`
  })

  const resetPassword = async () => {
    try {
      const { data, error } = await supabase.auth.resetPasswordForEmail(
        form.email,
        {
          redirectTo: emailRedirectTo.value,
        }
      )

      if (error) {
        errorMessage.value = errorMessageByStatus(error.status as StatusCode)

        return
      }

      if (data) {
        isSend.value = true
      }
    } catch {
      errorMessage.value = errorMessageByStatus(500)
    }
  }
</script>

<template>
  <section
    class="text-center min-w-[440px]"
    data-test="password-reset"
  >
    <HypTypo
      class="mb-10"
      type="display-heading-small"
      data-test="password-reset__title"
    >
      {{ $t('auth.passwordReset.title') }}
    </HypTypo>

    <form
      @submit.prevent="resetPassword"
      class="mb-4"
      data-test="password-reset__form"
    >
      <HypInput
        data-test="password-reset__email"
        class="mb-6"
        v-model="form.email"
        :placeholder="$t('auth.common.email.placeholder')"
      />

      <HypTypo
        v-if="errorMessage"
        class="mb-6"
        color="error"
        data-test="password-reset__error"
      >
        {{ errorMessage }}
      </HypTypo>

      <HypTypo
        v-if="isSend"
        class="mb-6"
        color="success"
        data-test="password-reset__success"
      >
        {{ $t('auth.passwordReset.success') }}
      </HypTypo>

      <HypButton
        data-test="password-reset__submit"
        type="submit"
        variant="primary"
        class="w-full"
        :label="$t('auth.passwordReset.submit')"
      />
    </form>

    <div class="flex gap-6 justify-end">
      <HypLink
        data-test="password-reset__login"
        :to="{ name: AUTH_ROUTES.LOGIN }"
        size="small"
      >
        {{ $t('auth.passwordReset.login') }}
      </HypLink>
    </div>
  </section>
</template>
