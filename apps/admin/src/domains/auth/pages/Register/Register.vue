<script setup lang="ts">
  import type { StatusCode } from '@/domains/auth/composables/useAuthError'

  const router = useRouter()
  const { supabase } = useSupabase()
  const { errorMessageByStatus } = useAuthError()
  const { host } = useHost()
  const authStore = useAuthStore()

  const form = reactive({
    email: '',
    password: '',
  })

  const errorMessage = ref('')

  const emailRedirectTo = computed(() => {
    const href = router.resolve({ name: AUTH_ROUTES.REGISTER_CONFIRMED }).href

    return `${host.value}${href}`
  })

  const register = async () => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: form.email,
        password: form.password,
        options: {
          emailRedirectTo: emailRedirectTo.value,
        },
      })

      if (error) {
        errorMessage.value = errorMessageByStatus(error.status as StatusCode)

        return
      }

      authStore.$patch({ user: data.user })

      router.push({ name: AUTH_ROUTES.VERIFY_EMAIL })
    } catch {
      errorMessage.value = errorMessageByStatus(500)
    }
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
      @submit.prevent="register"
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
