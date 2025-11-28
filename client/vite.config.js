
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
  plugins: [react()],
  server: {
     host: '0.0.0.0',
    
    // 2. This explicitly allows the ngrok public hostname
    allowedHosts: [
      'aerobiological-mutedly-rolande.ngrok-free.dev',
      // You can add 'localhost' or '127.0.0.1' here too if needed
    ],
   
    proxy: {

      '/api': {
        target: 'http://localhost:5000', 
        changeOrigin: true, 
      },
    },
  },
});
