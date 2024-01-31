<script lang="ts" setup>
  import type { Controls } from '@/histoire/ControlsProvider/types'

  const controls: Record<string, Controls> = reactive({
    label: {
      model: 'Label',
      type: 'text',
      title: 'Label',
    },
    to: {
      model: 'home',
      type: 'text',
      title: 'To',
    },
    color: {
      model: LINK_COLOR.DARK,
      type: 'select',
      title: 'Color',
      options: LINK_COLORS,
    },
    size: {
      model: LINK_SIZE.MEDIUM,
      type: 'select',
      title: 'Size',
      options: LINK_SIZES,
    },
  })
</script>

<template>
  <Story :layout="{ type: 'grid', width: '100%' }">
    <template #controls>
      <ControlsProvider :controls="controls" />
    </template>

    <Variant
      title="Playground"
      auto-props-disabled
    >
      <HypLink
        :color="controls.color.model"
        :to="controls.to.model"
        :size="controls.size.model"
      >
        {{ controls.label.model }}
      </HypLink>
    </Variant>
  </Story>
</template>
