/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            sm: "480px",
            md: "768px",
            lg: "976px",
            xl: "1440px",
        },
        colors: {
            blue: "#156fc1",
            midGray: "#E1DEDE",
            lightGray: "#F1F1F1",
            gray: "#CDCCCC",
            textBlack: "#2D2929",
        },
    },
    plugins: [],
};
