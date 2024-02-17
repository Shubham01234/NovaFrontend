/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
        "2xl":"1600px"
      },
      fontSize: {
        xxs: "10px",
        xs: "12px",
        small: "14px",
        medium: "16px",
        large: "18px",
        xl: "20px",
        xxl: "24px",
        xxxl: "30px",
        xxxxl: "36px",
        xxxxxl: "42px",
        xxxxxxl: "48px",
        xxxxxxxl: "54px",
      },
      colors: {
        text: {
          primary: "#FAFAFA",
          secondary: "#1CF9CF",
        },
        background: {
          primary: "#000000",
          secondary: "#5765F2",
          third: "#08C4B3",
          default: "#1E49E2",
        },
      },
      borderWidth: {
        xs: "1px",
        small: "2px",
        medium: "3px",
        large: "4px",
      },
      borderRadius: {
        xs: "2px",
        small: "4px",
        medium: "6px",
        large: "8px",
        xl: "10px",
        xxl: "12px",
        xxxl: "14px",
        xxxxl: "16px",
        xxxxxl: "18px",
        xxxxxxl: "20px",
        full: "9999px",
      },
      boxShadow: {
        "primary-button": "0px 4px 12px 0px rgba(89, 37, 254, 0.25)",
        E1: "1px 1px 5px 0px rgba(0, 0, 0, 0.14)",
        E2: "0px 4px 8px 2px rgba(0, 0, 0, 0.14)",
        E3: "0px 4px 5px -1px rgba(0, 0, 0, 0.08)",
        E4: "0px 6px 7px -2px rgba(0, 0, 0, 0.08)",
        E5: "0px 8px 11px -3px rgba(0, 0, 0, 0.08)",
        E6: "0px 12px 19px -5px rgba(0, 0, 0, 0.08)",
        E7: "0px 0px 25px -7px rgba(0, 0, 0, 0.16)",
        E8: "0px 24px 33px -9px rgba(0, 0, 0, 0.1)",
        E9: "0px 40px 55px -11px rgba(0, 0, 0, 0.12)",
        "onboarding-image": "0px 0px 20px 0px rgba(0, 0, 0, 0.2)",
      },
      maxHeight: {
        wrapper: "calc(100vh - 80px)",
      },
      minWidth: {
        247: "247px",
      },
      backgroundImage: {
        blur: "url('/src/assets/resources/noise.png')",
      },
    },
    plugins: [],
  },
};
