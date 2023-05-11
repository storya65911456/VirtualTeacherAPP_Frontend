/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            height: { screen2: ['100vh /* fallback for Opera, IE and etc. */', '100svh'] }
        }
    },
    plugins: []
};
