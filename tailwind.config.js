const fontSize = require('./tailwind/font-size')

module.exports = {
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1180px',
    },

    fontFamily: {
      display: ['JetBrains', 'sans-serif'],
      body: ['Arial', 'sans-serif'],
      mono: [
        'JetBrains',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },

    fontSize,

    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
    },

    extend: {
      colors: {
        theme: {
          text: 'var(--text-color-primary)',
          textSecondary: 'var(--text-color-secondary)',
          textBlack200: 'var(--text-color-black-200)',
          background: 'var(--bg-primary)',
          backgroundGray: 'var(--bg-gray)',
          borderGray: 'var(--border-gray)',
        },

        primary: {
          default: 'var(--primary-color)',
          lighter: 'var(--primary-color-ligther)',
        },

        secondary: {
          lighter: '#b3bcf5',
          default: '#5c6ac4',
        },

        social: {
          youtube: 'var(--youtube-color)',
          whatsapp: 'var(--whatsapp-color)',
          facebook: 'var(--facebook-color)',
          instagram: 'var(--instagram-color)',
          messenger: 'var(--messanger-color)',
          telegram: 'var(--telegram-color)',
          vk: 'var(--vk-color)',
        },

        gray: {
          '100': '#fbfbfb',
          '200': '#eeeeee',
          '300': '#e0e0e0',
          '400': '#bdbdbd',
          '500': '#9e9e9e',
          '600': '#757575',
          '700': '#616161',
          '800': '#424242',
          '900': '#212121',
          'codeblock': '#fbfcfd',
        }
      },

      spacing: {
        '24rem': '24rem',
        '28rem': '28rem',
        '32rem': '32rem'
      }
    },
    container: {
      center: true,
      padding: "1rem",
    },
  }
}
