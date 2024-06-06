import { FormProvider } from 'react-hook-form';
import { useUserContext } from 'src/context/userContext';
import useForm from 'src/hooks/useForm';
import {
    StyledUserFormSubmitButton,
    StyledUserFormWrapper,
} from 'src/module/users/userForm/style';
import { UserTypes, userValidationSchema } from 'src/utills/validation';

function UserForm() {
    const { getUser } = useUserContext();
    const methods = useForm<UserTypes>({
        validationSchema: userValidationSchema,
        defaultValues: {
            email: '',
            number: null,
        },
    });

    const formSubmitHandler = (data: UserTypes) => {
        const formData = {
            email: data.email,
            ...(!!data.number && { number: data.number }),
        };
        getUser(formData);
    };

    const { UserNumberField, TextField, handleSubmit } = methods;

    return (
        <FormProvider {...methods}>
            <StyledUserFormWrapper onSubmit={handleSubmit(formSubmitHandler)}>
                <TextField label="Email" name="email" />
                <UserNumberField label="Phone number" name="number" />
                <StyledUserFormSubmitButton type="submit">
                    Submit
                </StyledUserFormSubmitButton>
            </StyledUserFormWrapper>
        </FormProvider>
    );
}

export default UserForm;
