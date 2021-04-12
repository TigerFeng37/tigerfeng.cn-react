const theme = {
    breakpoints: [
    '48em', '56em', '72em', '96em'
    ],
    space: [
        0,
        4,
        8,
        16,
        32,
        64,
        128,
        256,
        512
    ],
    fonts: {
        body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
        heading: 'inherit',
        monospace: 'Menlo, monospace'
    },
    fontSizes: [
        12,
        14,
        16,
        20,
        24,
        32,
        48,
        64,
        96
    ],
    fontWeights: {
        body: 400,
        heading: 700,
        bold: 700
    },
    lineHeights: {
        body: 1.5,
        heading: 1.125
    },
    colors: {
        text: '#000',
        contrastText: '#fff',
        background: '#fff',
        primary: '#3300cc',
        secondary: '#0040ff',
        muted: '#fdfdfd',
        gray: '#808080',
        accent: 'primary',
        modes: {
            dark: {
                text: '#fff',
                contrastText: '#000',
                background: '#222',
                primary: '#7beaf4',
                secondary: '#00a4f0',
                muted: '#2a2a2a',
                gray: '#fff',
                accent: 'primary',
            },
            book: {
                text: '#222',
                contrastText: '#fff',
                background: '#f7f4ee',
                primary: '#ef5f4b',
                secondary: '#912923',
                muted: '#f8f6f1',
                gray: '#454545',
                accent: 'primary',
            }
        }
    },
    cards: {
        primary: {
            backgroundColor: 'muted',
            padding: 2,
            borderRadius: '5pt',
            boxShadow: '0 0 1em rgba(0, 0, 0, 0.1)',
            transition: '150ms ease',
            '&:hover': {
                boxShadow: '0 0 .5em rgba(0, 0, 0, 0.125)',
                transition: '150ms ease',
            },
            '&:active': {
                boxShadow: '0 0 .25em rgba(0, 0, 0, 0.175)',
                transition: '50ms ease',
            }
        },
        compact: {
            padding: 1,
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'muted',
        },
    },
    badges: {
        primary: {
            color: 'contrastText'
        },
        primaryOutline: {
            color: 'text',
            bg: 'muted',
            border: '1pt solid',
            borderColor: 'primary'
        }
    },
    styles: {
        root: {
            fontFamily: 'body',
            lineHeight: 'body',
            fontWeight: 'body'
        },
        h1: {
            color: 'text',
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',
            fontSize: 5
        },
        h2: {
            color: 'text',
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',
            fontSize: 4
        },
        h3: {
            color: 'text',
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',
            fontSize: 3
        },
        h4: {
            color: 'text',
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',
            fontSize: 2
        },
        h5: {
            color: 'text',
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',
            fontSize: 1
        },
        h6: {
            color: 'text',
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',
            fontSize: 0
        },
        p: {
            color: 'text',
            fontFamily: 'body',
            fontWeight: 'body',
            lineHeight: 'body'
        },
        a: {
            color: 'text',
            '&:hover': {
                color: 'accent'
            }
        },
        pre: {
            fontFamily: 'monospace',
            overflowX: 'auto',
            code: {
                color: 'inherit'
            }
        },
        code: {
            fontFamily: 'monospace',
            fontSize: 'inherit'
        },
        table: {
            width: '100%',
            borderCollapse: 'separate',
            borderSpacing: 0
        },
        th: {
            textAlign: 'left',
            borderBottomStyle: 'solid'
        },
        td: {
            textAlign: 'left',
            borderBottomStyle: 'solid'
        },
        img: {
            maxWidth: '100%'
        },
        // badge: {
        //     design: {
        //         backgroundColor: 'primary'
        //     },
        //     dev: {
        //         backgroundColor: 'secondary'
        //     },
        //     music: {
        //         backgroundColor: 'accent'
        //     },
        //     misc: {
        //         backgroundColor: 'gray'
        //     }
        // },
    }
}

export default theme