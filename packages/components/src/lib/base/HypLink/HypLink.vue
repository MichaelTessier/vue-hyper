<script setup lang="ts">
  import type { RouteLocationRaw } from 'vue-router'
  import type { LinkColor, LinkSize } from './HypLink.model'

  defineProps({
    to: {
      type: [String, Object] as PropType<RouteLocationRaw>,
      default: '',
    },
    color: {
      type: String as PropType<LinkColor>,
      default: LINK_COLOR_DEFAULT,
    },
    size: {
      type: String as PropType<LinkSize>,
      default: LINK_SIZE.MEDIUM,
    },
  })
</script>

<template>
  <RouterLink
    :to="to"
    class="hover:underline underline-offset-4 cursor-pointer hover:opacity-80 transition-all"
    :class="[`text-${color}`, `hyp-text-${size}`]"
  >
    <slot />
  </RouterLink>
</template>
