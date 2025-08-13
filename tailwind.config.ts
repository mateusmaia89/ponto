cd /Users/mateusmaia/Downloads/vr-lp-clone-nextjs
cat > tailwind.config.ts <<'EOF'
import type { Config } from "tailwindcss";

const config: Config = {
<<<<<<< HEAD
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
=======
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
>>>>>>> 90fb625 (fix: Tailwind brand colors + content globs)
  theme: {
    container: { center: true, padding: "1rem" },
    extend: {
      colors: {
        brand: {
          primary: "#0B6B3A",
          secondary: "#00C853",
          accent: "#FFB300"
        }
      },
      borderRadius: {
        "2xl": "1.25rem"
      }
    }
  },
  plugins: []
};

export default config;
<<<<<<< HEAD
EOF
=======
>>>>>>> 90fb625 (fix: Tailwind brand colors + content globs)
