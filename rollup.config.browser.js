import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";
import del from "rollup-plugin-delete";
import replace from "@rollup/plugin-replace";

export default {
  input: "src/index.ts", // Entry point for your library
  output: [
    {
      file: pkg.main,
      format: "cjs", // CommonJS format
      sourcemap: true,
      exports: "named",
    },
    {
      file: pkg.module,
      format: "es", // ES module format
      sourcemap: true,
      exports: "named",
    },
    {
      file: pkg.unpkg,
      format: "umd", // UMD format for use in browsers
      name: "SecptrumUI", // The global variable name for UMD builds
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
      },
      sourcemap: true,
    },
  ],
  plugins: [
    del({ targets: "dist/*" }),
    peerDepsExternal(), // Automatically mark peer dependencies as external
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
      preventAssignment: true,
    }),
    resolve({
      browser: true, // Resolve modules for the browser
      preferBuiltins: false,
    }), // Helps Rollup find external modules
    commonjs(), // Converts CommonJS modules to ES6
    typescript({
      tsconfig: "./tsconfig.json",
      outputToFilesystem: true,
      exclude: [
        "**/*.stories.tsx",
        "**/*.test.ts",
        ".storybook/**",
        "src/**/*.stories.tsx",
        "src/example/**/*.tsx",
      ],
    }), // Transpile TypeScript files
    babel({
      exclude: "node_modules/**", // Only transpile our source code
      babelHelpers: "bundled",
    }),
    terser(), // Minify the output for production builds
  ],
  external: ["react", "react-dom"],
  // Prevent bundling of peer dependencies
};
