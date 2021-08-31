import preprocess from "svelte-preprocess";
import makeAttractionsImporter from "attractions/importer.js";
import path from "path";

export default {
  preprocess: preprocess({
    scss: {
      importer: makeAttractionsImporter({
        // specify the path to your theme file, relative to this file
        themeFile: path.join(process.cwd(), "/sass/theme.scss"),
      }),
      // not mandatory but nice to have for concise imports
      includePaths: [path.join(process.cwd(), "/sass")],
    },
  }),
};
