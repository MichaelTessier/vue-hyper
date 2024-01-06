<script lang="ts" setup>
  const contextStore = useContextStore()
  const router = useRouter()
  const route = useRoute()

  const onChange = (locale: string) => {
    contextStore.setLocale(locale)

    router.push({
      name: route.name ?? '/',
      params: {
        locale: locale,
      },
    })
  }
</script>

<template>
  <div data-test="locale-switcher">
    <label for="switcher-locale">
      <select
        data-test="locale-switcher__select"
        v-model="$i18n.locale"
        id="switcher-locale"
        @update:model-value="onChange"
      >
        <option
          v-for="(locale, index) in $i18n.availableLocales"
          :data-test="`locale-switcher__${index}`"
          :key="`locale-${locale}`"
          :value="locale"
        >
          {{ locale }}
        </option>
      </select>
    </label>
  </div>
</template>
