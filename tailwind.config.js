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
                body: ['Montserrat', 'sans-serif'],
                heading: ['GogoiaDeco', 'sans-serif'],
                link: ['GogoiaRegular', 'sans-serif'],
                // Future PT Light
                // Roboto Thin
                // Montserrat Light
                // Montserrat ExtraLight
            },
        },
    },
    variants: {},
    plugins: [require('@tailwindcss/forms')],
};
