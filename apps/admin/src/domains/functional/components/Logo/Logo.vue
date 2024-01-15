<script setup lang="ts">
  import logoLight from '@/assets/images/logo-light.png'
  import logoDark from '@/assets/images/logo-dark.png'

  defineProps<{
    dark?: boolean
  }>()
</script>

<template>
  <img
    :src="dark ? logoDark : logoLight"
    width="150"
    alt=""
  />
</template>
