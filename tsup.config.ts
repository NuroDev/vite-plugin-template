import { resolve } from "path";

import type { Options } from "tsup";

export const tsup: Options = {
  clean: true,
  dts: true,
  entryPoints: [resolve(__dirname, "src", "index.ts")],
  sourcemap: true,
  splitting: false,
};
