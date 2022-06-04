module.exports = {
  extends: ['eslint-config-react-app', 'prettier', 'plugin:prettier/recommended', 'prettier/@typescript-eslint'],
  parserOptions: {
    target:
      'es5' /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */,
    module:
      'ESNext' /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */,
    ecmaVersion: 6,
    sourceType: 'module',
    project: './tsconfig.json',
    createDefaultProgram: true,
    ecmaFeatures: {
      jsx: true,
      tsx: true,
      modules: true,
    },
  },
  rules: {
    'consistent-return': ['error', { treatUndefinedAsUnspecified: false }],
    'prettier/prettier': 2,
  },
  plugins: ['prettier'],
};
