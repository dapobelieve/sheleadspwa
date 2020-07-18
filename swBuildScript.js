require("dotenv").config();

const fs = require("fs");

fs.writeFileSync(
  "./dist/swenv.js",
  `
	const process = {
		env: {
			VUE_APP_API: conf.VUE_APP_API
		}
	}
`
);
