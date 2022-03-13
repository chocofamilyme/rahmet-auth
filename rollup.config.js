import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const input = ['src/index.js'];

const commonPlugins = [
    nodeResolve({ browser: true }),
    commonjs(),
    babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled'
    })
];

export default [
    // UMD
    {
        input,
        output: {
            file: `dist/${pkg.name}.min.js`,
            format: 'umd',
            name: 'rahmetAuth',
            esModule: false,
            exports: 'named',
            sourcemap: true
        },
        plugins: [...commonPlugins, terser()]
    },

    // ESM, CJS
    {
        input,
        output: [
            {
                dir: 'dist/esm',
                format: 'esm',
                exports: 'named',
                sourcemap: true
            },
            {
                dir: 'dist/cjs',
                format: 'cjs',
                exports: 'named',
                sourcemap: true
            }
        ],
        plugins: [...commonPlugins]
    }
];
