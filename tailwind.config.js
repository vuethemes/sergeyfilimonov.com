module.exports = {
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1180px',
    },
    fontFamily: {
      display: ['Arial', 'sans-serif'],
      body: ['Arial', 'sans-serif'],
      mono: [
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
    },
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
        '96': '24rem',
        '128': '32rem',
      }
    },
    container: {
      center: true,
    }
  }
}
