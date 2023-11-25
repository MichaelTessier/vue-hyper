<template>
  <component
    :is="tag"
    :class="[
      `hyp-${type}`,
      `font-${weight}`,
      {
        'line-through': strike,
      },
    ]"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
  import { TypoTypes, TypoWeights } from './HypTypo.model'

  defineProps({
    tag: {
      type: String,
      default: TYPO_TAG_DEFAULT,
    },
    type: {
      type: String as PropType<TypoTypes>,
      default: TYPO_TYPE.TEXT_MEDIUM,
    },
    weight: {
      type: String as PropType<TypoWeights>,
      default: TYPO_WEIGHT.REGULAR,
    },
    strike: {
      type: Boolean,
      default: false,
    },
  })
</script>
