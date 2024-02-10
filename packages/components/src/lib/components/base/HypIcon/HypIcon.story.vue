<script lang="ts" setup>
  import type { Controls } from '@/histoire/ControlsProvider/types'

  const controls: Record<string, Controls> = reactive({
    label: {
      model: 'Label',
      type: 'text',
      title: 'Label',
    },
    size: {
      model: ICON_SIZE.MEDIUM,
      type: 'select',
      title: 'Size',
      options: ICON_SIZES,
    },
    color: {
      model: ICON_COLOR_DEFAULT,
      type: 'select',
      title: 'Color',
      options: ICON_COLORS,
    },
  })
</script>

<template>
  <Story
    :layout="{ type: 'grid', width: '100%' }"
    group="components"
    title="Base/HypIcon"
  >
    <template #controls>
      <ControlsProvider :controls="controls" />
    </template>

    <Variant
      title="Playground"
      auto-props-disabled
    >
      <div
        class="container m-auto grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
      >
        <div
          v-for="iconName in ICON_NAMES"
          :key="iconName"
        >
          <div
            class="flex flex-col items-center justify-center p-4 border-1 rounded-medium"
          >
            <HypIcon
              :name="iconName"
              :size="controls.size.model"
              :color="controls.color.model"
            />
          </div>

          <p class="text-center">{{ iconName }}</p>
        </div>
      </div>
    </Variant>
  </Story>
</template>
