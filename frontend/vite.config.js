import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // If you're integrating with Flask, you might need to specify the build output directory
  build: {
    outDir: 'path/to/flask/static', // Point to your Flask static directory
    emptyOutDir: true,
  }
})