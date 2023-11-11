interface CounterState {
  count: number
}

export const useCounterStore = defineStore('counter', {
  state: (): CounterState => ({
    count: 0,
  }),

  actions: {
    increment() {
      this.count = this.count + 1
    },
    incrementByAmount(amount: number) {
      this.count = this.count + amount
    },
  },
})
