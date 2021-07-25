import { env } from "process";

import type { Plugin } from "vite";

import type { Options } from "./types";

export default function WebExtension({
  debug = env.NODE_ENV === "development",
}: Partial<Options> = {}): Plugin {
  return {
    name: "plugin-template",
    config() {
      if (debug) console.log("Debugging enabled");
    },
  };
}
