export const LAYOUT_THEME_STORAGE_KEY = 'layout-theme'

export enum Layout {
  classic = 'classic',
  compact = 'compact',
  modern = 'modern',
}

const layout = ref(Layout.classic)

export const useLayout = () => {
  const settings = reactive({
    layout: layout,
  })

  function initLayout() {
    const localLayout = localStorage.getItem(LAYOUT_THEME_STORAGE_KEY)

    if (localLayout) {
      layout.value = localLayout as Layout
    }

    setLayout(layout.value)
  }

  function setLayout(layout: Layout) {
    localStorage.setItem(LAYOUT_THEME_STORAGE_KEY, layout)
  }

  const isClassicLayout = computed(() => layout.value === Layout.classic)
  const isCompactLayout = computed(() => layout.value === Layout.compact)
  const isModernLayout = computed(() => layout.value === Layout.modern)

  return {
    initLayout,
    layout,
    availableLayout: Object.values(Layout),
    setLayout,
    isClassicLayout: isClassicLayout,
    isCompactLayout: isCompactLayout,
    isModernLayout: isModernLayout,
    settings,
  }
}
