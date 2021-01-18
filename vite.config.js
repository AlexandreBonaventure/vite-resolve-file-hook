import vue from '@vitejs/plugin-vue'

/**
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [
    vue(), 
    {
      name: 'test',
      resolveFileUrl (a, b) {
        console.log('resolve URL');
        console.log(a, b);
      },
    }
  ]
}
