export const useHost = () => {
  const host = computed(() => {
    let url =
      import.meta.env?.VITE_VERCEL_URL ??
      // import.meta.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
      'http://localhost:5173'

    url = url.includes('http') ? url : `https://${url}`

    return url
  })

  return {
    host,
  }
}
