export const useHost = () => {
  const router = useRouter()

  const host = computed(
    () => `${window.location.protocol}//${window.location.host}`
  )

  function resolveRoute(name: string) {
    const href = router.resolve({ name }).href

    return `${host.value}${href}`
  }

  return {
    host,
    resolveRoute,
  }
}
