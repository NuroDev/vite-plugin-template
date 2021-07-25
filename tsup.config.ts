import { env } from "process";
import { resolve } from "path";

import type { Options } from "tsup";

const isProd = env.NODE_ENV === "production";

export const tsup: Options = {
  clean: true,
  dts: true,
  entryPoints: [resolve(__dirname, "src", "index.ts")],
  minify: isProd,
  sourcemap: true,
  splitting: false,
};
