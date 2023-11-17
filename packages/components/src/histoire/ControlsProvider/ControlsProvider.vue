<script setup lang="ts">
  import { Controls, Type } from './types'

  const props = defineProps<{
    controls: Record<string, Controls>
  }>()

  const components: Record<Type[number], string> = {
    select: 'HstSelect',
    text: 'HstText',
    boolean: 'HstCheckbox',
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
    />
  </div>
</template>
