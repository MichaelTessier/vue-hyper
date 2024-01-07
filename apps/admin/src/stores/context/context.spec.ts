describe('Context store', () => {
  afterEach(() => {
    localStorage.clear()
  })

  it('should get default locale', () => {
    const contextStore = useContextStore()

    expect(contextStore.locale).toEqual(DEFAULT_LOCALE)
  })

  it('should set locale', () => {
    const contextStore = useContextStore()

    contextStore.setLocale('en')

    expect(contextStore.locale).toEqual('en')
  })
})
