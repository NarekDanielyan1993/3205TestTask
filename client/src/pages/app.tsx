import { ChakraProvider } from '@chakra-ui/react';
import Notification from 'src/component/notification';
import UsersPage from 'src/pages/users';
import theme from 'src/styles/chakra/theme';

function App() {
    return (
        <>
            <ChakraProvider theme={theme}>
                <UsersPage />
            </ChakraProvider>
            <Notification />
        </>
    );
}

export default App;
