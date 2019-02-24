module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', 'jest'],
  rules: {
    'prefer-destructuring': [
      'error',
      {
        AssignmentExpression: {
          array: false,
          object: true
        }
      }
    ]
  }
};

// 'prefer-destructuring': [
//   'error',
//   {
//     array: false,
//     object: true
//   },
//   {
//     enforceForRenamedProperties: false
//   }
// ],
// allowSingleLine: true
