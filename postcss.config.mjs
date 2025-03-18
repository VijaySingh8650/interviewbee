/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {
      content: ["./src/**/*.{html,js}"],
    },
  },
};

export default config;
