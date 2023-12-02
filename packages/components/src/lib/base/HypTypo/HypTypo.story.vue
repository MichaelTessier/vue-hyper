<script lang="ts" setup>
  import type { Controls } from '@/histoire/ControlsProvider/types'

  const controls: Record<string, Controls> = reactive({
    label: {
      model: 'Label',
      type: 'text',
      title: 'Label',
    },
    tag: {
      model: TYPO_TAG_DEFAULT,
      type: 'text',
      title: 'p',
    },
    type: {
      model: TYPO_TYPE.TEXT_MEDIUM,
      type: 'select',
      title: 'Type',
      options: TYPO_TYPES,
    },
    weight: {
      model: TYPO_WEIGHT.REGULAR,
      type: 'select',
      title: 'Weight',
      options: TYPO_WEIGHTS,
    },
    strike: {
      model: false,
      type: 'boolean',
      title: 'Strike',
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
      <HypTypo
        :tag="controls.tag.model"
        :type="controls.type.model"
        :weight="controls.weight.model"
        :strike="controls.strike.model"
      >
        {{ controls.label.model }}
      </HypTypo>
    </Variant>

    <Variant
      title="Types"
      auto-props-disabled
    >
      <HypTypo
        v-for="typoType in TYPO_TYPES"
        :key="typoType"
        :type="typoType"
        class="mb-4"
      >
        {{ typoType.replace(/-/g, ' ') }}
      </HypTypo>
    </Variant>
  </Story>
</template>
