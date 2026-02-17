
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // Definimos process.env como un objeto para evitar errores de "process is not defined"
    'process.env': {
      API_KEY: JSON.stringify(process.env.API_KEY),
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
    }
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false
  }
});
