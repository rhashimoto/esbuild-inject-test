import * as esbuild from 'esbuild'

await esbuild.build({
  entryPoints: ['src/test.js'],
  inject: ['@babel/standalone'],
  bundle: true,
  format: 'esm',
  outdir: 'dist',
  logLevel: 'info',
})