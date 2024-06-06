import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, useForm as useReactHookForm } from 'react-hook-form';
import TextField from 'src/component/field/textInput';
import UserNumberField from 'src/module/users/userForm/userNumberInput';
import { IFormProps } from 'src/types/form';

const useForm = <T extends FieldValues>({
    validationSchema,
    defaultValues,
    isDisabled,
}: IFormProps<T>) => {
    const {
        register,
        watch,
        setValue,
        handleSubmit,
        control,
        reset,
        formState,
        clearErrors,
        getFieldState,
        setError,
        trigger,
        getValues,
        resetField,
        unregister,
        setFocus,
    } = useReactHookForm<T>({
        disabled: !!isDisabled,
        mode: 'onChange',
        reValidateMode: 'onChange',
        ...(validationSchema && { resolver: zodResolver(validationSchema) }),
        defaultValues,
    });
    console.log(formState.errors);

    return {
        register,
        setValue,
        watch,
        handleSubmit,
        TextField: TextField<T>,
        UserNumberField: UserNumberField<T>,
        reset,
        formState,
        control,
        clearErrors,
        getFieldState,
        setError,
        trigger,
        getValues,
        resetField,
        unregister,
        setFocus,
    };
};

export default useForm;
