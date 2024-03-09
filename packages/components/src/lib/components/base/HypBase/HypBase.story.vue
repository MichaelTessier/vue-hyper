<script lang="ts" setup>
  import type { Controls } from '@/histoire/ControlsProvider/types'
  import HypBase from './HypBase.vue'

  const controls: Record<string, Controls> = reactive({
    base: {
      model: 'Base',
      type: 'text',
      title: 'Label',
    },
  })
</script>

<template>
  <Story
    :layout="{ type: 'grid', width: '100%' }"
    group="components"
    title="Base/HypBase"
  >
    <template #controls>
      <ControlsTheme />
      <ControlsProvider :controls="controls" />
    </template>

    <Variant
      title="Playground"
      auto-props-disabled
    >
      <HypBase :base="controls.base.model">
        {{ controls.base.model }}
      </HypBase>
    </Variant>
  </Story>
</template>
