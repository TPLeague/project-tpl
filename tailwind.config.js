module.exports = {
  theme: {
    extend: {
      colors: {
        'electric-blue': '#2B32B2',
        'neon-purple': '#6E0DD0',
        'cosmic-orange': '#FF5C00',
        'galactic-white': '#FFFFFF',
        'space-black': '#000000',
        'starlight-yellow': '#F9D423',
      },
      fontFamily: {
        sans: ['Your Sans Serif Font', 'sans-serif'],
        heading: ['Your Bold Sans Serif Font', 'sans-serif'],
      },
      boxShadow: {
        custom:
          '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      borderRadius: {
        custom: '10px',
      },
      transitionProperty: {
        height: 'height',
        spacing: 'margin, padding',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      textColor: ['active'],
    },
  },
  plugins: [],
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}', // Adjust the glob pattern to match the file structure of your project
  ],
};
