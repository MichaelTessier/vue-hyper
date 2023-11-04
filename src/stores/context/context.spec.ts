import { DEFAULT_LOCALE } from '@/i18n'
import { CONTEXT_LOCALE_STORAGE_KEY } from './context'

describe('Context store', () => {
  afterEach(() => {
    localStorage.clear()
  })

  it('should get default locale', () => {
    const contextStore = useContextStore()

    expect(contextStore.locale).toEqual(DEFAULT_LOCALE)
  })

  it('should get locale from localStorage', () => {
    localStorage.setItem(CONTEXT_LOCALE_STORAGE_KEY, 'en')
    const contextStore = useContextStore()

    expect(contextStore.locale).toEqual('en')
  })

  it('should set locale', () => {
    const contextStore = useContextStore()

    contextStore.setLocale('en')

    expect(contextStore.locale).toEqual('en')
  })
})
