<script lang="ts" setup>
  import { useGetCountriesQuery } from './Country.generated'

  const { data } = useGetCountriesQuery({})
</script>

<template>
  <div data-test="supabase-test">SupabaseTest</div>

  <ul v-if="data?.countriesCollection">
    <li
      v-for="country in data.countriesCollection.edges"
      :key="country.node.id"
    >
      {{ country.node.name }}
    </li>
  </ul>
</template>
