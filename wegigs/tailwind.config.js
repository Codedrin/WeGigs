/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        meltix: ['Meltix', 'sans-serif'],
        meltixRegular: ['Meltix_Regular', 'sans-serif'],
        meltixLight: ['Meltix_Light', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
