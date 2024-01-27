describe('router', () => {
  it('should have correct routes', () => {
    const routeNames = router
      .getRoutes()
      .map((route) => route.name)
      .sort()

    expect(routeNames).toStrictEqual(
      [
        'root',
        'login',
        'register',
        'register-confirmed',
        'verify-email',
        'password-reset',
        'password-update',
        'dashboard',
        'auth',
        'admin',
        'locale',
      ].sort()
    )
  })

  it('should redirect to default locale', async () => {
    await router.push('/')

    expect(router.currentRoute.value.path).toEqual('/fr/admin/dashboard')
  })

  it('should redirect to default locale IF unknown locale', async () => {
    await router.push('/ru')

    expect(router.currentRoute.value.path).toEqual('/fr/admin/dashboard')
  })
})
