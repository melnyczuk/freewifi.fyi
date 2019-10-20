const withSass = require('@zeit/next-sass');
const withCSS = require("@zeit/next-css");

module.exports = withCSS(withSass({
  exportPathMap() {
    const weekPath = '/ratioclub/workshops/week_';
    const workshops = new Array(7).fill(0).reduce(
      (prev, _, i) => ({ [weekPath + i]: { page: weekPath + i }, ...prev, }),
      {}
    );

    return {
      '/': { page: '/' },
      '/projects': { page: '/projects' },
      '/ratioclub': { page: '/ratioclub' },
      '/ratioclub/showcase': { page: '/ratioclub/showcase' },
      ...workshops
    };
  },

  webpack(config, options) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      }
    });
    return config;
  }
}));
