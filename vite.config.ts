import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  
  // Build optimizatsiyalari
  build: {
    // JavaScript minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // console.log larni production da olib tashlash
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'] // Boshqa console metodlari ham
      }
    },
    
    // Chunk optimizatsiyasi
    rollupOptions: {
      output: {
        // Katta librarylarni alohida chunk qilish
        manualChunks: {
          // Vue ecosystem
          'vue-vendor': ['vue', 'vue-router'],
          
          // Utilities
          'utils': ['axios'],
          
          // UI components (agar ko'p bo'lsa)
          // 'ui-components': ['@/components/UI/AppBtn.vue']
        },
        
        // Fayl nomlarini optimize qilish
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.') || []
          let extType = info[info.length - 1]
          
          // Fayllarni tur bo'yicha papkalarga joylashtirish
          if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)$/i.test(assetInfo.name || '')) {
            extType = 'media'
          } else if (/\.(png|jpe?g|gif|svg|webp|ico)$/i.test(assetInfo.name || '')) {
            extType = 'images'
          } else if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name || '')) {
            extType = 'fonts'
          }
          
          return `assets/${extType}/[name]-[hash][extname]`
        }
      }
    },
    
    // CSS code splitting
    cssCodeSplit: true,
    
    // Chunk size warning ni oshirish (agar kerak bo'lsa)
    chunkSizeWarningLimit: 1000,
    
    // Source map ni production da o'chirish
    sourcemap: false
  },
  
  // Development server optimizatsiyasi
  server: {
    // Warm up frequently used files
    warmup: {
      clientFiles: ['./src/main.ts', './src/App.vue']
    }
  },
  
  // Pre-bundling optimizatsiyasi
  optimizeDeps: {
    include: ['vue', 'axios'],
    // Agar boshqa katta librarylar ishlatilsa, ularni ham qo'shing
    // include: ['vue', 'axios', 'lodash-es']
  },
  
  // CSS optimizatsiyasi
  css: {
    // Development da source map yo'q
    devSourcemap: false,
    
    // CSS preprocessor optimizatsiyalari
    preprocessorOptions: {
      scss: {
        // SCSS import path optimizatsiyasi
        additionalData: `@import "@/assets/main.scss";` // Agar global SCSS variablalari bo'lsa
      }
    }
  },
  
  // Asset handling optimizatsiyasi
  assetsInclude: ['**/*.webp'], // WebP fayllarni asset sifatida qaralashi
  
  // Experimental features (agar Vue 3.3+ ishlatilsa)
  define: {
    // Production da Vue devtools ni o'chirish
    __VUE_PROD_DEVTOOLS__: false,
    // Hydration mismatch details ni o'chirish
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false
  }
})