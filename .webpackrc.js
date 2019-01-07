const path = require('path');
const { resolve } = path
export default {
  entry: 'src/index.js',
  extraBabelPlugins: [['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }]],
  env: {
    development: {
      extraBabelPlugins: ['dva-hmr'],
      proxy: {
        "/api": {
          target: "http://jsonplaceholder.typicode.com/",
          changeOrigin: true,
          pathRewrite: { "^/api": "" }
        },
      },
    },
    production: {
    }
  },
  alias: {
    '@': resolve(__dirname, 'src'),
    components: path.resolve(__dirname, 'src/components/')
  },
  ignoreMomentLocale: true,
  hash: true
};
