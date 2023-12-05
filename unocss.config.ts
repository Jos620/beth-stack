import { defineConfig, presetAttributify, presetUno } from 'unocss';

export default defineConfig({
  presets: [presetUno(), presetAttributify()],
  shortcuts: {
    center: 'flex items-center justify-center',
    row: 'flex flex-row',
    col: 'flex flex-col',
  },
});
