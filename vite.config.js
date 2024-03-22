import { defineConfig,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://cn.vitejs.dev/config/
export default defineConfig({
    // vite 配置
    plugins: [
      vue(),
      createSvgIconsPlugin({
        iconDirs: [resolve(process.cwd(), "src/assets/icons")],
        symbolId: "icon-[dir]-[name]"
      }),
      AutoImport({
        imports: ['vue','vue-router','pinia','vue-i18n'],
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      })
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      }
    },

    //引入全局SCSS文件
    css: {
      preprocessorOptions: {
        scss: {
          /**如果引入多个文件，可以使用
           * '@import "@/assets/scss/globalVariable1.scss";
           * @import"@/assets/scss/globalVariable2.scss";'
           **/
          additionalData: '@import "@/styles/var.scss";', //引入scss文件
        }
      }
    },


    server:{
      // 如果使用docker-compose开发模式，设置为false
      open: true, //运行后自动打开浏览器
      host: "0.0.0.0",
      port: 8778, //挂载端口
      allowedHosts: 'all',
      cors:true
    },
    // 构建配置
    build: {
      // 输出目录，默认是 dist
      outDir: 'dist',
      // 是否开启 sourcemap
      sourcemap: false,
      // 是否开启压缩
      minify: 'terser', // 可选值：'terser' | 'esbuild'
      // 是否开启 brotli 压缩
      brotli: true,
      // 是否将模块提取到单独的 chunk 中，默认是 true
      chunkSizeWarningLimit: 2000,
      // 是否提取 CSS 到单独的文件中
      cssCodeSplit: true,
      // 是否开启 CSS 压缩
      cssMinify: true,
      terserOptions: {
        compress: { // 打包时清除 console 和 debug 相关代码
          drop_console: true,
          drop_debugger: true,
        },
      },
      // 是否开启增量式构建
      // https://vitejs.dev/guide/build.html#incremental-build
      incremental: false
    },

})