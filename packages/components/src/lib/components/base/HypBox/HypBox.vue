<script setup lang="ts">
  import type { BoxElevation, BoxPadding } from './HypBox.model'

  defineProps({
    elevation: {
      type: String as PropType<BoxElevation>,
      default: BOX_ELEVATION_DEFAULT,
    },
    tag: {
      type: String as PropType<keyof HTMLElementTagNameMap>,
      default: 'div',
    },
    padding: {
      type: String as PropType<BoxPadding>,
      default: BOX_PADDING_DEFAULT,
    },
  })
</script>

<template>
  <component
    :is="tag"
    class="rounded surface-default transition-shadow duration-300 ease-in-out border border-default"
    :class="{
      'shadow-sm': elevation === BOX_ELEVATION.NONE,
      'shadow-lg': elevation === BOX_ELEVATION.MEDIUM,
      'shadow-xl': elevation === BOX_ELEVATION.LARGE,
      'hover:shadow-lg': elevation === BOX_ELEVATION.NONE,
      'hover:shadow-xl': elevation === BOX_ELEVATION.MEDIUM,
      'hover:shadow-2xl': elevation === BOX_ELEVATION.LARGE,
      'p-0': padding === BOX_PADDING.NONE,
      'p-2': padding === BOX_PADDING.SMALL,
      'p-5': padding === BOX_PADDING.MEDIUM,
      'p-8': padding === BOX_PADDING.LARGE,
    }"
  >
    <slot />
  </component>
</template>
