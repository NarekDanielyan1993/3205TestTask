import StyledUsersContainer from 'src/module/users/style';
import UserForm from 'src/module/users/userForm';
import UserList from 'src/module/users/userList';

function Users() {
    return (
        <StyledUsersContainer>
            <UserForm />
            <UserList />
        </StyledUsersContainer>
    );
}

export default Users;
