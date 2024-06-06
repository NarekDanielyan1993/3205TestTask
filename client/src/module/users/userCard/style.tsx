import { Box, chakra } from '@chakra-ui/react';

export const StyledUserCard = chakra(Box, {
    baseStyle: {
        width: '22rem',
        minH: '12rem',
        padding: 6,
        textAlign: 'center',
        borderRadius: '3xl',
        boxShadow: 'primary',
        cursor: 'pointer',
    },
});

export const StyledUserCardHeader = chakra(Box, {
    baseStyle: {
        fontSize: '3xl',
        fontWeight: 'bold',
        lineHeight: '1.875rem',
        marginBottom: 4,
    },
});
