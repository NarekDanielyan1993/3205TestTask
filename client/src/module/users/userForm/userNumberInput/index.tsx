/* eslint-disable react/function-component-definition */
import { Box } from '@chakra-ui/react';
import { Controller, useFormContext } from 'react-hook-form';
import { NumberFormatBase } from 'react-number-format';
import {
    StyledErrorText,
    StyledFormControl,
    StyledFormLabel,
    StyledInput,
} from 'src/component/field/style';
import { IPatternFieldProps } from 'src/types/form';

function UserNumberField<T>({
    name,
    label,
    prefix,
    placeholder = ' ',
}: IPatternFieldProps<T>) {
    const { control, formState } = useFormContext();
    const errorMessage = formState.errors[name]
        ? (formState.errors[name]?.message as string)
        : null;

    const formatPattern = (value: string) => {
        if (!value) return '';
        const numbersOnly = value.replace(/[^\d]/g, '');
        const limitedNumbers = numbersOnly.slice(0, 6);
        const parts = limitedNumbers.match(/\d{1,2}/g);
        if (parts) {
            return parts.join('-');
        }
        return limitedNumbers;
    };

    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { onChange, value } }) => (
                <StyledFormControl>
                    <Box pos="relative">
                        <NumberFormatBase
                            customInput={StyledInput}
                            format={formatPattern}
                            isInvalid={!!errorMessage}
                            onChange={onChange}
                            placeholder={placeholder}
                            prefix={prefix}
                            value={value}
                            valueIsNumericString={value}
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
export default UserNumberField;
