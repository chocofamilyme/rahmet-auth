import { nodeResolve } from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';

const input = ['src/index.js'];

export default {
    input,
    plugins: [
        nodeResolve({ browser: true }),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
            babelHelpers: 'bundled'
        }),
        terser()
    ],
    output: {
        file: `dist/${pkg.name}.min.js`,
        format: 'umd',
        name: 'rahmetAuth',
        esModule: false,
        exports: 'named',
        sourcemap: true
    }
};
