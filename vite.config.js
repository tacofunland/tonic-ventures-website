export default {
  base: '/',
  root: './',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    copyPublicDir: true
  },
  css: {
    postcss: './postcss.config.js'
  }
} 