import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            "tilt-neon": ["Tilt Neon"],
        },
        extend: {
            animation: {
                "expand-width": "expandWidth 0.3s ease-out",
            },
            keyframes: {
                expandWidth: {
                    "0%": {
                        width: "0%",
                    },
                    "100%": {
                        width: "50%",
                    },
                },
            },
        },
    },
    plugins: [],
};
