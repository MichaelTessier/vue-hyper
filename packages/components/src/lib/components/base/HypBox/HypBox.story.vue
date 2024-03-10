<script lang="ts" setup>
  import type { Controls } from '@/histoire/ControlsProvider/types'
  import HypBox from './HypBox.vue'

  const controls: Record<string, Controls> = reactive({
    elevation: {
      model: BOX_ELEVATION[0],
      type: 'select',
      title: 'Elevation',
      options: BOX_ELEVATIONS,
    },
  })
</script>

<template>
  <Story
    :layout="{ type: 'grid', width: '100%' }"
    group="components"
    title="Base/HypBox"
  >
    <template #controls>
      <ControlsTheme />
      <ControlsProvider :controls="controls" />
    </template>

    <Variant
      title="Playground"
      auto-props-disabled
    >
      <div class="p-4">
        <HypBox :elevation="controls.elevation.model">
          {{ controls.elevation.model }}
        </HypBox>
      </div>
    </Variant>
  </Story>
</template>
