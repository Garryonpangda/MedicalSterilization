import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import vue2 from '@vitejs/plugin-vue2';

export default defineConfig({
    plugins: [
        vue2(),
        legacy({
            targets: ['ie >= 11'],
            additionalLegacyPolyfills: ['regenerator-runtime/runtime']
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src',
                import.meta.url))
        }
    },
    server: {
        proxy: {
            // 添加代理设置
            '/api': {
                target: 'http://localhost:8085', // 将请求代理到的目标服务器地址
                changeOrigin: true, // 启用跨域
                rewrite: (path) => path.replace(/^\/api/, '') // 重写请求路径
            }
            // 可以添加多个代理设置
        }
    }
});