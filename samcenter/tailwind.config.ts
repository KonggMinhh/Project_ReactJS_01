import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-samsung)"],
            },
            colors: {
                "black-dark": "#172226",
                grey: "#F7F7F7",
                "grey-dark": "#A7A7A7",
                yellow: "#D4973E",
                red: "#E50013",
                green: "#339901",
                blue: "#2192FF",
                orange: "#FD6100",
            },
            container: {
                screens: {
                    sm: "576px",
                    md: "768px",
                    lg: "1024px",
                    xl: "1200px",
                    "2xl": "1200px",
                },
            },
        },
    },
    plugins: [require("tailwind-scrollbar")],
    variants: {
        scrollbar: ["rounded"],
    },
};
export default config;
