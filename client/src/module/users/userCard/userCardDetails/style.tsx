import { Box, Flex, Text, chakra } from '@chakra-ui/react';

export const StyledUserCardDetailIcon = chakra(Flex, {
    baseStyle: {
        justifyContent: 'center',
        width: '2.5rem',
    },
});

export const StyledUserCardDetailText = chakra(Text, {
    baseStyle: {
        fontSize: 'sm',
        color: 'brand.secondary',
        lineHeight: '1.25rem',
    },
});

export const StyledUserCardDetail = chakra(Box, {
    baseStyle: {
        display: 'flex',
        alignItems: 'center',
        gap: 2,
    },
});
