/*=========================================================================================
  File Name: vue.config.js
  Description: configuration file of vue
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


module.exports = {
  publicPath: '/',
  transpileDependencies: [
    'vue-echarts',
    'resize-detector'
  ],
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    }
  },
  // devServer: {
  //   proxy: {
  //     '^/api': {
  //       target: 'https://i-see.iconpln.co.id/backend',
  //       pathRewrite: {'^/api' : '/api'}
  //     },
  //     '^/uploads': {
  //       target: 'https://universitassuryadarma.ac.id/wp-content',
  //       pathRewrite: {'^/uploads' : '/uploads'}
  //     },
  //   }
  // }
}

