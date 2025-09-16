// vite.config.ts - Tezlik uchun optimizatsiya qilingan
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  build: {
    minify: 'esbuild', // Terser o'rniga tezroq esbuild

    rollupOptions: {
      output: {
        // YAXSHILANGAN chunk strategiyasi
        manualChunks: (id) => {
          // Node modules ni vendor chunk ga
          if (id.includes('node_modules')) {
            // Katta librarylarni alohida chunklar
            if (id.includes('vue')) {
              return 'vue-vendor'
            }
            if (id.includes('axios')) {
              return 'http-vendor'
            }
            if (id.includes('@vueuse') || id.includes('lodash')) {
              return 'utils-vendor'
            }
            // Qolgan kichik librarylar
            return 'vendor'
          }

          // Komponentlarni guruhlab chunk qilish
          if (id.includes('/components/')) {
            if (id.includes('/components/UI/')) {
              return 'ui-components'
            }
            if (id.includes('/components/Pages/')) {
              return 'page-components'
            }
          }

          // Views (sahifalar) ni alohida
          if (id.includes('/views/') || id.includes('/pages/')) {
            return 'pages'
          }
        },

        // Fayl nomlari optimizatsiyasi
        chunkFileNames: (chunkInfo) => {
          // Dynamic importlar uchun
          if (chunkInfo.isDynamicEntry) {
            return 'assets/js/dynamic/[name]-[hash].js'
          }
          return 'assets/js/[name]-[hash].js'
        },
        entryFileNames: 'assets/js/entry/[name]-[hash].js',

        // YAXSHILANGAN asset file naming
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) return 'assets/misc/[name]-[hash][extname]'

          const info = assetInfo.name.split('.')
          const extType = info[info.length - 1].toLowerCase()

          // Media fayllar
          if (
            ['mp4', 'webm', 'ogg', 'mp3', 'wav', 'flac', 'aac', 'm4a'].includes(
              extType
            )
          ) {
            return 'assets/media/[name]-[hash][extname]'
          }

          // Rasmlar - format bo'yicha ham ajratish
          if (
            [
              'png',
              'jpg',
              'jpeg',
              'gif',
              'svg',
              'webp',
              'ico',
              'avif',
            ].includes(extType)
          ) {
            // Kichik iconlar va katta rasmlarni ajratish
            const size =
              assetInfo.name.includes('icon') || assetInfo.name.includes('logo')
                ? 'icons'
                : 'images'
            return `assets/images/${size}/[name]-[hash][extname]`
          }

          // Font fayllar
          if (['woff', 'woff2', 'eot', 'ttf', 'otf'].includes(extType)) {
            return 'assets/fonts/[name]-[hash][extname]'
          }

          // CSS fayllar
          if (extType === 'css') {
            return 'assets/css/[name]-[hash][extname]'
          }

          // Boshqa fayllar
          return 'assets/misc/[name]-[hash][extname]'
        },
      },

      // External dependencies (CDN dan yuklash uchun)
      external: (id) => {
        // Katta librarylarni CDN dan yuklash mumkin
        // return ['vue', 'vue-router'].includes(id)
        return false // Hozircha barcha internal
      },
    },

    // Chunk size optimization
    chunkSizeWarningLimit: 1000,

    // CSS code splitting yoqish
    cssCodeSplit: true,

    // Source map o'chirish (production)
    sourcemap: false,

    // Build target optimization
    target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14'],

    // Asset inlining threshold (kichik fayllarni inline qilish)
    assetsInlineLimit: 4096, // 4KB dan kichik fayllar inline
  },

  // esbuild optimization
  esbuild: {
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
    legalComments: 'none', // Legal commentlarni olib tashlash
  },

  // CSS optimization
  css: {
    devSourcemap: false,

    // PostCSS plugins
    postcss: {
      plugins: [
        // Autoprefixer va boshqalar uchun
      ],
    },

    // CSS preprocessor optimizatsiyasi
    preprocessorOptions: {
      scss: {
        // Charset warning ni o'chirish
        charset: false,
      },
    },
  },

  // Pre-bundling optimizatsiyasi
  optimizeDeps: {
    include: ['vue', 'vue-router', 'axios'],
    // Force include katta librarylar
    force: false,
  },

  // Server optimizatsiyasi (development)
  server: {
    // File watching optimization
    watch: {
      usePolling: false,
    },
    // Warm up
    warmup: {
      clientFiles: ['./src/main.ts', './src/App.vue', './src/router/index.ts'],
    },
  },

  // Experimental optimizatsiyalar
  experimental: {
    renderBuiltUrl(filename, { hostType }) {
      // CDN URL lar uchun
      if (hostType === 'js') {
        return { js: `https://cdn.masterielts.uz/${filename}` }
      }
      return { relative: true }
    },
  },

  // Vue specific optimizations
  define: {
    __VUE_PROD_DEVTOOLS__: false,
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
  },

  // Asset handling
  assetsInclude: ['**/*.webp', '**/*.avif'], // Modern formatlar
})
