import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { visualizer } from 'rollup-plugin-visualizer';
// import { chunkSplitPlugin } from 'vite-plugin-chunk-split';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    //react
    react(),
    //svgr
    svgr(),
    //alias path
    tsconfigPaths(),

    //split index chunk into two chunk(index, vendor)
    splitVendorChunkPlugin(),

    //rollup visualizer
    visualizer({
      filename: 'chunk-report.html',
      open: true,
      brotliSize: true,
      gzipSize: true
    })

    // 기존에 뭐가 없어서 그런지 오히려 리소스 증가하는 결과 보여서 일단 빼기
    // chunkSplitPlugin({
    //   strategy: 'single-vendor',
    //   customChunk: (args) => {
    //     // files into pages directory is export in single files
    //     let { file } = args;
    //     if (file.startsWith('src/pages/')) {
    //       file = file.substring(4);
    //       file = file.replace(/\.[^.$]+$/, '');
    //       return file;
    //     }
    //     return null;
    //   },
    //   customSplitting: {
    //     // `react` and `react-dom` will be bundled together in the `react-vendor` chunk (with their dependencies, such as object-assign)
    //     'react-vendor': ['react', 'react-dom'],
    //     // Any file that includes `utils` in src dir will be bundled in the `utils` chunk
    //     utils: [/src\/utils/]
    //   }
    // })
  ],
  build: {
    rollupOptions: {
      output: {
        //split vendor manually
        manualChunks(id: string) {
          // creating a chunk to @open-ish deps. Reducing the vendor chunk size
          if (id.includes('@open-ish') || id.includes('tslib')) {
            return '@open-ish';
          }
          // creating a chunk to react routes deps. Reducing the vendor chunk size
          if (
            id.includes('react-router-dom') ||
            id.includes('@remix-run') ||
            id.includes('react-router')
          ) {
            return '@react-router';
          }
        }
      }
    }
  },
  cacheDir: './.vite',
  server: {
    proxy: {
      '/api': {
        target: 'https://dog.ceo/',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ''),
        secure: false,
        ws: true
      }
    }
  }
});
