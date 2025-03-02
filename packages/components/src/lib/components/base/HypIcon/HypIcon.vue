<script setup lang="ts">
  import type { IconName, IconSize, IconColor } from './HypIcon.model.ts'

  defineProps({
    name: {
      type: String as PropType<IconName>,
      required: true,
    },
    size: {
      type: String as PropType<IconSize>,
      default: ICON_SIZE_DEFAULT,
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
      [`text-9`]: size === SIZE.LARGE,
      [`text-7`]: size === SIZE.MEDIUM,
      [`text-4`]: size === SIZE.SMALL,
      [`text-${color}`]: true,
    }"
  />
</template>
