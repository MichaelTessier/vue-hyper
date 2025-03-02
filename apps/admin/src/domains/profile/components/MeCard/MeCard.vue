<script setup lang="ts">
  import type { ProfileFragmentFragment } from '@/graphql/__generated__/graphql'

  import type { IconName } from 'vue-hyper-components'

  interface Props {
    profile?: ProfileFragmentFragment
  }

  const props = defineProps<Props>()

  interface SocialItem {
    name: string
    icon: IconName
    href?: string
  }

  const socialItems = computed<SocialItem[]>(() => {
    return [
      {
        name: 'email',
        icon: 'email-outline',
        href: props.profile?.email ?? '',
      },
      {
        name: 'linkedin',
        icon: 'linkedin',
        href: props.profile?.linkedin ?? '',
      },
      {
        name: 'facebook',
        icon: 'facebook',
        href: props.profile?.facebook ?? '',
      },
    ]
  })

  const socialItemsFiltered = computed(() => {
    return socialItems.value.filter((item) => item.href)
  })
</script>

<template>
  <HypBox padding="large">
    <div class="text-center mb-8">
      <!-- <p>{{ profile?.avatar_url }}</p> -->

      <HypTypo
        type="heading-medium"
        class="mb-4"
      >
        {{ profile?.first_name }} {{ profile?.last_name }}
      </HypTypo>
      <HypTypo type="text-small">{{ profile?.about }}</HypTypo>
    </div>

    <div class="flex items-center justify-center gap-4">
      <HypLink
        v-for="(item, index) in socialItemsFiltered"
        :key="index"
        :href="item.href"
      >
        <HypIcon
          :name="item.icon"
          size="medium"
          color="secondary"
        />
      </HypLink>
    </div>
  </HypBox>
</template>
