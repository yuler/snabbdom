module.exports = {
  extends: 'standard-with-typescript',
  parserOptions: { project: [ './tsconfig.json', ] },
  ignorePatterns: [
    '/examples/**/build.js'
  ],
  rules: {
    'import/newline-after-import': 'error',
    'max-statements-per-line': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/consistent-type-assertions': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/no-unnecessary-type-assertion': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/restrict-plus-operands': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'comma-dangle': 'off',
    'no-mixed-operators': 'off',
    'no-unneeded-ternary': 'off',
    'no-unused-expressions': 'off',
    'no-unused-vars': 'off',
    'prefer-const': 'off',
    eqeqeq: 'off',
    semi: 'off'
  }
}
