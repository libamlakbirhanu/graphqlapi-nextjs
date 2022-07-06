module.exports = {
  theme: {
    colors: require("tailwindcss/colors"),
  },
  // if on Next 11...
  webpack5: true, // true by default, so you can technically omit this
  webpack(config, options) {
    /** Webpack 5 */
    console.log(options.webpack.version);

    const { ModuleFederationPlugin } = options.webpack.container;

    config.plugins.push(
      new ModuleFederationPlugin({
        remotes: {
          LandingPage: "LandingPage@http://localhost:3000/remoteEntry.js",
        },
        shared: [],
      })
    );

    return config;
  },
};
