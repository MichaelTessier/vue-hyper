import { useI18nMock } from '@/test/mocks/vue-i18n'
import type { StatusCode } from './useAuthError'

describe('useAuthError', () => {
  describe('should errorMessageByStatus call correct key', () => {
    const { errorMessageByStatus } = useAuthError()

    test('code 400', () => {
      errorMessageByStatus(400)
      expect(useI18nMock.t).toHaveBeenCalledWith(
        'auth.error.invalid-credentials'
      )
    })

    test('code 403', () => {
      errorMessageByStatus(403)
      expect(useI18nMock.t).toHaveBeenCalledWith('auth.error.unauthorized')
    })

    test('code 404', () => {
      errorMessageByStatus(404)
      expect(useI18nMock.t).toHaveBeenCalledWith('auth.error.not-found')
    })

    test('code 409', () => {
      errorMessageByStatus(409)
      expect(useI18nMock.t).toHaveBeenCalledWith('auth.error.already-exists')
    })

    test('code 500', () => {
      errorMessageByStatus(500)
      expect(useI18nMock.t).toHaveBeenCalledWith('auth.error.server-error')
    })

    test('code unknown', () => {
      errorMessageByStatus(1000 as StatusCode)
      expect(useI18nMock.t).toHaveBeenCalledWith('auth.error.unknown')
    })
  })
})
