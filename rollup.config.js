import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs'

 
export default [
   {
       input: './src/index.js',
       output: [
           {
               file: './dist/index.js',
               format: 'cjs' // Common js
           },
           {
               file: 'dist/index.es.js',
               format: 'es',
               exports: 'named'
           }
       ],
       plugins: [
            replace({
                "preventAssignment": true,
                "process.env.NODE_ENV": JSON.stringify("development")
            }),
           postcss({
               plugins: [],
               minimize: true,
           }),
           babel({
              exclude: 'node_modules/**',
              presets: [
               "@babel/preset-env",
               ["@babel/preset-react", {"runtime": "automatic"}],
              ]
           }),
           external(),
           resolve(),
           terser(),
           commonjs(),

       ]
   }
]
