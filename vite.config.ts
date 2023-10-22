import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import pluginChecker from 'vite-plugin-checker';
import eslintPlugin from 'vite-plugin-eslint'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env': env
    },
    plugins: [
      react(),
      pluginChecker({ typescript: true }),
      eslintPlugin({
        cache: false,
        include: ['./src/**/*.ts', './src/**/*.tsx'],
        exclude: [],
      }),
    ],
  }
})