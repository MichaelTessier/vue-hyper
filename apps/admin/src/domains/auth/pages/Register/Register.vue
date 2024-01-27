<script setup lang="ts">
  const router = useRouter()
  const { host } = useHost()
  const authStore = useAuthStore()
  const { register, errorMessage } = useAuth()

  const form = reactive({
    email: '',
    password: '',
  })

  const emailRedirectTo = computed(() => {
    const href = router.resolve({ name: AUTH_ROUTES.REGISTER_CONFIRMED }).href

    return `${host.value}${href}`
  })

  const submit = async () => {
    const user = await register(
      form.email,
      form.password,
      emailRedirectTo.value
    )

    if (!user) return
    authStore.$patch({ user })

    router.push({ name: AUTH_ROUTES.VERIFY_EMAIL })
  }
</script>

<template>
  <section
    class="text-center min-w-[440px]"
    data-test="register"
  >
    <HypTypo
      class="mb-10"
      type="display-heading-small"
      data-test="register__title"
    >
      {{ $t('auth.register.title') }}
    </HypTypo>

    <form
      @submit.prevent="submit"
      class="mb-4"
      data-test="register__form"
    >
      <HypInput
        data-test="register__email"
        class="mb-6"
        v-model="form.email"
        :placeholder="$t('auth.common.email.placeholder')"
      />

      <HypInput
        data-test="register__password"
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
        data-test="register__error"
      >
        {{ errorMessage }}
      </HypTypo>

      <HypButton
        data-test="register__submit"
        type="submit"
        variant="primary"
        class="w-full"
        :label="$t('auth.register.submit')"
      />
    </form>

    <div class="flex gap-6 justify-end">
      <HypLink
        data-test="register__login"
        :to="{ name: AUTH_ROUTES.LOGIN }"
        size="small"
      >
        {{ $t('auth.register.login') }}
      </HypLink>
    </div>
  </section>
</template>
