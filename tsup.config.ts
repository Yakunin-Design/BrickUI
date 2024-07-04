import { defineConfig } from "tsup";
import cssModulesPlugin from "esbuild-css-modules-plugin";

export default defineConfig({
	format: ["cjs", "esm"],
	entry: ["./src/index.ts"],
	external: ["react", "react-dom"],
	sourcemap: true,
	dts: true,
	shims: true,
	skipNodeModulesBundle: true,
	clean: true,
	esbuildPlugins: [cssModulesPlugin()],
});
