<script lang="ts" setup>
  import { Controls } from '@/histoire/ControlsProvider/types'

  const controls: Record<string, Controls> = reactive({
    label: {
      model: 'Label',
      type: 'text',
      title: 'Label',
    },
    variant: {
      model: BUTTON_VARIANT.PRIMARY,
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
  })
</script>

<template>
  <Story :layout="{ type: 'grid', width: '100%' }">

    <template #controls>
      <ControlsProvider
        :controls="controls"
        v-model="controls"
      />
    </template>

    <Variant
      title="Playground"
      auto-props-disabled
    >
      <HypButton
        :label="controls.label.model"
        :variant="controls.variant.model"
        :radius="controls.radius.model"
        :disabled="controls.disabled.model"
        :outline="controls.outline.model"
      />
    </Variant>

    <Variant
      title="Variants"
      auto-props-disabled
    >
      <div class="gap-4 flex">
        <HypButton
          v-for="variant in BUTTON_VARIANTS"
          :key="variant"
          :label="variant"
          :variant="variant"
        />
      </div>
    </Variant>

    <Variant
      title="Outline"
      auto-props-disabled
    >
      <div class="gap-4 flex">
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
      <div class="gap-4 flex mb-4">
        <HypButton
          v-for="variant in BUTTON_VARIANTS"
          :key="variant"
          :label="variant"
          :variant="variant"
          disabled
        />
      </div>

      <div class="gap-4 flex">
        <HypButton
          v-for="variant in BUTTON_VARIANTS"
          :key="variant"
          :label="variant"
          :variant="variant"
          disabled
          outlined
        />
      </div>
    </Variant>

    <Variant
      title="Radius"
      auto-props-disabled
    >
      <div class="gap-4 flex">
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
      <div class="gap-4 flex">
        <HypButton
          :label="'Full Button'"
          full
        />
      </div>
    </Variant>

  </Story>
</template>
