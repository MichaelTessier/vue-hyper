/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// noinspection JSUnusedGlobalSymbols
// Generated by unplugin-auto-import
export {}
declare global {
  const ADMIN_ROUTES: typeof import('./src/domains/admin/routes')['ADMIN_ROUTES']
  const AUTH_ROUTES: typeof import('./src/domains/auth/routes')['AUTH_ROUTES']
  const AVAILABLE_LOCALES: typeof import('./src/i18n/index')['AVAILABLE_LOCALES']
  const COLOR_SCHEME_STORAGE_KEY: typeof import('./src/domains/functional/composables/useTheme/useTheme')['COLOR_SCHEME_STORAGE_KEY']
  const CONTEXT_LOCALE_STORAGE_KEY: typeof import('./src/stores/context/context')['CONTEXT_LOCALE_STORAGE_KEY']
  const ColorScheme: typeof import('./src/domains/functional/composables/useTheme/useTheme')['ColorScheme']
  const DEFAULT_LOCALE: typeof import('./src/i18n/index')['DEFAULT_LOCALE']
  const EffectScope: typeof import('vue')['EffectScope']
  const FilterIs: typeof import('./src/graphql/__generated__/graphql')['FilterIs']
  const GetCountriesDocument: typeof import('./src/graphql/__generated__/graphql')['GetCountriesDocument']
  const LAYOUT_THEME_STORAGE_KEY: typeof import('./src/domains/functional/composables/useLayout/useLayout')['LAYOUT_THEME_STORAGE_KEY']
  const Layout: typeof import('./src/domains/functional/composables/useLayout/useLayout')['Layout']
  const LayoutTheme: typeof import('./src/domains/functional/composables/useTheme/useTheme')['LayoutTheme']
  const OrderByDirection: typeof import('./src/graphql/__generated__/graphql')['OrderByDirection']
  const ROUTES: typeof import('./src/router/index')['ROUTES']
  const VARIANT_THEME_STORAGE_KEY: typeof import('./src/domains/functional/composables/useTheme/useTheme')['VARIANT_THEME_STORAGE_KEY']
  const VariantTheme: typeof import('./src/domains/functional/composables/useTheme/useTheme')['VariantTheme']
  const acceptHMRUpdate: typeof import('pinia')['acceptHMRUpdate']
  const adminRoutes: typeof import('./src/domains/admin/routes')['adminRoutes']
  const authRoutes: typeof import('./src/domains/auth/routes')['authRoutes']
  const computed: typeof import('vue')['computed']
  const createApp: typeof import('vue')['createApp']
  const createPinia: typeof import('pinia')['createPinia']
  const customRef: typeof import('vue')['customRef']
  const defineAsyncComponent: typeof import('vue')['defineAsyncComponent']
  const defineComponent: typeof import('vue')['defineComponent']
  const defineStore: typeof import('pinia')['defineStore']
  const effectScope: typeof import('vue')['effectScope']
  const findComponentByDataTestKey: typeof import('./src/test/utils/index')['findComponentByDataTestKey']
  const getActivePinia: typeof import('pinia')['getActivePinia']
  const getCurrentInstance: typeof import('vue')['getCurrentInstance']
  const getCurrentScope: typeof import('vue')['getCurrentScope']
  const graphql: typeof import('./src/graphql/__generated__/gql')['graphql']
  const h: typeof import('vue')['h']
  const i18n: typeof import('./src/i18n/index')['i18n']
  const inject: typeof import('vue')['inject']
  const isFragmentReady: typeof import('./src/graphql/__generated__/fragment-masking')['isFragmentReady']
  const isProxy: typeof import('vue')['isProxy']
  const isReactive: typeof import('vue')['isReactive']
  const isReadonly: typeof import('vue')['isReadonly']
  const isRef: typeof import('vue')['isRef']
  const makeFragmentData: typeof import('./src/graphql/__generated__/fragment-masking')['makeFragmentData']
  const mapActions: typeof import('pinia')['mapActions']
  const mapGetters: typeof import('pinia')['mapGetters']
  const mapState: typeof import('pinia')['mapState']
  const mapStores: typeof import('pinia')['mapStores']
  const mapWritableState: typeof import('pinia')['mapWritableState']
  const markRaw: typeof import('vue')['markRaw']
  const nextTick: typeof import('vue')['nextTick']
  const onActivated: typeof import('vue')['onActivated']
  const onBeforeMount: typeof import('vue')['onBeforeMount']
  const onBeforeRouteLeave: typeof import('vue-router')['onBeforeRouteLeave']
  const onBeforeRouteUpdate: typeof import('vue-router')['onBeforeRouteUpdate']
  const onBeforeUnmount: typeof import('vue')['onBeforeUnmount']
  const onBeforeUpdate: typeof import('vue')['onBeforeUpdate']
  const onDeactivated: typeof import('vue')['onDeactivated']
  const onErrorCaptured: typeof import('vue')['onErrorCaptured']
  const onMounted: typeof import('vue')['onMounted']
  const onRenderTracked: typeof import('vue')['onRenderTracked']
  const onRenderTriggered: typeof import('vue')['onRenderTriggered']
  const onScopeDispose: typeof import('vue')['onScopeDispose']
  const onServerPrefetch: typeof import('vue')['onServerPrefetch']
  const onUnmounted: typeof import('vue')['onUnmounted']
  const onUpdated: typeof import('vue')['onUpdated']
  const provide: typeof import('vue')['provide']
  const reactive: typeof import('vue')['reactive']
  const readonly: typeof import('vue')['readonly']
  const ref: typeof import('vue')['ref']
  const resolveComponent: typeof import('vue')['resolveComponent']
  const router: typeof import('./src/router/index')['default']
  const routes: typeof import('./src/router/index')['routes']
  const setActivePinia: typeof import('pinia')['setActivePinia']
  const setMapStoreSuffix: typeof import('pinia')['setMapStoreSuffix']
  const shallowReactive: typeof import('vue')['shallowReactive']
  const shallowReadonly: typeof import('vue')['shallowReadonly']
  const shallowRef: typeof import('vue')['shallowRef']
  const storeToRefs: typeof import('pinia')['storeToRefs']
  const toRaw: typeof import('vue')['toRaw']
  const toRef: typeof import('vue')['toRef']
  const toRefs: typeof import('vue')['toRefs']
  const toValue: typeof import('vue')['toValue']
  const triggerRef: typeof import('vue')['triggerRef']
  const unref: typeof import('vue')['unref']
  const urqlClient: typeof import('./src/graphql/urqlClient')['urqlClient']
  const useAttrs: typeof import('vue')['useAttrs']
  const useAuth: typeof import('./src/domains/auth/composables/useAuth/useAuth')['useAuth']
  const useAuthError: typeof import('./src/domains/auth/composables/useAuthError')['useAuthError']
  const useAuthMock: typeof import('./src/test/mocks/useAuthMock')['useAuthMock']
  const useAuthStore: typeof import('./src/domains/auth/stores/auth')['useAuthStore']
  const useContextStore: typeof import('./src/stores/context/context')['useContextStore']
  const useCounterStore: typeof import('./src/stores/counter/counter')['useCounterStore']
  const useCssModule: typeof import('vue')['useCssModule']
  const useCssVars: typeof import('vue')['useCssVars']
  const useFragment: typeof import('./src/graphql/__generated__/fragment-masking')['useFragment']
  const useGetCountriesQuery: typeof import('./src/pages/SupabaseTest/Country.generated')['useGetCountriesQuery']
  const useHost: typeof import('./src/domains/functional/composables/useHost/useHost')['useHost']
  const useI18n: typeof import('vue-i18n')['useI18n']
  const useI18nMock: typeof import('./src/test/mocks/vue-i18n')['useI18nMock']
  const useLayout: typeof import('./src/domains/functional/composables/useLayout/useLayout')['useLayout']
  const useLink: typeof import('vue-router')['useLink']
  const useRoute: typeof import('vue-router')['useRoute']
  const useRouter: typeof import('vue-router')['useRouter']
  const useRouterMock: typeof import('./src/test/mocks/vue-router')['useRouterMock']
  const useSlots: typeof import('vue')['useSlots']
  const useSupabase: typeof import('./src/composables/useSupabase/useSupabase')['useSupabase']
  const useTheme: typeof import('./src/domains/functional/composables/useTheme/useTheme')['useTheme']
  const watch: typeof import('vue')['watch']
  const watchEffect: typeof import('vue')['watchEffect']
  const watchPostEffect: typeof import('vue')['watchPostEffect']
  const watchSyncEffect: typeof import('vue')['watchSyncEffect']
}
// for type re-export
declare global {
  // @ts-ignore
  export type { Component, ComponentPublicInstance, ComputedRef, ExtractDefaultPropTypes, ExtractPropTypes, ExtractPublicPropTypes, InjectionKey, PropType, Ref, VNode, WritableComputedRef } from 'vue'
}
// for vue template auto import
import { UnwrapRef } from 'vue'
declare module 'vue' {
  interface ComponentCustomProperties {
    readonly ADMIN_ROUTES: UnwrapRef<typeof import('./src/domains/admin/routes')['ADMIN_ROUTES']>
    readonly AUTH_ROUTES: UnwrapRef<typeof import('./src/domains/auth/routes')['AUTH_ROUTES']>
    readonly AVAILABLE_LOCALES: UnwrapRef<typeof import('./src/i18n/index')['AVAILABLE_LOCALES']>
    readonly CONTEXT_LOCALE_STORAGE_KEY: UnwrapRef<typeof import('./src/stores/context/context')['CONTEXT_LOCALE_STORAGE_KEY']>
    readonly DEFAULT_LOCALE: UnwrapRef<typeof import('./src/i18n/index')['DEFAULT_LOCALE']>
    readonly EffectScope: UnwrapRef<typeof import('vue')['EffectScope']>
    readonly FilterIs: UnwrapRef<typeof import('./src/graphql/__generated__/graphql')['FilterIs']>
    readonly GetCountriesDocument: UnwrapRef<typeof import('./src/graphql/__generated__/graphql')['GetCountriesDocument']>
    readonly LAYOUT_THEME_STORAGE_KEY: UnwrapRef<typeof import('./src/domains/functional/composables/useLayout/useLayout')['LAYOUT_THEME_STORAGE_KEY']>
    readonly Layout: UnwrapRef<typeof import('./src/domains/functional/composables/useLayout/useLayout')['Layout']>
    readonly OrderByDirection: UnwrapRef<typeof import('./src/graphql/__generated__/graphql')['OrderByDirection']>
    readonly ROUTES: UnwrapRef<typeof import('./src/router/index')['ROUTES']>
    readonly acceptHMRUpdate: UnwrapRef<typeof import('pinia')['acceptHMRUpdate']>
    readonly adminRoutes: UnwrapRef<typeof import('./src/domains/admin/routes')['adminRoutes']>
    readonly authRoutes: UnwrapRef<typeof import('./src/domains/auth/routes')['authRoutes']>
    readonly computed: UnwrapRef<typeof import('vue')['computed']>
    readonly createApp: UnwrapRef<typeof import('vue')['createApp']>
    readonly createPinia: UnwrapRef<typeof import('pinia')['createPinia']>
    readonly customRef: UnwrapRef<typeof import('vue')['customRef']>
    readonly defineAsyncComponent: UnwrapRef<typeof import('vue')['defineAsyncComponent']>
    readonly defineComponent: UnwrapRef<typeof import('vue')['defineComponent']>
    readonly defineStore: UnwrapRef<typeof import('pinia')['defineStore']>
    readonly effectScope: UnwrapRef<typeof import('vue')['effectScope']>
    readonly findComponentByDataTestKey: UnwrapRef<typeof import('./src/test/utils/index')['findComponentByDataTestKey']>
    readonly getActivePinia: UnwrapRef<typeof import('pinia')['getActivePinia']>
    readonly getCurrentInstance: UnwrapRef<typeof import('vue')['getCurrentInstance']>
    readonly getCurrentScope: UnwrapRef<typeof import('vue')['getCurrentScope']>
    readonly graphql: UnwrapRef<typeof import('./src/graphql/__generated__/gql')['graphql']>
    readonly h: UnwrapRef<typeof import('vue')['h']>
    readonly i18n: UnwrapRef<typeof import('./src/i18n/index')['i18n']>
    readonly inject: UnwrapRef<typeof import('vue')['inject']>
    readonly isFragmentReady: UnwrapRef<typeof import('./src/graphql/__generated__/fragment-masking')['isFragmentReady']>
    readonly isProxy: UnwrapRef<typeof import('vue')['isProxy']>
    readonly isReactive: UnwrapRef<typeof import('vue')['isReactive']>
    readonly isReadonly: UnwrapRef<typeof import('vue')['isReadonly']>
    readonly isRef: UnwrapRef<typeof import('vue')['isRef']>
    readonly makeFragmentData: UnwrapRef<typeof import('./src/graphql/__generated__/fragment-masking')['makeFragmentData']>
    readonly mapActions: UnwrapRef<typeof import('pinia')['mapActions']>
    readonly mapGetters: UnwrapRef<typeof import('pinia')['mapGetters']>
    readonly mapState: UnwrapRef<typeof import('pinia')['mapState']>
    readonly mapStores: UnwrapRef<typeof import('pinia')['mapStores']>
    readonly mapWritableState: UnwrapRef<typeof import('pinia')['mapWritableState']>
    readonly markRaw: UnwrapRef<typeof import('vue')['markRaw']>
    readonly nextTick: UnwrapRef<typeof import('vue')['nextTick']>
    readonly onActivated: UnwrapRef<typeof import('vue')['onActivated']>
    readonly onBeforeMount: UnwrapRef<typeof import('vue')['onBeforeMount']>
    readonly onBeforeRouteLeave: UnwrapRef<typeof import('vue-router')['onBeforeRouteLeave']>
    readonly onBeforeRouteUpdate: UnwrapRef<typeof import('vue-router')['onBeforeRouteUpdate']>
    readonly onBeforeUnmount: UnwrapRef<typeof import('vue')['onBeforeUnmount']>
    readonly onBeforeUpdate: UnwrapRef<typeof import('vue')['onBeforeUpdate']>
    readonly onDeactivated: UnwrapRef<typeof import('vue')['onDeactivated']>
    readonly onErrorCaptured: UnwrapRef<typeof import('vue')['onErrorCaptured']>
    readonly onMounted: UnwrapRef<typeof import('vue')['onMounted']>
    readonly onRenderTracked: UnwrapRef<typeof import('vue')['onRenderTracked']>
    readonly onRenderTriggered: UnwrapRef<typeof import('vue')['onRenderTriggered']>
    readonly onScopeDispose: UnwrapRef<typeof import('vue')['onScopeDispose']>
    readonly onServerPrefetch: UnwrapRef<typeof import('vue')['onServerPrefetch']>
    readonly onUnmounted: UnwrapRef<typeof import('vue')['onUnmounted']>
    readonly onUpdated: UnwrapRef<typeof import('vue')['onUpdated']>
    readonly provide: UnwrapRef<typeof import('vue')['provide']>
    readonly reactive: UnwrapRef<typeof import('vue')['reactive']>
    readonly readonly: UnwrapRef<typeof import('vue')['readonly']>
    readonly ref: UnwrapRef<typeof import('vue')['ref']>
    readonly resolveComponent: UnwrapRef<typeof import('vue')['resolveComponent']>
    readonly router: UnwrapRef<typeof import('./src/router/index')['default']>
    readonly routes: UnwrapRef<typeof import('./src/router/index')['routes']>
    readonly setActivePinia: UnwrapRef<typeof import('pinia')['setActivePinia']>
    readonly setMapStoreSuffix: UnwrapRef<typeof import('pinia')['setMapStoreSuffix']>
    readonly shallowReactive: UnwrapRef<typeof import('vue')['shallowReactive']>
    readonly shallowReadonly: UnwrapRef<typeof import('vue')['shallowReadonly']>
    readonly shallowRef: UnwrapRef<typeof import('vue')['shallowRef']>
    readonly storeToRefs: UnwrapRef<typeof import('pinia')['storeToRefs']>
    readonly toRaw: UnwrapRef<typeof import('vue')['toRaw']>
    readonly toRef: UnwrapRef<typeof import('vue')['toRef']>
    readonly toRefs: UnwrapRef<typeof import('vue')['toRefs']>
    readonly toValue: UnwrapRef<typeof import('vue')['toValue']>
    readonly triggerRef: UnwrapRef<typeof import('vue')['triggerRef']>
    readonly unref: UnwrapRef<typeof import('vue')['unref']>
    readonly urqlClient: UnwrapRef<typeof import('./src/graphql/urqlClient')['urqlClient']>
    readonly useAttrs: UnwrapRef<typeof import('vue')['useAttrs']>
    readonly useAuth: UnwrapRef<typeof import('./src/domains/auth/composables/useAuth/useAuth')['useAuth']>
    readonly useAuthError: UnwrapRef<typeof import('./src/domains/auth/composables/useAuthError')['useAuthError']>
    readonly useAuthMock: UnwrapRef<typeof import('./src/test/mocks/useAuthMock')['useAuthMock']>
    readonly useAuthStore: UnwrapRef<typeof import('./src/domains/auth/stores/auth')['useAuthStore']>
    readonly useContextStore: UnwrapRef<typeof import('./src/stores/context/context')['useContextStore']>
    readonly useCounterStore: UnwrapRef<typeof import('./src/stores/counter/counter')['useCounterStore']>
    readonly useCssModule: UnwrapRef<typeof import('vue')['useCssModule']>
    readonly useCssVars: UnwrapRef<typeof import('vue')['useCssVars']>
    readonly useFragment: UnwrapRef<typeof import('./src/graphql/__generated__/fragment-masking')['useFragment']>
    readonly useGetCountriesQuery: UnwrapRef<typeof import('./src/pages/SupabaseTest/Country.generated')['useGetCountriesQuery']>
    readonly useHost: UnwrapRef<typeof import('./src/domains/functional/composables/useHost/useHost')['useHost']>
    readonly useI18n: UnwrapRef<typeof import('vue-i18n')['useI18n']>
    readonly useI18nMock: UnwrapRef<typeof import('./src/test/mocks/vue-i18n')['useI18nMock']>
    readonly useLayout: UnwrapRef<typeof import('./src/domains/functional/composables/useLayout/useLayout')['useLayout']>
    readonly useLink: UnwrapRef<typeof import('vue-router')['useLink']>
    readonly useRoute: UnwrapRef<typeof import('vue-router')['useRoute']>
    readonly useRouter: UnwrapRef<typeof import('vue-router')['useRouter']>
    readonly useRouterMock: UnwrapRef<typeof import('./src/test/mocks/vue-router')['useRouterMock']>
    readonly useSlots: UnwrapRef<typeof import('vue')['useSlots']>
    readonly useSupabase: UnwrapRef<typeof import('./src/composables/useSupabase/useSupabase')['useSupabase']>
    readonly watch: UnwrapRef<typeof import('vue')['watch']>
    readonly watchEffect: UnwrapRef<typeof import('vue')['watchEffect']>
    readonly watchPostEffect: UnwrapRef<typeof import('vue')['watchPostEffect']>
    readonly watchSyncEffect: UnwrapRef<typeof import('vue')['watchSyncEffect']>
  }
}
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    readonly ADMIN_ROUTES: UnwrapRef<typeof import('./src/domains/admin/routes')['ADMIN_ROUTES']>
    readonly AUTH_ROUTES: UnwrapRef<typeof import('./src/domains/auth/routes')['AUTH_ROUTES']>
    readonly AVAILABLE_LOCALES: UnwrapRef<typeof import('./src/i18n/index')['AVAILABLE_LOCALES']>
    readonly CONTEXT_LOCALE_STORAGE_KEY: UnwrapRef<typeof import('./src/stores/context/context')['CONTEXT_LOCALE_STORAGE_KEY']>
    readonly DEFAULT_LOCALE: UnwrapRef<typeof import('./src/i18n/index')['DEFAULT_LOCALE']>
    readonly EffectScope: UnwrapRef<typeof import('vue')['EffectScope']>
    readonly FilterIs: UnwrapRef<typeof import('./src/graphql/__generated__/graphql')['FilterIs']>
    readonly GetCountriesDocument: UnwrapRef<typeof import('./src/graphql/__generated__/graphql')['GetCountriesDocument']>
    readonly LAYOUT_THEME_STORAGE_KEY: UnwrapRef<typeof import('./src/domains/functional/composables/useLayout/useLayout')['LAYOUT_THEME_STORAGE_KEY']>
    readonly Layout: UnwrapRef<typeof import('./src/domains/functional/composables/useLayout/useLayout')['Layout']>
    readonly OrderByDirection: UnwrapRef<typeof import('./src/graphql/__generated__/graphql')['OrderByDirection']>
    readonly ROUTES: UnwrapRef<typeof import('./src/router/index')['ROUTES']>
    readonly acceptHMRUpdate: UnwrapRef<typeof import('pinia')['acceptHMRUpdate']>
    readonly adminRoutes: UnwrapRef<typeof import('./src/domains/admin/routes')['adminRoutes']>
    readonly authRoutes: UnwrapRef<typeof import('./src/domains/auth/routes')['authRoutes']>
    readonly computed: UnwrapRef<typeof import('vue')['computed']>
    readonly createApp: UnwrapRef<typeof import('vue')['createApp']>
    readonly createPinia: UnwrapRef<typeof import('pinia')['createPinia']>
    readonly customRef: UnwrapRef<typeof import('vue')['customRef']>
    readonly defineAsyncComponent: UnwrapRef<typeof import('vue')['defineAsyncComponent']>
    readonly defineComponent: UnwrapRef<typeof import('vue')['defineComponent']>
    readonly defineStore: UnwrapRef<typeof import('pinia')['defineStore']>
    readonly effectScope: UnwrapRef<typeof import('vue')['effectScope']>
    readonly findComponentByDataTestKey: UnwrapRef<typeof import('./src/test/utils/index')['findComponentByDataTestKey']>
    readonly getActivePinia: UnwrapRef<typeof import('pinia')['getActivePinia']>
    readonly getCurrentInstance: UnwrapRef<typeof import('vue')['getCurrentInstance']>
    readonly getCurrentScope: UnwrapRef<typeof import('vue')['getCurrentScope']>
    readonly graphql: UnwrapRef<typeof import('./src/graphql/__generated__/gql')['graphql']>
    readonly h: UnwrapRef<typeof import('vue')['h']>
    readonly i18n: UnwrapRef<typeof import('./src/i18n/index')['i18n']>
    readonly inject: UnwrapRef<typeof import('vue')['inject']>
    readonly isFragmentReady: UnwrapRef<typeof import('./src/graphql/__generated__/fragment-masking')['isFragmentReady']>
    readonly isProxy: UnwrapRef<typeof import('vue')['isProxy']>
    readonly isReactive: UnwrapRef<typeof import('vue')['isReactive']>
    readonly isReadonly: UnwrapRef<typeof import('vue')['isReadonly']>
    readonly isRef: UnwrapRef<typeof import('vue')['isRef']>
    readonly makeFragmentData: UnwrapRef<typeof import('./src/graphql/__generated__/fragment-masking')['makeFragmentData']>
    readonly mapActions: UnwrapRef<typeof import('pinia')['mapActions']>
    readonly mapGetters: UnwrapRef<typeof import('pinia')['mapGetters']>
    readonly mapState: UnwrapRef<typeof import('pinia')['mapState']>
    readonly mapStores: UnwrapRef<typeof import('pinia')['mapStores']>
    readonly mapWritableState: UnwrapRef<typeof import('pinia')['mapWritableState']>
    readonly markRaw: UnwrapRef<typeof import('vue')['markRaw']>
    readonly nextTick: UnwrapRef<typeof import('vue')['nextTick']>
    readonly onActivated: UnwrapRef<typeof import('vue')['onActivated']>
    readonly onBeforeMount: UnwrapRef<typeof import('vue')['onBeforeMount']>
    readonly onBeforeRouteLeave: UnwrapRef<typeof import('vue-router')['onBeforeRouteLeave']>
    readonly onBeforeRouteUpdate: UnwrapRef<typeof import('vue-router')['onBeforeRouteUpdate']>
    readonly onBeforeUnmount: UnwrapRef<typeof import('vue')['onBeforeUnmount']>
    readonly onBeforeUpdate: UnwrapRef<typeof import('vue')['onBeforeUpdate']>
    readonly onDeactivated: UnwrapRef<typeof import('vue')['onDeactivated']>
    readonly onErrorCaptured: UnwrapRef<typeof import('vue')['onErrorCaptured']>
    readonly onMounted: UnwrapRef<typeof import('vue')['onMounted']>
    readonly onRenderTracked: UnwrapRef<typeof import('vue')['onRenderTracked']>
    readonly onRenderTriggered: UnwrapRef<typeof import('vue')['onRenderTriggered']>
    readonly onScopeDispose: UnwrapRef<typeof import('vue')['onScopeDispose']>
    readonly onServerPrefetch: UnwrapRef<typeof import('vue')['onServerPrefetch']>
    readonly onUnmounted: UnwrapRef<typeof import('vue')['onUnmounted']>
    readonly onUpdated: UnwrapRef<typeof import('vue')['onUpdated']>
    readonly provide: UnwrapRef<typeof import('vue')['provide']>
    readonly reactive: UnwrapRef<typeof import('vue')['reactive']>
    readonly readonly: UnwrapRef<typeof import('vue')['readonly']>
    readonly ref: UnwrapRef<typeof import('vue')['ref']>
    readonly resolveComponent: UnwrapRef<typeof import('vue')['resolveComponent']>
    readonly router: UnwrapRef<typeof import('./src/router/index')['default']>
    readonly routes: UnwrapRef<typeof import('./src/router/index')['routes']>
    readonly setActivePinia: UnwrapRef<typeof import('pinia')['setActivePinia']>
    readonly setMapStoreSuffix: UnwrapRef<typeof import('pinia')['setMapStoreSuffix']>
    readonly shallowReactive: UnwrapRef<typeof import('vue')['shallowReactive']>
    readonly shallowReadonly: UnwrapRef<typeof import('vue')['shallowReadonly']>
    readonly shallowRef: UnwrapRef<typeof import('vue')['shallowRef']>
    readonly storeToRefs: UnwrapRef<typeof import('pinia')['storeToRefs']>
    readonly toRaw: UnwrapRef<typeof import('vue')['toRaw']>
    readonly toRef: UnwrapRef<typeof import('vue')['toRef']>
    readonly toRefs: UnwrapRef<typeof import('vue')['toRefs']>
    readonly toValue: UnwrapRef<typeof import('vue')['toValue']>
    readonly triggerRef: UnwrapRef<typeof import('vue')['triggerRef']>
    readonly unref: UnwrapRef<typeof import('vue')['unref']>
    readonly urqlClient: UnwrapRef<typeof import('./src/graphql/urqlClient')['urqlClient']>
    readonly useAttrs: UnwrapRef<typeof import('vue')['useAttrs']>
    readonly useAuth: UnwrapRef<typeof import('./src/domains/auth/composables/useAuth/useAuth')['useAuth']>
    readonly useAuthError: UnwrapRef<typeof import('./src/domains/auth/composables/useAuthError')['useAuthError']>
    readonly useAuthMock: UnwrapRef<typeof import('./src/test/mocks/useAuthMock')['useAuthMock']>
    readonly useAuthStore: UnwrapRef<typeof import('./src/domains/auth/stores/auth')['useAuthStore']>
    readonly useContextStore: UnwrapRef<typeof import('./src/stores/context/context')['useContextStore']>
    readonly useCounterStore: UnwrapRef<typeof import('./src/stores/counter/counter')['useCounterStore']>
    readonly useCssModule: UnwrapRef<typeof import('vue')['useCssModule']>
    readonly useCssVars: UnwrapRef<typeof import('vue')['useCssVars']>
    readonly useFragment: UnwrapRef<typeof import('./src/graphql/__generated__/fragment-masking')['useFragment']>
    readonly useGetCountriesQuery: UnwrapRef<typeof import('./src/pages/SupabaseTest/Country.generated')['useGetCountriesQuery']>
    readonly useHost: UnwrapRef<typeof import('./src/domains/functional/composables/useHost/useHost')['useHost']>
    readonly useI18n: UnwrapRef<typeof import('vue-i18n')['useI18n']>
    readonly useI18nMock: UnwrapRef<typeof import('./src/test/mocks/vue-i18n')['useI18nMock']>
    readonly useLayout: UnwrapRef<typeof import('./src/domains/functional/composables/useLayout/useLayout')['useLayout']>
    readonly useLink: UnwrapRef<typeof import('vue-router')['useLink']>
    readonly useRoute: UnwrapRef<typeof import('vue-router')['useRoute']>
    readonly useRouter: UnwrapRef<typeof import('vue-router')['useRouter']>
    readonly useRouterMock: UnwrapRef<typeof import('./src/test/mocks/vue-router')['useRouterMock']>
    readonly useSlots: UnwrapRef<typeof import('vue')['useSlots']>
    readonly useSupabase: UnwrapRef<typeof import('./src/composables/useSupabase/useSupabase')['useSupabase']>
    readonly watch: UnwrapRef<typeof import('vue')['watch']>
    readonly watchEffect: UnwrapRef<typeof import('vue')['watchEffect']>
    readonly watchPostEffect: UnwrapRef<typeof import('vue')['watchPostEffect']>
    readonly watchSyncEffect: UnwrapRef<typeof import('vue')['watchSyncEffect']>
  }
}
