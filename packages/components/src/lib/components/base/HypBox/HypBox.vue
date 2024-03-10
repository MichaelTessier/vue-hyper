<script setup lang="ts">
  import type { BaseSize } from './HypBox.model'

  defineProps({
    elevation: {
      type: String as PropType<BaseSize>,
      default: BOX_ELEVATION[0],
    },
  })
</script>

<template>
  <div
    class="bg-white shadow rounded p-4"
    :class="{
      'shadow-none': elevation === BOX_ELEVATION[0],
      'shadow-lg': elevation === BOX_ELEVATION[1],
      'shadow-xl': elevation === BOX_ELEVATION[2],
    }"
  >
    <slot />
  </div>
</template>
