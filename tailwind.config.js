/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      translate: {
        "minus-x-1/2": "translateX(-50%)",
      },
      backgroundImage: {
        "white-border":
          "linear-gradient(41.83deg, #FFFFFF 1.72%, rgba(255, 255, 255, 0) 72.51%)",
        "gray-border":
          "linear-gradient(45deg, rgba(255, 255, 255, 0.12) 1.3%, rgba(255, 255, 255, 0) 59.64%)",
        "purple-gradient":
          "radial-gradient(101.41% 101.41% at 50% -0.7%, #101010 35%, #401241 68%, #701471 100%), linear-gradient(41.83deg, #FFFFFF 1.72%, rgba(255, 255, 255, 0) 72.51%)",
        "dark-gradient":
          "linear-gradient(45deg, rgba(255, 255, 255, 0.072) 0%, rgba(128, 128, 128, 0.036) 50%, rgba(0, 0, 0, 0) 100%)",
        "light-gradient":
          "radial-gradient(101.41% 101.41% at 50% -0.7%, #101010 35%, #1F1F1F 68%, #323232 100%), linear-gradient(41.83deg, rgba(255, 255, 255, 0.4) 1.72%, rgba(255, 255, 255, 0) 72.51%)",
        "tooltip-gradient":
          "linear-gradient(87.52deg, #080808 5.59%, #701471 85.78%)",
      },
    },
  },
  plugins: [],
};
