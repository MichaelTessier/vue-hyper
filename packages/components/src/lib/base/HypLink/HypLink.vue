<script setup lang="ts">
  import type { RouteLocationRaw } from 'vue-router'
  import type { LinkColor } from './HypLink.model'

  defineProps({
    to: {
      type: [String, Object] as PropType<RouteLocationRaw>,
      default: '',
    },
    color: {
      type: String as PropType<LinkColor>,
      default: LINK_COLOR.DARK,
    },
  })
</script>

<template>
  <RouterLink
    :to="to"
    class="hyp-text-medium hover:underline underline-offset-4 cursor-pointer hover:opacity-80 transition-all"
    :class="[`text-${color}`]"
  >
    <slot />
  </RouterLink>
</template>
