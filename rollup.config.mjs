// rollup.config.mjs
export default {
  input: 'src/main.js',
  output: {
      file: 'dist/bundle.js',
      name: 'react-utils',
      format: 'umd'
  }
};