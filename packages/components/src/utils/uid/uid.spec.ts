describe('uid', () => {
  it('should generate a unique id', () => {
    const id = uid()
    expect(id).toMatch(/^[a-z0-9]{6}-[a-z0-9]{6}$/)
  })

  it('should generate a different id each time', () => {
    const id1 = uid()
    const id2 = uid()
    expect(id1).not.toBe(id2)
  })
})
