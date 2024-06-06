import { Button, chakra } from '@chakra-ui/react';

export const StyledUserFormWrapper = chakra('form', {
    baseStyle: {
        width: '100%',
        maxWidth: 'sm',
        margin: '0 auto',
        padding: '4',
    },
});

export const StyledUserFormSubmitButton = chakra(Button, {
    baseStyle: {
        width: 'full',
        p: 3,
        borderRadius: 'md',
        height: 'fit-content',
        textTransform: 'uppercase',
        fontWeight: 'semibold',
        transition: 'all 0.5s ease-out',
        border: 'none',
        bgColor: 'brand.primary.main',
        color: 'white',
        _hover: {
            _disabled: {
                bgColor: 'brand.secondary.darken',
            },
            bgColor: 'brand.secondary.main',
        },
    },
});
