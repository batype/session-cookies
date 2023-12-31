const esbuild = require("esbuild");

esbuild
  .build({
    entryPoints: ["src/index.ts"],
    outfile: "lib/sessionCookies.js",
    bundle: true,
    format: "iife",
    globalName: "sessionCookies", // 设置全局名称
  })
  .catch(() => process.exit(1));
