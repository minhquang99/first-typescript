import { Box } from '@material-ui/core'
import React from 'react'

interface WelcomeProps {
    position: string
    country?: string
}

const Welcome = ({ position, country = 'vietnam' }: WelcomeProps) => {
    return (
        <Box
            mb={1}
        >
            Welcome {position} from {country}
        </Box>
    )
}

export default Welcome
