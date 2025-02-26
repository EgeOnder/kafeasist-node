import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "var(--border)",
        link: "var(--link)",
        "input-text": "var(--input-text)",

        "kf-red": "var(--kf-red)",
        "kf-red-to": "var(--kf-red-to)",

        "gradient-foreground": "var(--gradient-foreground)",

        destructive: "var(--destructive)",

        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
      },
      borderColor: {},
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
      },
      fontSize: {
        sm: "0.75rem",
        md: "0.875rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.75rem",
        "3xl": "2.25rem",
        "4xl": "3rem",
      },

      borderRadius: {
        radius: "var(--radius)",
      },
    },
  },
} satisfies Config;
