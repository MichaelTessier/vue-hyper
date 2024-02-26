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

  const { copyToClipboard } = useCopyToClipboard()
</script>

<template>
  <div>
    <div
      class="w-32 h-32 rounded-xl"
      :style="{
        backgroundColor: value,
      }"
    />

    <HypTypo
      class="mb-1"
      type="text-small"
    >
      {{ token }}
    </HypTypo>
    <div class="flex items-center">
      <HypIcon
        class="mr-1"
        name="checkbox-multiple-blank-outline"
        size="small"
        @click="copyToClipboard(value)"
      />
      <HypTypo type="text-small">
        {{ value }}
      </HypTypo>
    </div>
  </div>
</template>
