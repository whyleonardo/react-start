import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': resolve(__dirname, 'src', 'components'),
      '@hooks': resolve(__dirname, 'src', 'hooks'),
      '@theme': resolve(__dirname, 'src', 'theme')
    }
  },
  server: {
    port: 3000
  }
})
