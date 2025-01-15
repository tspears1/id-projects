import { defineConfig } from 'vite'
import { fileURLToPath, URL } from "url"
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    manifest: false,
    outDir: 'dist',
    assetsDir: '.',
    rollupOptions: {
        input: ['./src/main.jsx'],
        output: {
            // remove hash from names.
            entryFileNames: `[name].js`,
            chunkFileNames: `[name].js`,
            assetFileNames: `[name].[ext]`,
        },
    },
    resolve: {
      alias: [
        { find: '@components', replacement: fileURLToPath(new URL('./src/js/components', import.meta.url)) },
        { find: '@constants', replacement: fileURLToPath(new URL('./src/js/constants', import.meta.url)) },
        { find: '@context', replacement: fileURLToPath(new URL('./src/js/context', import.meta.url)) },
        { find: '@hooks', replacement: fileURLToPath(new URL('./src/js/hooks', import.meta.url)) },
      ]
    }
  }
})
