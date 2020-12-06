import commonjs from '@rollup/plugin-commonjs'; // Convert CommonJS modules to ES6
import vue from 'rollup-plugin-vue'; // Handle .vue SFC files
import buble from '@rollup/plugin-buble'; // Transpile/polyfill with reasonable browser support
import typescript from "rollup-plugin-typescript2";
import packageJson from "./package.json";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";

export default {
    input: 'src/main.ts', // Path relative to package.json
    output: [
        {
            format: "cjs",
            file: packageJson.main,
            name: 'V2Cupertino',
            exports: 'named',
            sourcemap: true
        },
        {
          format: "esm",
          file: packageJson.module,
          name: 'V2Cupertino',
          exports: 'named',
          sourcemap: true
        }
      ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        vue({
            css: true, // Dynamically inject css as a <style> tag
            compileTemplate: true, // Explicitly convert template to render function
        }),
        typescript(),
        buble(), // Transpile to ES5
        commonjs(),
    ],
};