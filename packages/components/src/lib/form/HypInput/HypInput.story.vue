<script lang="ts" setup>
  import { Controls } from '@/histoire/ControlsProvider/types'

  const controls: Record<string, Controls> = reactive({
    id: {
      type: 'text',
      model: '',
      title: 'Id',
    },
    label: {
      type: 'text',
      model: 'Label',
      title: 'Label',
    },
    hint: {
      type: 'text',
      model: 'A block of help text.',
      title: 'Hint',
    },
    value: {
      type: 'text',
      model: '',
      title: 'Value (v-model)',
    },
    placeholder: {
      type: 'text',
      model: 'Enter a value',
      title: 'Placeholder',
    },
    type: {
      type: 'select',
      model: INPUT_TYPE.TEXT,
      title: 'Type',
      options: INPUT_TYPES,
    },
    disabled: {
      type: 'boolean',
      model: false,
      title: 'Disabled',
    },
    readonly: {
      type: 'boolean',
      model: false,
      title: 'Readonly',
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
      <div class="p-4">
        <HypInput
          v-model="controls.value.model"
          :placeholder="controls.placeholder.model"
          :type="controls.type.model"
          :label="controls.label.model"
          :hint="controls.hint.model"
          :disabled="controls.disabled.model"
          :readonly="controls.readonly.model"
        />
      </div>
    </Variant>
  </Story>
</template>
