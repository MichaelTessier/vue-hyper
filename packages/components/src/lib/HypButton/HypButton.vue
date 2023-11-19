<script setup lang="ts">
  import { type RouteLocationRaw } from 'vue-router'
  import type { ButtonSizes, ButtonVariants, ButtonRadiuses } from './HypButton.model';

  const props = defineProps({
    label: {
      type: String,
      required: true,
    },
    variant: {
      type: String as PropType<ButtonVariants>,
      default: BUTTON_VARIANT.PRIMARY,
    },
    size: {
      type: String as PropType<ButtonSizes>,
      default: BUTTON_SIZE.SMALL,
    },
    radius: {
      type: String as PropType<ButtonRadiuses>,
      default: BUTTON_RADIUS.SMALL,
    },
    to: {
      type: String as PropType<RouteLocationRaw>,
      default: '',
    },
    href: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    outline: {
      type: Boolean,
      default: false,
    },
    full: {
      type: Boolean,
      default: false,
    },
    tag: {
      type: String,
      default: 'button'
    },
  })

  const textColor = computed(() =>
    props.variant === BUTTON_VARIANT.LIGHT ? 'text-black' : 'text-white'
  )

  const textOutlineColor = computed(() =>
    props.outline ? `text-${props.variant}` : 'black'
  )

  const buttonTag = computed(() => {
    if (props.to) {
      return 'router-link'
    }

    if (props.href) {
      return 'a'
    }

    return props.tag
  })

</script>

<template>
  <component
    :is="buttonTag"
    class="p-3 border-0 no-underline btn-primary"
    :class="{
      'cursor-not-allowed opacity-50': disabled,
      'w-full': full,
      [textColor]: !outline,
      [textOutlineColor]: outline,
      [`bg-${variant}`]: !outline,
      [`rounded-${radius}`]: true,
      [`border-${variant} border-1! bg-white`]: outline,
    }"
    :disabled="disabled"
    :href="href"
    :to="to"
  >
    {{ label }}
  </component>
</template>
