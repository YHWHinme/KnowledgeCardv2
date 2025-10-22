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
      backgroundImage: {
        "card-house":
          "radial-gradient(125% 125% at 50% 10%, #0E1219 0%, #111722 100%)",
      },
      boxShadow: {
        "knlCard-glowColor": "0 0 20px rgba(56, 189, 248, 0.15)",
      },
      colors: {
        // NOTE: App
        app: {
          background: "#0B0E13",
          secondary: "#121721",
          text: {
            primary: "#DCE8F5",
            secondary: "#8BA0B3",
          },
        },
        sidebar: {
          bg: "#D6EAF5",
          gradient: "linear-gradient(180deg, #D6EAF5 0%, #C2E0EF 100%)",
          active: "#63B3ED",
          text: "#0E2433",
          hover: "#3196E2",
          divider: "#B8D7E7",
        },
        // NOTE: cardHouse
        cardHouse: {
          secondary: "hsla(219, 20%, 10%, 0.3)",
          scrollbar: "#2C95C9",
          shadowColor: "rgba(56, 189, 248, 0.2)",
        },
        // NOTE: KnowledgeCard
        knlCard: {
          background: "#1C222E",
          border: "#293444",
          text: {
            function: "hsl(197, 21%, 38%)",
            markdown: "#DDEAF7",
            summary: "#7C8FA5",
          },
          button: "#38BDF8",
        },
        modal: {
          backdrop: "rgba(10, 15, 25, 0.98)",
          modal: {
            body: "#161D28",
            outline: "#38BDF8",
          },
          buttons: {
            background: "#38BDF8",
            text: "#0B0E13",
            hovery: "#5ED4FF",
          },
          inputs: {
            background: "#0E141F",
            border: "#293444",
            outline: "#38BDF8",
          },
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
