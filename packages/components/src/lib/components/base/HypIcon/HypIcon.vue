<script setup lang="ts">
  import type { IconName, IconSize, IconColor } from './HypIcon.model.ts'

  defineProps({
    name: {
      type: String as PropType<IconName>,
      required: true,
    },
    size: {
      type: String as PropType<IconSize>,
      default: ICON_SIZE.MEDIUM,
    },
    color: {
      type: String as PropType<IconColor>,
      default: ICON_COLOR_DEFAULT,
    },
  })
</script>

<template>
  <div
    :class="{
      [`i-mdi-${name}`]: true,
      [`text-9`]: size === ICON_SIZE.LARGE,
      [`text-7`]: size === ICON_SIZE.MEDIUM,
      [`text-4`]: size === ICON_SIZE.SMALL,
      [`text-${color}`]: true,
    }"
  />
</template>
