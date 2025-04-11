export default {
  base: '/',
  root: './',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    copyPublicDir: true,
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  },
  css: {
    postcss: './postcss.config.js'
  }
} 