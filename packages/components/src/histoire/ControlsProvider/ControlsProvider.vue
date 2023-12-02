<script setup lang="ts">
  import type { Controls, Type } from './types'

  const props = defineProps<{
    controls: Record<string, Controls>
  }>()

  const components: Record<Type[number], string> = {
    select: 'HstSelect',
    text: 'HstText',
    boolean: 'HstCheckbox',
    number: 'HstNumber',
  }

  const internalControls = computed(() => props.controls)
</script>

<template>
  <div>
    <component
      v-for="(control, key) in controls"
      :key="key"
      v-model="internalControls[key].model"
      :is="components[control.type]"
      :title="control.title"
      :options="control.options"
      :steps="control.steps"
      :min="control.min"
      :max="control.max"
    />
  </div>
</template>
