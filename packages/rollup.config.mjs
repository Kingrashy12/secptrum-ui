import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import del from 'rollup-plugin-delete';
import { visualizer } from 'rollup-plugin-visualizer';
import { readFileSync } from 'fs';
import esbuild from 'rollup-plugin-esbuild';
const pkg = JSON.parse(
  readFileSync(new URL('./package.json', import.meta.url), 'utf8')
);

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs', // CommonJS format
      sourcemap: false,
      exports: 'named',
    },
    {
      file: pkg.module,
      format: 'es', // ES module format
      sourcemap: false,
      exports: 'named',
    },
  ],
  plugins: [
    del({ targets: 'dist/*' }),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      outputToFilesystem: true,
    }),

    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
    }),

    esbuild({
      minify: true,
    }),
    visualizer({ open: true, filename: 'bundle-analysis.html' }),
  ],
  // Prevent bundling of peer dependencies
  external: [
    'react',
    'react-dom',
    'react-icons',
    'jwt-decode',
    'commander',
    'fs-extra',
    'csstype',
  ],
};
