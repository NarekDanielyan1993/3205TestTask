import { Box, chakra } from '@chakra-ui/react';

const StyledUsersContainer = chakra(Box, {
    baseStyle: {
        width: '100%',
        maxWidth: '70rem',
        margin: '4rem auto',
    },
});

export default StyledUsersContainer;
