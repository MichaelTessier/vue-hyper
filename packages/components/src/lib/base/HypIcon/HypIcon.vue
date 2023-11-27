<script setup lang="ts">
  import type { IconName, IconSize } from './HypIcon.model.ts'

  defineProps({
    name: {
      type: String as PropType<IconName>,
      required: true,
    },
    size: {
      type: String as PropType<IconSize>,
      default: ICON_SIZE.MEDIUM,
    },
  })
</script>

<template>
  <div
    :class="{
      [`i-mdi-${name}`]: true,
      [`text-9`]: size === ICON_SIZE.LARGE,
      [`text-7`]: size === ICON_SIZE.MEDIUM,
      [`text-5`]: size === ICON_SIZE.SMALL,
    }"
  />
</template>
