<script setup lang="ts">
  const form = reactive({
    password: '',
  })

  const isUpdate = ref(false)
  const { errorMessage, passwordUpdate } = useAuth()

  const submit = async () => {
    isUpdate.value = await passwordUpdate(form.password)
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
        :label="$t('auth.passwordUpdate.login')"
      />
    </div>
    <form
      v-else
      @submit.prevent="submit"
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
