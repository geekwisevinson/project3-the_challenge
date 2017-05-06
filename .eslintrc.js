module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'eslint-plugin-html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-underscore-dangle': 0,

    //temp
    'no-mixed-spaces-and-tabs': 0,
    'no-tabs': 0,
    'no-alert': 0,
    'indent': 0,
    'func-names': 0,
    'no-console': 0,
    'curly': 0,
    'no-multiple-empty-lines': 0,
    'no-undef': 0,
    'no-multi-spaces': 0,
    'key-spacing': 0,
    'camelcase': 0,
    'spaced-comment': 0,
    'object-shorthand': 0,
    'no-prototype-builtins': 0,
    'space-before-function-paren':0,
    'eqeqeq': 0,
    'quotes': 0,
    'space-in-parens': 0,
    'padded-blocks': 0,
    'prefer-const': 0,
    'comma-dangle': 0,
    'no-unused-vars': 0,
    'prefer-template': 0,
    'arrow-spacing': 0,
    'object-curly-spacing': 0,
    'comma-spacing': 0,
    'no-param-reassign': 0,
    'space-before-blocks': 0,
    'keyword-spacing': 0,
    'semi': 0,
    'arrow-parens': 0,
    'no-plusplus': 0,
    'prefer-arrow-callback': 0,
    'import/newline-after-import': 0,
    'space-infix-ops': 0,
    'no-trailing-spaces': 0,
  }
}
