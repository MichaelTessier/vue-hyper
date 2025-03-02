<script setup lang="ts">
  import type { RouteLocationRaw } from 'vue-router'
  import type { LinkColor, LinkSize } from './HypLink.model'

  type TargetValues = "_self" | "_blank" | "_parent" | "_top";

  const props = defineProps({
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
      default: LINK_SIZE_DEFAULT,
    },
    href:{
      type: String,
      default: ''
    },
    target: {
      type: String as PropType<TargetValues>,
      default: '_self'
    }
  })

  const tag = computed(() => {
    return props.to ? 'RouterLink' : 'a'
  })
</script>

<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    class="hover:underline underline-offset-4 cursor-pointer hover:opacity-80 transition-all"
    :class="[`text-${color}`, `hyp-text-${size}`]"
  >
    <slot />
  </component>
</template>
