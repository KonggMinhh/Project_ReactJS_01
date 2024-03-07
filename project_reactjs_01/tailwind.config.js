/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "/public/index.html"],
    theme: {
        extend: {
            backgroundImage: {
                "chart-gradient":
                    "radial-gradient(50% 124.93% at 95.86% -10%, #3efad9 0, hsla(0, 0%, 100%, 0) 100%), linear-gradient(91.56deg, #ff9357 1.54%, #9100ff 98.71%)",
            },
            backgroundColor: {
                "primary-bg": "#f9dbdb",
                "sidebar-left-bg": "#ffffff4d",
                "active-color": "#b72479",
                "player-bg": "#f9c6c5",
            },
            keyframes: {
                "slide-right": {
                    "0%": {
                        "-webkit-transform": "translateX(-100%)",
                        transform: "translateX(-100%)",
                    },
                    "100%": {
                        "-webkit-transform": "translateX(0%)",
                        transform: "translateX(0%)",
                    },
                },
                "slide-left": {
                    "0%": {
                        "-webkit-transform": "translateX(100%)",
                        transform: "translateX(100%)",
                    },
                    "100%": {
                        "-webkit-transform": "translateX(0%)",
                        transform: "translateX(0%)",
                    },
                },
                "slide-left2": {
                    "0%": {
                        "-webkit-transform": "translateX(100%)",
                        transform: "translateX(100%)",
                    },
                    "100%": {
                        "-webkit-transform": "translateX(0%)",
                        transform: "translateX(0%)",
                    },
                },
                "slide-right-sidebar": {
                    "0%": {
                        "-webkit-transform": "translateX(0)",
                        transform: "translateX(0)",
                    },
                    "100%": {
                        "-webkit-transform": "translateX(-100%)",
                        transform: "translateX(-100%)",
                    },
                },
                "rotate-album": {
                    "0%": {
                        "  -webkit-transform": "rotate(0)",
                        transform: "rotate(0)",
                    },
                    "100%": {
                        "  -webkit-transform": "rotate(360deg)",
                        transform: "rotate(360deg)",
                    },
                },
                "rotate-album-pause": {
                    "0%": {
                        "  -webkit-transform": "rotate(0)",
                        transform: "rotate(0)",
                        "border-radius": "9999px",
                    },
                    "100%": {
                        "  -webkit-transform": "rotate(180deg)",
                        transform: "rotate(180deg)",
                    },
                },
            },
            animation: {
                "slide-right": "slide-right 0.5s ease-in-out both",
                "slide-left": "slide-left 0.5s ease-in-out both",
                "slide-left2": "slide-left2 0.5s ease-in-out both",
                "slide-right-sidebar":
                    "slide-right-sidebar 0.5s ease-in-out both",
                "rotate-album": "rotate-album 9s linear infinite",
                "rotate-album-pause": "rotate-album-pause  0.3s linear 1 both",
            },
            boxShadow: {
                "playlist-thumb": "0 5px 8px 0 rgba(0,0,0,.2)",
                "box-shadow-right-sidebar":
                    "0 1px 0 rgba(0,0,0,0.3),0 1px 6px rgba(0,0,0,0.3),inset 0 1px 1px hsla(0,0%,100%,0.3)",
            },
        },
        screens: {
            "sidebar-right": "1600px",
            sm: "640px",
            // => @media (min-width: 640px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "1024px",
            // => @media (min-width: 1024px) { ... }

            xl: "1280px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1536px",
            // => @media (min-width: 1536px) { ... }
        },
    },
    plugins: [require("tailwind-scrollbar")],
};
