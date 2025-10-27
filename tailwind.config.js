/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./src/**/*.{html,js,svelte,ts}"],
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
        // NOTE: Sidebar
        sidebar: {
          background: "#151B26",
          text: {
            primary: "#E1E9F9",
            inactive: "#7A8CA2",
          },
          activeStage: "#38BDF8",
          hoverState: "#1A212E",
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
        // NOTE: CardModal
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
    },
  },
  plugins: [],
};
