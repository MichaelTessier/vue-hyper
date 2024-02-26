describe('useCopyToClipboard', () => {
  it('should copy to clipboard', () => {
    vi.spyOn(navigator.clipboard, 'writeText')

    const { copyToClipboard } = useCopyToClipboard()
    const test = 'test'

    copyToClipboard(test)

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(test)
  })
})
