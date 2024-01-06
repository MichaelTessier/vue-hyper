<script setup lang="ts">
  import type { TypoType, TypoWeight, TypoColor } from './HypTypo.model'

  defineProps({
    tag: {
      type: String,
      default: TYPO_TAG_DEFAULT,
    },
    color: {
      type: String as PropType<TypoColor>,
      default: TYPO_COLOR.DARK,
    },
    type: {
      type: String as PropType<TypoType>,
      default: TYPO_TYPE.TEXT_MEDIUM,
    },
    weight: {
      type: String as PropType<TypoWeight>,
      default: TYPO_WEIGHT.REGULAR,
    },
    strike: {
      type: Boolean,
      default: false,
    },
  })
</script>

<template>
  <component
    :is="tag"
    :class="[
      `hyp-${type}`,
      `font-${weight}`,
      `text-${color}`,
      {
        'line-through': strike,
      },
    ]"
  >
    <slot />
  </component>
</template>
