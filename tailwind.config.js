const config = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screen: {
        sm: "343px",
        md: "744px",
        lg: "1024px",
      },
      colors: {
        primary: "var(--color-primary)",
        black: "var(--color-black)",
        white: "var(--color-white)",
        gray: {
          100: "var(--color-gray-100)",
          300: "var(--color-gray-300)",
          500: "var(--color-gray-500)",
          800: "var(--color-gray-800)",
        },
      },
      fontSize: {
        xs: ["var(--font-size-xs)", { lineHeight: "var(--line-height-20)" }],
        sm: ["var(--font-size-sm)", { lineHeight: "var(--line-height-22)" }],
        md: ["var(--font-size-md)", { lineHeight: "var(--line-height-24)" }],
        lg: ["var(--font-size-lg)", { lineHeight: "var(--line-height-26)" }],
        "2lg": ["var(--font-size-2lg)", { lineHeight: "var(--line-height-26)" }],
        xl: ["var(--font-size-xl)", { lineHeight: "var(--line-height-32)" }],
        "2xl": ["var(--font-size-2xl)", { lineHeight: "var(--line-height-32)" }],
        "3xl": ["var(--font-size-3xl)", { lineHeight: "var(--line-height-42)" }],
      },
      fontWeight: {
        regular: "var(--font-weight-regular)",
        medium: "var(--font-weight-medium)",
        semibold: "var(--font-weight-semibold)",
        bold: "var(--font-weight-bold)",
      },
    },
  },
  plugins: [],
};

export default config;
