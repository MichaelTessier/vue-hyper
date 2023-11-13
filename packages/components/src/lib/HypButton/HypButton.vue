<template>
  <button class="p-3 bg-primary">{{ label }}</button>
</template>

<script setup lang="ts">
  import { type Variants } from '@/types/Variant'

  defineProps({
    label: {
      type: String,
      required: true,
    },
    variant: {
      type: String as PropType<Exclude<Variants, typeof VARIANT.DANGER>>,
      default: VARIANT.PRIMARY,
    },
  })
</script>
