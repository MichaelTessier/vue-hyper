<script lang="ts" setup>
  import { theme } from '@/config/unocss/theme'
</script>

<template>
  <Story
    group="design-tokens"
    title="Colors"
    responsive-disabled
  >
    <Variant title="base">
      <TokenColorList :tokens="theme.colors" />
    </Variant>

    <Variant title="text">
      <TokenColorList :tokens="theme.textColors" />
    </Variant>

    <Variant title="background">
      <TokenColorList :tokens="theme.backgroundColors" />
    </Variant>

    <Variant title="border">
      <TokenColorList :tokens="theme.borderColors" />
    </Variant>
  </Story>
</template>
