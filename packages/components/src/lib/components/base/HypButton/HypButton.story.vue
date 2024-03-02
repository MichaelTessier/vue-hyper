<script lang="ts" setup>
  import type { Controls } from '@/histoire/ControlsProvider/types'

  const controls: Record<string, Controls> = reactive({
    label: {
      model: 'Label',
      type: 'text',
      title: 'Label',
    },
    variant: {
      model: BUTTON_VARIANT_DEFAULT,
      type: 'select',
      title: 'Variant',
      options: BUTTON_VARIANTS,
    },
    radius: {
      model: BUTTON_RADIUS.SMALL,
      type: 'select',
      title: 'Radius',
      options: BUTTON_RADIUSES,
    },
    size: {
      model: BUTTON_SIZE.MEDIUM,
      type: 'select',
      title: 'Sizes',
      options: BUTTON_SIZES,
    },
    disabled: {
      model: false,
      type: 'boolean',
      title: 'Disabled',
    },
    outline: {
      model: false,
      type: 'boolean',
      title: 'Outline',
    },
    full: {
      model: false,
      type: 'boolean',
      title: 'Full',
    },
    shadow: {
      model: false,
      type: 'boolean',
      title: 'Shadow',
    },
  })
</script>

<template>
  <Story
    :layout="{ type: 'grid', width: '100%' }"
    group="components"
    title="Base/HypButton"
  >
    <template #controls>
      <ControlsTheme />
      <ControlsProvider :controls="controls" />
    </template>

    <Variant
      title="Playground"
      auto-props-disabled
    >
      <div class="p-4 flex">
        <HypButton
          :label="controls.label.model"
          :variant="controls.variant.model"
          :radius="controls.radius.model"
          :disabled="controls.disabled.model"
          :outline="controls.outline.model"
          :shadow="controls.shadow.model"
          :size="controls.size.model"
        />
      </div>
    </Variant>

    <Variant
      title="Variants"
      auto-props-disabled
    >
      <div class="gap-4 flex p-4">
        <HypButton
          v-for="variant in BUTTON_VARIANTS"
          :key="variant"
          :label="variant"
          :variant="variant"
        />
      </div>
    </Variant>

    <Variant
      title="Shadow"
      auto-props-disabled
    >
      <div class="gap-4 flex p-4">
        <HypButton
          v-for="variant in BUTTON_VARIANTS"
          :key="variant"
          :label="variant"
          :variant="variant"
          shadow
        />
      </div>
    </Variant>

    <Variant
      title="Outline"
      auto-props-disabled
    >
      <div class="gap-4 flex p-4">
        <HypButton
          v-for="variant in BUTTON_VARIANTS"
          :key="variant"
          :label="variant"
          :variant="variant"
          outline
        />
      </div>
    </Variant>

    <Variant
      title="Disabled"
      auto-props-disabled
    >
      <div class="gap-4 flex mb-4 p-4">
        <HypButton
          v-for="variant in BUTTON_VARIANTS"
          :key="variant"
          :label="variant"
          :variant="variant"
          disabled
        />
      </div>

      <div class="gap-4 flex p-4">
        <HypButton
          v-for="variant in BUTTON_VARIANTS"
          :key="variant"
          :label="variant"
          :variant="variant"
          disabled
          outline
        />
      </div>
    </Variant>

    <Variant
      title="Size"
      auto-props-disabled
    >
      <div class="gap-4 flex p-4 items-center">
        <HypButton
          v-for="size in BUTTON_SIZES"
          :key="size"
          :label="size"
          :size="size"
        />
      </div>
    </Variant>

    <Variant
      title="Radius"
      auto-props-disabled
    >
      <div class="gap-4 flex p-4">
        <HypButton
          v-for="radius in BUTTON_RADIUSES"
          :key="radius"
          :label="radius"
          :radius="radius"
        />
      </div>
    </Variant>

    <Variant
      title="Full"
      auto-props-disabled
    >
      <div class="gap-4 flex p-4">
        <HypButton
          :label="'Full Button'"
          full
        />
      </div>
    </Variant>
  </Story>
</template>
