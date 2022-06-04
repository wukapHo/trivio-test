/* eslint-disable */
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,

  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');
    svgRule.clear();

    svgRule
      .test(/\.svg$/i)
      .oneOf('inline')
        .resourceQuery(/inline/)
        .type('asset/source')
        .end()
      .oneOf('file')
        .type('asset')
        .set('generator', {
          filename: 'img/[name].[hash:8][ext]',
        });
  },
});
