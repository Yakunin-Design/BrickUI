import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from "vite-tsconfig-paths";
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
	  react(), 
	  tsconfigPaths(),
	  libInjectCss(),
	  dts({rollupTypes: true}),
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'brickui',
	  fileName: "brickui"
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
		  'react/jsx-runtime': 'react/jsx-runtime'
        },
      },
    },
	css: {
		modules: {
		  scopeBehaviour: 'local',
		  generateScopedName: '[name]__[local]___[hash:base64:5]',
		},
	},
  },
});
