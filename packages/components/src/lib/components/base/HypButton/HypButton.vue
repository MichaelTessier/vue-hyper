<script setup lang="ts">
  import { type RouteLocationRaw } from 'vue-router'
  import type {
    ButtonSize,
    ButtonVariant,
    ButtonRadius,
  } from './HypButton.model'

  const props = defineProps({
    label: {
      type: String,
      required: true,
    },
    variant: {
      type: String as PropType<ButtonVariant>,
      default: BUTTON_VARIANT_DEFAULT,
    },
    size: {
      type: String as PropType<ButtonSize>,
      default: BUTTON_SIZE.MEDIUM,
    },
    radius: {
      type: String as PropType<ButtonRadius>,
      default: BUTTON_RADIUS.SMALL,
    },
    to: {
      type: [String, Object] as PropType<RouteLocationRaw>,
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
      default: 'button',
    },
    shadow: {
      type: Boolean,
      default: false,
    },
  })

  const textColor = computed(() =>
    props.variant === COLOR.SECONDARY || props.variant === COLOR.LIGHT
      ? 'text-black'
      : 'text-white'
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
    class="border-0 no-underline inline-flex items-center justify-center"
    :class="{
      'hover:opacity-80': !disabled,
      'cursor-not-allowed opacity-50': disabled,
      'w-full': full,
      [`${textColor} bg-${variant}`]: !outline,
      [`border-${variant} border-1! bg-transparent text-${variant}`]: outline,
      [`rounded-${radius}`]: true,
      [`shadow-btn-${variant}`]: shadow,
      [`px-4 h-9 hyp-text-medium`]: size === BUTTON_SIZE.SMALL,
      [`px-5 h-11 hyp-text-medium`]: size === BUTTON_SIZE.MEDIUM,
      [`px-6 h-13 hyp-text-large`]: size === BUTTON_SIZE.LARGE,
    }"
    :disabled="disabled"
    :href="href"
    :to="to"
  >
    {{ label }}
  </component>
</template>
