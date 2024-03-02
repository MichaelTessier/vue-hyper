<script lang="ts" setup>
  import { theme } from '@/config/unocss/theme'
</script>

<template>
  <Story
    group="design-tokens"
    title="Colors"
    responsive-disabled
  >
    <template #controls>
      <ControlsTheme />
    </template>
    <Variant title="Base">
      <TokenColorList :tokens="theme.colors" />
    </Variant>

    <Variant title="Text">
      <TokenColorList :tokens="theme.textColors" />
    </Variant>

    <Variant title="Background">
      <TokenColorList :tokens="theme.backgroundColors" />
    </Variant>

    <Variant title="Border">
      <TokenColorList :tokens="theme.borderColors" />
    </Variant>
  </Story>
</template>
