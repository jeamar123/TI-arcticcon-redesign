const postcssNormalize = require("postcss-normalize");

module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      postcss: {
        plugins: () => [postcssNormalize()],
      },
    },
  },
};
