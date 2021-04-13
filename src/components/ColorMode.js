import React from 'react';
import Icon from '@mdi/react';
import { Button, useColorMode } from 'theme-ui';
import { mdiBrightness6, mdiBrightness4 } from '@mdi/js';
import theme from '../theme';

const ColorModeButton = props => {
    const modes = [
        'default',
        'dark',
        'book',
    ]
    const [colorMode, setColorMode] = useColorMode()
    return (
        <header>
            <Button
                {...props}
                onClick={e => {
                    const index = modes.indexOf(colorMode)
                    const next = modes[(index + 1) % modes.length]
                    setColorMode(next)
                }}
                sx={{
                    cursor: 'pointer',
                    padding: 0,
                    width: 40,
                    height: 40,
                    paddingTop: '.45em',
                    backgroundColor: 'muted',
                    marginLeft: '1em',
                    outlineWidth: '0px'
                }}
            >
                {
                    colorMode === 'default' ? (
                        <Icon
                            path={mdiBrightness6}
                            title="Light Mode"
                            size={1}
                            color={ theme.colors.gray }
                            />) : (
                        <Icon
                            path={mdiBrightness4}
                            title="Dark Mode"
                            size={1}
                            color={ theme.colors.gray }
                            />
                    )
                }
            </Button>
        </header>
    )
}

export default ColorModeButton