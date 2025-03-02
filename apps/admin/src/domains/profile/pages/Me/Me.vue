<script setup lang="ts">
  import { HypBox } from 'vue-hyper-components';
import { useGetProfileQuery } from './Me.generated'

  const authStore = useAuthStore()

  const { data } = useGetProfileQuery({
    variables: computed(() => ({
      id: authStore.user?.id || '',
    })),
  })

  const profile = computed(() => data?.value?.profileCollection?.edges[0].node)
</script>

<template>
  <PageLayout :title="$t('profile.me.title')">
    <template #head>
      <div>Edit</div>
    </template>
    <template #content>
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-4 flex flex-col gap-4">
          <MeCard :profile="profile"  v-if="profile"/>


          <HypBox padding="large">
            messages
          </HypBox>
        </div>

        <div class="col-span-8">
          <HypBox padding="large">
            Settings
          </HypBox>



          </div>

      </div>
    </template>
  </PageLayout>
</template>
