<script setup lang="ts">
  import type { BaseSize } from './HypBase.model'

  defineProps({
    base: {
      type: String as PropType<BaseSize>,
      default: BASE_SIZE.MEDIUM,
    },
  })
</script>

<template>
  <div>HypBase, used for dev flow</div>
</template>
