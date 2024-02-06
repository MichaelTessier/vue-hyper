<script setup lang="ts">
  defineProps({
    token: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
  })
</script>

<template>
  <div>
    <div
      class="w-32 h-32 rounded-xl"
      :style="{
        backgroundColor: value,
      }"
    />

    <HypTypo type="text-small">{{ token }}</HypTypo>
    <HypTypo type="text-small">{{ value }}</HypTypo>
  </div>
</template>
