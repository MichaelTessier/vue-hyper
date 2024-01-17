export type StatusCode = 400 | 403 | 404 | 409 | 500

enum AuthErrorKey {
  NOT_FOUND = 'not-found',
  UNAUTHORIZED = 'unauthorized',
  ALREADY_EXISTS = 'already-exists',
  INVALID_CREDENTIALS = 'invalid-credentials',
  SERVER_ERROR = 'server-error',
  UNKNOWN = 'unknown',
}

const authErrorCode: Record<StatusCode, AuthErrorKey> = {
  400: AuthErrorKey.INVALID_CREDENTIALS,
  403: AuthErrorKey.UNAUTHORIZED,
  404: AuthErrorKey.NOT_FOUND,
  409: AuthErrorKey.ALREADY_EXISTS,
  500: AuthErrorKey.SERVER_ERROR,
}

export const useAuthError = () => {
  const { t } = useI18n()

  const authErrorKey = (code: StatusCode) =>
    authErrorCode?.[code] ?? AuthErrorKey.UNKNOWN

  const errorMessage = (code: StatusCode) =>
    t(`auth.error.${authErrorKey(code)}`)

  return {
    errorMessage,
  }
}
