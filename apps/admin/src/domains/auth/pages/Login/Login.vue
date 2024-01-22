<script setup lang="ts">
  import type { StatusCode } from '@/domains/auth/composables/useAuthError'

  const { supabase } = useSupabase()
  const { errorMessageByStatus } = useAuthError()
  const authStore = useAuthStore()
  const router = useRouter()

  const form = reactive({
    email: '',
    password: '',
  })

  const errorMessage = ref('')

  const login = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    })

    if (error) {
      errorMessage.value = errorMessageByStatus(error.status as StatusCode)

      return
    }

    authStore.$patch({ user: data.user })

    router.push({ name: ADMIN_ROUTES.DASHBOARD })
  }
</script>

<template>
  <section
    class="text-center min-w-[440px]"
    data-test="login"
  >
    <HypTypo
      class="mb-10"
      type="display-heading-small"
      data-test="login__title"
    >
      {{ $t('auth.login.title') }}
    </HypTypo>

    <form
      @submit.prevent="login"
      class="mb-4"
      data-test="login__form"
    >
      <HypInput
        data-test="login__email"
        class="mb-6"
        v-model="form.email"
        :placeholder="$t('auth.common.email.placeholder')"
      />

      <HypInput
        data-test="login__password"
        class="mb-6"
        v-model="form.password"
        type="password"
        :placeholder="$t('auth.common.password.placeholder')"
        show-password
      />

      <HypTypo
        v-if="errorMessage"
        class="mb-6"
        color="error"
        data-test="login__error"
      >
        {{ errorMessage }}
      </HypTypo>

      <HypButton
        data-test="login__submit"
        type="submit"
        variant="primary"
        class="w-full"
        :label="$t('auth.login.submit')"
      />
    </form>

    <div class="flex gap-6 justify-end">
      <HypLink
        data-test="login__register"
        :to="{ name: AUTH_ROUTES.REGISTER }"
        size="small"
      >
        {{ $t('auth.login.register') }}
      </HypLink>

      <HypLink
        data-test="login__password-reset"
        :to="{ name: AUTH_ROUTES.PASSWORD_RESET }"
        size="small"
      >
        {{ $t('auth.login.forgottenPassword') }}
      </HypLink>
    </div>
  </section>
</template>
