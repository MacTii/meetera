import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import viteBasicSslPlugin from '@vitejs/plugin-basic-ssl'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), viteBasicSslPlugin()],
})
