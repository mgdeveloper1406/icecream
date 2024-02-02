import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true
    }
  },
  resolve: {
    alias: {
      "@api": path.resolve(__dirname, 'src', 'api'),
      "@components": path.resolve(__dirname, 'src', 'components'),
      "@atoms": path.resolve(__dirname, 'src', 'components', 'atoms'),
      "@molecules": path.resolve(__dirname, 'src', 'components', 'molecules'),
      "@organisms": path.resolve(__dirname, 'src', 'components', 'organisms'),
      "@pages": path.resolve(__dirname, 'src', 'components', 'pages'),
      "@contexts": path.resolve(__dirname, 'src', 'contexts'),
      "@hooks": path.resolve(__dirname, 'src', 'hooks'),
      "@utils": path.resolve(__dirname, 'src', 'utils'),
    }
  }
})
