const path = require("path");
const fs = require("fs");

const pluginName = "DumpVueEnvVarsWebpackPlugin";

module.exports = class DumpVueEnvVarsWebpackPlugin {
  constructor(opts) {
    this.filename = opts.filename || "env-vars-dump.js";
  }

  apply(compiler) {
    const fileContent = Object.keys(process.env)
      .filter(k => k.startsWith("VUE_APP_"))
      .reduce((accum, currKey) => {
        const val = process.env[currKey];
        accum += `const ${currKey} = '${val}'\n`;
        return accum;
      }, "");
    const outputDir = compiler.options.output.path;
    if (!fs.existsSync(outputDir)) {
      // TODO ideally we'd let Webpack create it for us, but not sure how to
      // make this run later in the lifecycle
      fs.mkdirSync(outputDir);
    }
    const fullOutputPath = path.join(outputDir, this.filename);
    console.debug(`[DumpVueEnvVarsWebpackPlugin] dumping env vars to file=${fullOutputPath}`);
    fs.writeFileSync(fullOutputPath, fileContent);
  }
};
