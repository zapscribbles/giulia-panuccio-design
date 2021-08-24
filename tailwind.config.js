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
                myPurple: '#7C3AED',
                myBlue: '#1E40AF',
                myDarkBlue: '#1E3A8A',
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
