import { theme, DefaultTheme } from '@chakra-ui/core';

const customTheme: DefaultTheme = {
    ...theme,

    fonts: {
        body: 'Roboto, system-ui, sans-serif',
        heading: 'Roboto, system-ui, sans-serif',
        mono: 'menlo, monospace'
    },
    fontWeights: {
        ...theme.fontWeights,
        normal: 400,
        medium: 600,
        bold: 700,
    },
    radii: {
        ...theme.radii,
        sm: '5px',
        md: '8px',

    },

    fontSizes: {
        ...theme.fontSizes,
        '3xl': '20px'
    },
    colors: {
        ...theme.colors,
        purple: {
            ...theme.colors.purple,
            500: '#8257e5',
        },
        green: {
            ...theme.colors.green,
            100: '#C6F6D5',
            200: '#9AE6B4',
            400: '#48BB78'
        },
        teal: {
            ...theme.colors.teal,
            50: '#E6FFFA'
        },
        gray: {
            ...theme.colors.gray,
            300: '#e1e1e6',
            600: '#29292e',
            700: '#202024',
            800: '#121214',

        },
        
    }

}

export default customTheme