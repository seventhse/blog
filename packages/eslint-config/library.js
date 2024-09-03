import antfu from '@antfu/eslint-config'
import base, { baseConfig } from './base.js'

export default (option) => {
  return antfu({
    ...baseConfig,
    ...(option || {}),
  }, ...base)
}
