export function useCopyToClipboard() {
  async function copyToClipboard(text: string) {
    if (navigator) {
      // add toast when is available
      await navigator.clipboard.writeText(text)
    }
  }

  return {
    copyToClipboard,
  }
}
