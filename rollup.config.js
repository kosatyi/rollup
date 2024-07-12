export default {
    input: 'src/index.js',
    external: [
        '@rollup/plugin-node-resolve',
        '@rollup/plugin-commonjs',
        '@rollup/plugin-babel',
        '@rollup/pluginutils',
        '@rollup/plugin-terser',
        '@rollup/plugin-typescript',
        '@rollup/plugin-json',
        'rollup-plugin-ignore',
        'rollup-plugin-scss',
        'rollup-plugin-copy',
        'rollup-plugin-cleanup',
        'rollup-plugin-watch',
        'sass',
        'fs',
        'tslib',
    ],
    output: [
        {
            file: 'dist/index.cjs',
            format: 'cjs',
        },
        {
            file: 'dist/index.mjs',
            format: 'esm',
        },
    ],
}
