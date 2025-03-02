<script setup lang="ts">
  interface Props {
    title: string
  }

  defineProps<Props>()
</script>

<template>
  <section class="h-full">
    <div class="flex justify-between mb-5">
      <HypTypo type="heading-small">{{ title }}</HypTypo>
      <slot name="head" />
    </div>
    <slot name="content" />
  </section>
</template>
