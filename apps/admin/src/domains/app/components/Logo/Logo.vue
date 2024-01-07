<script setup lang="ts">
  defineProps<{
    dark?: boolean
  }>()
</script>

<template>
  <HypTypo
    type="heading-small"
    class="inline-block"
    :color="dark ? 'dark' : 'light'"
  >
    VUE HYPER
  </HypTypo>
</template>
