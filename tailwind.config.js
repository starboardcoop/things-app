const production = !process.env.ROLLUP_WATCH; // or some other env var like NODE_ENV
module.exports = {
  future: { // for tailwind 2.0 compat
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  plugins: [
    // for tailwind UI users only
    // require('@tailwindcss/ui'),
    // other plugins here
  ],
  purge: {
    content: [
      "./src/**/*.svelte",
      // may also want to include base index.html
    ],
   // enabled: production // disable purge in dev
  },
  theme: {
    extend: {
      colors: {
        primary: "#fdd835",
        bg: "#282828"
      },
      height: {
        "1/2-screen": "50vh",
        "3/4-screen": "75vh"
      },
      padding: {
        "1/4-screen": "25vw"
      }
    }
  }
};