module.exports = {
  mode: "jit",
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: ["Orbitron", "sans-serif"], // for headings
        sans: ["Inter", "sans-serif"], // for body
      },
      colors: {
        // NOTE: Global
        base: {
          bg: "#EAF4FA", // app background
          surface: "#F7FBFD", // card/surface panels
          border: "#C9E1ED", // subtle outlines
          text: "#0E2433", // main text
          muted: "#8FAABF", // secondary text
        },

        accent: {
          DEFAULT: "#63B3ED", // light sky blue
          strong: "#3196E2", // hover / active
          glow: "rgba(99,179,237,0.25)", // soft UI glow
        },

        state: {
          success: "#4FD1C5",
          error: "#E53E3E",
          warning: "#ECC94B",
        },

        // NOTE: Regional Colours
        main: {
          bg: "#EAF4FA",
          text: "#0E2433",
          border: "#C9E1ED",
        },
        sidebar: {
          bg: "#D6EAF5",
          gradient: "linear-gradient(180deg, #D6EAF5 0%, #C2E0EF 100%)",
          active: "#63B3ED",
          text: "#0E2433",
          hover: "#3196E2",
          divider: "#B8D7E7",
        },
        header: {
          bg: "#F7FBFD",
          border: "#C9E1ED",
          text: "#0E2433",
          icon: "#3196E2",
        },
        task: {
          bg: "#FFFFFF",
          completed: "#8FAABF",
          border: "#C9E1ED",
          hover: "#63B3ED",
          active: "#3196E2",
        },
        modal: {
          bg: "rgba(247,251,253,0.95)",
          border: "#C9E1ED",
          shadow: "rgba(49,150,226,0.2)",
        },
      },

      // NOTE: Spacing and Radii
      spacing: {
        0.5: "2px",
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        6: "24px",
        8: "32px",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        "sci-glow": "0 0 8px rgba(99,179,237,0.25)",
        modal: "0 0 16px rgba(49,150,226,0.2)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
