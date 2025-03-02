<script lang="ts" setup>
  import type { Controls } from '@/histoire/ControlsProvider/types'
  import HypBox from './HypBox.vue'

  const controls: Record<string, Controls> = reactive({
    elevation: {
      model: BOX_ELEVATION_DEFAULT,
      type: 'select',
      title: 'Elevation',
      options: BOX_ELEVATIONS,
    },
    padding: {
      model: BOX_PADDING_DEFAULT,
      type: 'select',
      title: 'Padding',
      options: BOX_PADDINGS,
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
        <HypBox
          :elevation="controls.elevation.model"
          :padding="controls.padding.model"
        >
          some content
        </HypBox>
      </div>
    </Variant>
  </Story>
</template>
