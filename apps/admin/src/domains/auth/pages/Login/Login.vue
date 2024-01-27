<script setup lang="ts">
  const authStore = useAuthStore()
  const router = useRouter()
  const { login, errorMessage } = useAuth()

  const form = reactive({
    email: '',
    password: '',
  })

  const submit = async () => {
    const user = await login(form.email, form.password)

    if (!user) return

    authStore.$patch({ user })
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
      @submit.prevent="submit"
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
