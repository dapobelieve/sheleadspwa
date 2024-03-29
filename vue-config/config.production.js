const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin; // eslint-disable-line
const PrerenderSPAPlugin = require("prerender-spa-plugin"); // eslint-disable-line

const prerenderedRoutesList = ["/courses", "/profile", "/"];
const DumpVueEnvVarsWebpackPlugin = require("../plugins/DumpVueEnvVarsWebpackPlugin.js");
module.exports = {
  configureWebpack: {
    plugins: [
      new DumpVueEnvVarsWebpackPlugin({ filename: "my-env-vars.js" }),
      new BundleAnalyzerPlugin({
        analyzerMode: "disabled",
        generateStatsFile: true
      }),
      /* See https://github.com/chrisvfritz/prerender-spa-plugin for more details */
      new PrerenderSPAPlugin({
        // Required - The path to the webpack-outputted app to prerender.
        staticDir: path.join(__rootDirname),
        // Required - Routes to prerender.
        routes: prerenderedRoutesList
      })
    ]
  }
};
