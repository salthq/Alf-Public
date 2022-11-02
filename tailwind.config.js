module.exports = {
    content: [
        './templates/**/*.html',
        './templates/**/*.twig',
    ],
    theme: {
        backgroundImage: {
            'partnershipbg': "url('/images/PartnershipBackground.svg')",
        },
        colors: {
            'alf-blue': '#eaf9ff',
            'alf-nav-blue': '#0fade8',
            'alf-white': '#ffffff',
            'alf-black': '#000000',
            'alf-green': '#E0FFF6',
            'alf-dark-green': '#2ED8A7',
            'alf-dark-blue': '#036EC2',
            'alf-red': '#FF0000',
            'alf-grey': '#55565A'
        },

        fontFamily: {
            'rubik': ['Rubik', 'sans-serif'],
        }
    },
    variants: {},
    plugins: [
    ],
}