import type { VueWrapper } from '@vue/test-utils'

export const findComponentByDataTestKey = (
  wrapper: VueWrapper,
  componentName: string,
  dataKey: string
): VueWrapper | undefined => {
  return wrapper
    .findAllComponents({ name: componentName })
    .find((component) => component.attributes('data-test') === dataKey)
}
