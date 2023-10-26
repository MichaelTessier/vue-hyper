describe('Counter store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should increments', () => {
    const counterStore = useCounterStore()

    expect(counterStore.count).toBe(0)
    counterStore.increment()
    expect(counterStore.count).toBe(1)
  })

  it('should increments by amount', () => {
    const counterStore = useCounterStore()

    counterStore.incrementByAmount(10)
    expect(counterStore.count).toBe(10)
  })
})
