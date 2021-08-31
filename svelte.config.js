import preprocess from "svelte-preprocess";
import makeAttractionsImporter from "attractions/importer.js";

export default {
  preprocess: preprocess({
    scss: {
      importer: makeAttractionsImporter(),
    },
  }),
};
