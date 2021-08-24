module.exports = {
    purge: {
        content: ['_site/**/*.html'],
        options: {
            safelist: [],
        },
    },
    theme: {
        extend: {
            colors: {
                highlight: '#27b4b2',
            },
            fontFamily: {
                body: ['Lato', 'sans-serif'],
                heading: ['Lato', 'sans-serif'],
            },
        },
    },
    variants: {},
    plugins: [require('@tailwindcss/forms')],
};
