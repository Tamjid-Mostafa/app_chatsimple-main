/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: ["outline-none"],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "1920px",
      },
      colors: {
        primary: "var(--primary)",
        "primary-2": "var(--primary-2)",
        secondary: "var(--secondary)",
        "secondary-2": "var(--secondary-2)",
        hover: "var(--hover)",
        "hover-1": "var(--hover-1)",
        "hover-2": "var(--hover-2)",
        "accent-0": "var(--accent-0)",
        "accent-0.5": "var(--accent-0.5)",
        "accent-1": "var(--accent-1)",
        "accent-1.5": "var(--accent-1.5)",
        "accent-2": "var(--accent-2)",
        "accent-3": "var(--accent-3)",
        "accent-4": "var(--accent-4)",
        "accent-5": "var(--accent-5)",
        "accent-6": "var(--accent-6)",
        "accent-7": "var(--accent-7)",
        "accent-8": "var(--accent-8)",
        "accent-8.5": "var(--accent-8.5)",
        "accent-9": "var(--accent-9)",
        "accent-9.5": "var(--accent-9.5)",
        "accent-10": "var(--accent-10)",
        "accent-0": "var(--olive-0)",
        "accent-0.5": "var(--olive-0.5)",
        "accent-1": "var(--olive-1)",
        "accent-1.5": "var(--olive-1.5)",
        "accent-2": "var(--olive-2)",
        "accent-3": "var(--olive-3)",
        "accent-4": "var(--olive-4)",
        "accent-5": "var(--olive-5)",
        "accent-6": "var(--olive-6)",
        "accent-7": "var(--olive-7)",
        "accent-8": "var(--olive-8)",
        "accent-8.5": "var(--olive-8.5)",
        "accent-9": "var(--olive-9)",
        "accent-9.5": "var(--olive-9.5)",
        "accent-10": "var(--olive-10)",
        violet: "var(--violet)",
        "violet-light": "var(--violet-light)",
        "violet-dark": "var(--violet-dark)",
        pink: "var(--pink)",
        "pink-light": "var(--pink-light)",
        cyan: "var(--cyan)",
        blue: "var(--blue)",
        green: "var(--green)",
        red: "var(--red)",
        container_light: "var(--container-light)",
        decorative_1: "var(--decorative_1)",
        skeleton: "var(--skeleton)",
        background: "var(--background)",
        surface_dark: "var(--surface-dark)",
        disabled: "var(--disabled)",
        background_dark: "var(--background_dark)",
        container: "var(--container)",
        display_text: "var(--display-text)",
        system: "var(--system)",
        white: "var(--white)",
      },
      textColor: {
        base: "var(--text-base)",
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
      },
      fontSize: {
        md: "var(--font-size)",
      },
      boxShadow: {
        "outline-normal": "0 0 0 2px var(--accent-2)",
        magical:
          "rgba(0, 0, 0, 0.02) 0px 30px 30px, rgba(0, 0, 0, 0.03) 0px 0px 8px, rgba(0, 0, 0, 0.05) 0px 1px 0px",
      },
      lineHeight: {
        "extra-loose": "2.2",
      },
      scale: {
        120: "1.2",
      },
    },
  },
};
