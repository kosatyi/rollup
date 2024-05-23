import { promises as fs } from 'fs'
import utils from '@rollup/pluginutils'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import terser from '@rollup/plugin-terser'
import json from '@rollup/plugin-json'
import typescript from '@rollup/plugin-typescript'
import ignore from 'rollup-plugin-ignore'
import scss from 'rollup-plugin-scss'
import copy from 'rollup-plugin-copy'
import cleanup from 'rollup-plugin-cleanup'
import watch from 'rollup-plugin-watch'
import builtins from 'rollup-plugin-node-builtins'

const jsonFile = (target, content) => {
    return {
        name: 'jsonFile',
        async buildEnd(err) {
            if (!err) {
                await fs.writeFile(target, JSON.stringify(content, null, 4))
            }
        },
    }
}

export {
    jsonFile,
    utils,
    json,
    watch,
    cleanup,
    copy,
    scss,
    resolve,
    commonjs,
    typescript,
    babel,
    ignore,
    terser,
    builtins,
}
