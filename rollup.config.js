import pkg from './package.json'

export default {
    input: 'src/index.js',
    external:[
        '@rollup/plugin-node-resolve',
        '@rollup/plugin-commonjs',
        '@rollup/plugin-babel',
        '@rollup/pluginutils',
        '@rollup/plugin-terser',
        'rollup-plugin-ignore',
        'rollup-plugin-scss',
        'rollup-plugin-copy',
        'sass'
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
