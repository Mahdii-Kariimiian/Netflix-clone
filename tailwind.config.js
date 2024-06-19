/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                "roboto-bold" : ['Roboto-bold'],
                "roboto-regular" : ['Roboto-regular'],
            },
            backgroundImage: {
                "custom-gradient":
                    "linear-gradient(to top, rgba(0, 0, 0, 0.8) 10%, rgba(0 , 0 , 0 , 0.2) 50%, rgba(0, 0, 0, 0.8) 90%)",
            },
        },
    },
    plugins: [],
};
