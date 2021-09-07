import { AppBar, Box, FormControl, FormControlLabel, MenuItem, Select, Toolbar, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import Welcome from './Welcome'

const NavBar = () => {

    const [position, setPosition] = useState<string>("Full stack Dev")

    const handleOnChange = (event: React.ChangeEvent<{
        name?: string | undefined;
        value: unknown;
    }>) => setPosition(event.target.value as string)
    return (
        <AppBar position='static' color='primary'>
            <Toolbar>
                <Box
                    display='flex'
                    alignItems='center'
                    justifyContent='space-between'
                    width={1}
                    py={2}
                >
                    <Typography variant='h6'>Best Movies</Typography>

                    <Box
                        textAlign='center'
                    >
                        <Welcome position={position} />
                        <Box>
                            <FormControl>
                                <Select value={position} onChange={handleOnChange}>
                                    <MenuItem value="Fullstack">Fullstack</MenuItem>
                                    <MenuItem value="Frontend">Frontend</MenuItem>
                                    <MenuItem value="Backend">Backend</MenuItem>

                                </Select>
                            </FormControl>
                        </Box>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar
