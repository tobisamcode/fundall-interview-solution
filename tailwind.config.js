module.exports = {
    content: ["./src/**/*.{vue,js,ts}"],
    theme: {
        screens: {
            'sm': { 'min': '320px', 'max': '480px' },
            // => @media (min-width: 640px and max-width: 767px) { ... }

            'md': { 'min': '481pxpx', 'max': '768px' },
            // => @media (min-width: 768px and max-width: 1023px) { ... }

            'lg': { 'min': '769px', 'max': '1024px' },
            // => @media (min-width: 1024px and max-width: 1279px) { ... }

            'xl': { 'min': '1025px', 'max': '1535px' },
            // => @media (min-width: 1280px and max-width: 1535px) { ... }

            '2xl': { 'min': '1536px' },
            // => @media (min-width: 1536px) { ... }
        },
    },
    plugins: [],
}