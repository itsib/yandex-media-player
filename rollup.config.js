import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';
import copy from 'rollup-plugin-copy';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import clean from 'rollup-plugin-delete';
import litScss from './rollup-plugins/lit-scss';

const plugins = [
  clean({ targets: 'custom_components/yandex_media_player/lovelace/*' }),
  minifyHTML(),
  litScss({
    minify: true,
    options: { loadPaths: ['node_modules'] },
  }),
  resolve({ browser: true }),
  commonjs(),
  typescript(),
  json(),
  babel({
    babelHelpers: 'bundled',
    exclude: 'node_modules/**',
  }),
  terser(),
  copy({
    targets: [{ src: 'src/images/**/*', dest: 'custom_components/yandex_media_player/lovelace' }],
  }),
];

export default [
  {
    input: 'src/media-player.ts',
    output: {
      dir: 'custom_components/yandex_media_player/lovelace',
      format: 'es',
      // inlineDynamicImports: true,
    },
    plugins: [...plugins],
  },
];
