module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier", "@vue/typescript"],
  //extends: ["@vue/prettier", "@vue/typescript"],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier':'off',
    'no-async-promise-executor':'off'
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
}
