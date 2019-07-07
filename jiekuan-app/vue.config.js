const path = require('path');
const webpack = require('webpack');

// 配置公共请求路径
function resolve(dir) {
  return path.join(__dirname, dir);
}
// 生成通用的测试服务器地址
function getProxy() {
  let _proxy;
  if (process.env.NODE_ENV !== 'production') {
    _proxy = {
      '/api': {
        target: 'http://loan.com', // 源地址
        changeOrigin: true, // 改变源
        ws: true,
        pathRewrite: {'^/api': ''}
      }
    };
  }
  return _proxy;
}
// webpack输出
module.exports = {
  baseUrl: process.env.baseUrl,
  // 将构建好的文件输出到哪里
  outputDir: process.env.outputDir,
  publicPath: process.env.NODE_ENV === 'production' ? 'http://liuzhe429.github.io/show/jiekuan-app/dist/' : '/',
  productionSourceMap: true,
  lintOnSave: true,

  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-px2rem')({ remUnit: 100 }), // 换算的基数
          require('autoprefixer')({
            browsers: ['last 10 versions']
          })
        ]
      },
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },

  chainWebpack: (config) => {
    config.resolve.alias
      .set('@src', resolve('src'))
      .set('@store', resolve('src/store'))
      .set('@assets', resolve('src/assets'))
      .set('@components', resolve('src/components'))
      .set('@common', resolve('src/common'))
      .set('@static', resolve('src/static'))
      .set('@views', resolve('src/views'))
      .set('@api', resolve('src/api'))
      .set('@router', resolve('src/router'))
      .set('@mixin', resolve('src/mixin'));
    config.resolve.extensions
      .values(['.js', '.vue', '.json', '.less', '.woff', '.ttf']);
    config.module
      .rule('fonts')
      .use('url-loader')
      .tap(options => {
        options.name = `../fonts/[name].[hash:8].[ext]`;
      });
  },

  configureWebpack: config => {
    console.log('\n\n\n=====================================\n' +
      '当前编译模式为:' + process.env.NODE_ENV +
      '\n=====================================\n');
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      config.plugins.push(new webpack.DefinePlugin({
        'process.env.HOST': JSON.stringify('online')
      }));
    } else {
      console.log('\n\n\n=====================================\n' +
          '请注意当前请求为测试服务器数据:' +
          '\n=====================================\n');
    }
  },

  // 配置 webpack-dev-server 行为。
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8899,
    proxy: getProxy(),
    https: false,
    hotOnly: false,
    before: app => {}
  },

  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
};
