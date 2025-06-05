import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'no-process-env': 'off',
    'node/prefer-global/process': 'off',
  },
})
