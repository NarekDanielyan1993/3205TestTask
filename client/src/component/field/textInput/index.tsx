import { Box } from '@chakra-ui/react';
import { Controller, useFormContext } from 'react-hook-form';
import {
    StyledErrorText,
    StyledFormControl,
    StyledFormLabel,
    StyledInput,
} from 'src/component/field/style';
import { ITextFieldProps } from 'src/types/form';

function TextField<T>({
    label,
    name,
    disabled,
    type = 'text',
}: ITextFieldProps<T>) {
    const { control, formState } = useFormContext();
    const errorMessage = formState.errors[name]
        ? (formState.errors[name]?.message as string)
        : null;

    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { onChange, value } }) => (
                <StyledFormControl>
                    <Box pos="relative">
                        <StyledInput
                            aria-label={label}
                            isDisabled={!!disabled}
                            isInvalid={!!errorMessage}
                            onChange={onChange}
                            placeholder=" "
                            type={type}
                            value={value}
                        />
                        <StyledFormLabel htmlFor={name}>
                            {label}
                        </StyledFormLabel>
                    </Box>
                    <StyledErrorText>{errorMessage}</StyledErrorText>
                </StyledFormControl>
            )}
        />
    );
}

export default TextField;
