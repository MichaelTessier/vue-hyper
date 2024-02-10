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
    showPassword: {
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

  const isPasswordVisible = ref(false)

  function togglePasswordVisibility() {
    isPasswordVisible.value = !isPasswordVisible.value
  }

  const typeProxy = computed(() => {
    if (props.type === INPUT_TYPE.PASSWORD && isPasswordVisible.value) {
      return INPUT_TYPE.TEXT
    }

    return props.type
  })
</script>

<template>
  <label
    :for="idProxy"
    class="block"
  >
    <HypTypo
      v-if="label"
      data-test="hyp-input__label"
      class="mb-2"
    >
      {{ label }}
    </HypTypo>
    <div class="group">
      <div
        class="flex items-stretch justify-between border-1 border-default rounded-small group-focus-within:outline-1 group-focus-within:outline group-focus-within:outline-secondary"
      >
        <input
          class="px-5 py-3 w-full outline-none bg-default text-default"
          :type="typeProxy"
          :id="idProxy"
          :placeholder="placeholder"
          v-model="modelValueProxy"
          :disabled="disabled"
          :readonly="readonly"
        />
        <div
          v-if="showPassword && type === INPUT_TYPE.PASSWORD"
          data-test="hyp-input__show-password"
          class="flex items-center px-3"
          @click="togglePasswordVisibility"
          @keydown.enter="togglePasswordVisibility"
          role="button"
          tabIndex="0"
        >
          <HypIcon
            data-test="hyp-input__show-password-icon"
            :name="isPasswordVisible ? 'eye-off-outline' : 'eye-outline'"
            size="small"
            color="secondary"
          />
        </div>
      </div>
    </div>
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
