import { Flex, Text } from '@chakra-ui/react';
import Loader from 'src/component/loader';
import { useUserContext } from 'src/context/userContext';
import UserCard from 'src/module/users/userCard';

function UserList() {
    const { users, isUsersLoading } = useUserContext();

    if (isUsersLoading) return <Loader position="relative" />;

    return (
        <Flex flexWrap="wrap" gap={6} justifyContent="center">
            {Array.isArray(users) && users.length > 0 ? (
                users.map((user) => (
                    <UserCard
                        email={user.email}
                        key={user.email}
                        number={user.number}
                    />
                ))
            ) : (
                <Text fontSize="1rem">No data to display</Text>
            )}
        </Flex>
    );
}

export default UserList;
