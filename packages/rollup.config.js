import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import pkg from './package.json';
import del from 'rollup-plugin-delete';
import terser from '@rollup/plugin-terser';
import visualizer from 'rollup-plugin-visualizer';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs', // CommonJS format
      sourcemap: true,
      exports: 'named',
    },
    {
      file: pkg.module,
      format: 'es', // ES module format
      sourcemap: true,
      exports: 'named',
    },
  ],
  plugins: [
    del({ targets: 'dist/*' }),
    peerDepsExternal(), // Automatically mark peer dependencies as external
    resolve(), // Helps Rollup find external modules
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      outputToFilesystem: true,
    }),

    babel({
      exclude: 'node_modules/**', // Only transpile our source code
      babelHelpers: 'bundled',
    }),

    // Minify the output for production builds
    terser({
      format: {
        comments: false,
      },
      compress: {
        drop_console: false,
      },
      mangle: {
        toplevel: true,
      },
    }),
    visualizer({ open: true, filename: 'bundle-analysis.html' }),
  ],
  // Prevent bundling of peer dependencies
  external: ['react', 'react-dom', 'react/jsx-runtime'],
};
