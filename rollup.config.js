import pkg from './package.json'

export default {
    input: 'src/index.js',
    external:[
        '@rollup/plugin-node-resolve',
        '@rollup/plugin-commonjs',
        '@rollup/plugin-babel',
        '@rollup/pluginutils',
        '@rollup/plugin-terser',
        '@rollup/plugin-typescript',
        'rollup-plugin-ignore',
        'rollup-plugin-scss',
        'rollup-plugin-copy',
        'sass',
        'tslib'
    ],
    output: [
        {
            file: pkg.main,
            format: 'cjs',
        },
        {
            file: pkg.module,
            format: 'esm',
        },
    ]
}
