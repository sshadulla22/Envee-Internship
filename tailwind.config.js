
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        audiowide: ['Audiowide', 'sans'], // 'sans' fallback in case font isn't available
      },
    },
  },
  plugins: [],
}

