<script setup lang="ts">
  defineProps({
    tokens: {
      type: Object as PropType<Record<string, string>>,
      required: true,
    },
  })
</script>

<template>
  <div class="grid grid-auto-128 gap-4">
    <TokenColor
      v-for="(value, token) in tokens"
      :key="token"
      :token="token"
      :value="value"
    />
  </div>
</template>
