import sharedConfig from '@blog/tailwind-config'
import typography from '@tailwindcss/typography'

const config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  presets: [sharedConfig],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
      },
      borders: {
        border: '1px solid var(--border-color)',
      },
      backgroundColor: {
        block: 'var(--bg-block)',
      },
      backgroundImage: {
        page: 'var(--bg-page)',
      },
      keyframes: {
        // 定义从上至下加载的关键帧动画
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        // 定义动画类
        slideDown: 'slideDown 0.8s ease-out',
      },
    },
  },
  plugins: [
    typography,
  ],
}

export default config
