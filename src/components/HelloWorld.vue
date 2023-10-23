<script setup lang="ts">
defineProps<{ 
  title: string,
  text: string
}>()

</script>

<template>
  <h1>{{ title }}</h1>
  <p>{{ text }}</p>
</template>
