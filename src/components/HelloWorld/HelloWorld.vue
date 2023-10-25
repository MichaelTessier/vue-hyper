<script setup lang="ts">
  defineProps<{
    title: string
    text: string
  }>()
</script>

<template>
  <h1 data-test="hello-world__title">{{ title }}</h1>
  <p data-test="hello-world__text">{{ text }}</p>
</template>
