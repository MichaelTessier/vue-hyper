<template>
  <div data-test="supabase-test">SupabaseTest</div>

  <ul>
    <li
      v-for="country in countries"
      :key="country.id"
    >
      {{ country.name }}
    </li>
  </ul>
</template>

<script lang="ts" setup>
  import { Country } from '@/types/countries'

  const { supabase } = useSupabase()

  const countries = ref<Country[]>([])

  async function getCountries() {
    const { data } = await supabase.from('countries').select()

    if (!data) return []

    countries.value = data
  }

  onMounted(() => {
    getCountries()
  })
</script>
