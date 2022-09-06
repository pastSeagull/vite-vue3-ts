import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

const pathSrc = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Components({
    dts: path.resolve(pathSrc, 'typings/components.d.ts'),
  }), AutoImport({
    imports: ['vue', '@vueuse/core'],
    dirs: [path.resolve(pathSrc, 'composables')],
    dts: path.resolve(pathSrc, 'typings/components.d.ts'),
  })],
})
