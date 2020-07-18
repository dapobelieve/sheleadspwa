const path = require("path");

module.exports = {
  /* See https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa for more details */
  pwa: {
    name: "She Leads Africa",
    themeColor: "#FFFFFF",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: path.join("public", "service-worker.js")
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/scss/utils/all.scss";`
      }
    },
    extract: false
  },
  devServer: {
    port: 8081
  }
};
