import { UserProvider } from 'src/context/userContext';
import Users from 'src/module/users';

function UsersPage() {
    return (
        <UserProvider>
            <Users />
        </UserProvider>
    );
}

export default UsersPage;
