import { FormControl, Input, chakra } from '@chakra-ui/react';

export const StyledInput = chakra(Input, {
    baseStyle: {
        border: '1px solid',
        width: 'full',
        color: 'brand.common.lightenBlack',
        borderColor: 'brand.primary.lighten',
        borderRadius: '1rem',
        _focus: {
            border: '2px solid',
            boxShadow: 'none',
            borderColor: 'brand.primary.main',
        },
    },
});

export const StyledFormControl = chakra(FormControl, {
    baseStyle: {
        mb: 1,
        position: 'relative',
    },
});
