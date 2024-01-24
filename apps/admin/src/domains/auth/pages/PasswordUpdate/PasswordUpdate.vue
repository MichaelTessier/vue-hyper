<script setup lang="ts">
  import type { StatusCode } from '@/domains/auth/composables/useAuthError'

  const { supabase } = useSupabase()
  const { errorMessageByStatus } = useAuthError()

  const form = reactive({
    password: '',
  })

  const errorMessage = ref('')
  const isUpdate = ref(false)

  const resetPassword = async () => {
    try {
      const { data, error } = await supabase.auth.updateUser({
        password: form.password,
      })

      if (error) {
        errorMessage.value = errorMessageByStatus(error.status as StatusCode)

        return
      }

      if (data) {
        isUpdate.value = true
      }
    } catch {
      errorMessage.value = errorMessageByStatus(500)
    }
  }
</script>

<template>
  <section
    class="text-center min-w-[440px]"
    data-test="password-update"
  >
    <HypTypo
      class="mb-10"
      type="display-heading-small"
      data-test="password-update__title"
    >
      {{ $t('auth.passwordUpdate.title') }}
    </HypTypo>

    <div v-if="isUpdate">
      <HypTypo
        class="mb-6"
        color="success"
        data-test="password-update__success"
      >
        {{ $t('auth.passwordUpdate.success') }}
      </HypTypo>

      <HypButton
        data-test="password-update__login"
        :to="{ name: AUTH_ROUTES.LOGIN }"
        :label="$t('auth.registerConfirmed.toDashboard')"
      />
    </div>
    <form
      v-else
      @submit.prevent="resetPassword"
      class="mb-4"
      data-test="password-update__form"
    >
      <HypTypo
        class="mb-6"
        data-test="password-update__message"
      >
        {{ $t('auth.passwordUpdate.message') }}
      </HypTypo>
      <HypInput
        data-test="password-update__password"
        class="mb-6"
        v-model="form.password"
        :placeholder="$t('auth.common.password.placeholder')"
      />

      <HypTypo
        v-if="errorMessage"
        class="mb-6"
        color="error"
        data-test="password-update__error"
      >
        {{ errorMessage }}
      </HypTypo>

      <HypButton
        data-test="password-update__submit"
        type="submit"
        variant="primary"
        class="w-full"
        :label="$t('auth.passwordUpdate.submit')"
      />
    </form>
  </section>
</template>
