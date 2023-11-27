<script setup lang="ts">
  import type { InputType } from './HypInput.model'
  import { uid } from '@/utils/uid'

  const props = defineProps({
    modelValue: {
      type: [String, Number],
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    type: {
      type: String as PropType<InputType>,
      default: INPUT_TYPE.TEXT,
    },
    id: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    hint: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
  })

  const emit = defineEmits<{
    'update:modelValue': [value: string | number]
  }>()

  const modelValueProxy = computed({
    get() {
      return props.modelValue
    },
    set(value: string | number) {
      emit('update:modelValue', value)
    },
  })

  const idProxy = computed(() => props.id || uid())
</script>

<template>
  <label :for="idProxy">
    <HypTypo
      v-if="label"
      data-test="hyp-input__label"
      class="mb-2"
    >
      {{ label }}
    </HypTypo>
    <input
      class="px-5 py-3 border-1 focus:outline-gray-200 rounded-small text-dark w-full"
      :type="type"
      :id="idProxy"
      :placeholder="placeholder"
      v-model="modelValueProxy"
      :disabled="disabled"
      :readonly="readonly"
    />
    <HypTypo
      v-if="hint"
      data-test="hyp-input__hint"
      class="mt-1"
      type="text-small"
    >
      {{ hint }}
    </HypTypo>
  </label>
</template>
