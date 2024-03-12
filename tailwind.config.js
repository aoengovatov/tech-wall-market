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
            lightBlue: "#73A8DA",
            midBlue: "#4D85F3",
            white: "#fff",
            darkGray: "#625454",
            midGray: "#E1DEDE",
            lightGray: "#F1F1F1",
            gray: "#CDCCCC",
            black: "#2D2929",
            green: "#1DC441",
            red: "#FA4949",
            transparent: "#00000000",
            blackTransparent: "#00000080",
        },
    },
    plugins: [],
};
