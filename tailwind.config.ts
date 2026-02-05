import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'arthaje-rosa': '#D14D72',
        'arthaje-bege': '#F5F5F0',
        'arthaje-rosa-claro': '#FFB6C1',
        'arthaje-grafite': '#333333',
      },
      borderRadius: {
        'arthaje': '16px',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
export default config
