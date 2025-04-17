module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#F5F5F7",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
