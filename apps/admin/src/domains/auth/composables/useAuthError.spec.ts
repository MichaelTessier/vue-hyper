import { useI18nMock } from '@/test/mocks/vue-i18n'
import type { StatusCode } from './useAuthError'

describe('useAuthError', () => {
  describe('should errorMessage call correct key', () => {
    const { errorMessage } = useAuthError()

    test('code 400', () => {
      errorMessage(400)
      expect(useI18nMock.t).toHaveBeenCalledWith(
        'auth.error.invalid-credentials'
      )
    })

    test('code 403', () => {
      errorMessage(403)
      expect(useI18nMock.t).toHaveBeenCalledWith('auth.error.unauthorized')
    })

    test('code 404', () => {
      errorMessage(404)
      expect(useI18nMock.t).toHaveBeenCalledWith('auth.error.not-found')
    })

    test('code 409', () => {
      errorMessage(409)
      expect(useI18nMock.t).toHaveBeenCalledWith('auth.error.already-exists')
    })

    test('code 500', () => {
      errorMessage(409)
      expect(useI18nMock.t).toHaveBeenCalledWith('auth.error.already-exists')
    })

    test('code unknown', () => {
      errorMessage(1000 as StatusCode)
      expect(useI18nMock.t).toHaveBeenCalledWith('auth.error.unknown')
    })
  })
})
