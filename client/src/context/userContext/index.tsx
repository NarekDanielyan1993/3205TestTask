import React, {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
} from 'react';
import useGetUser from 'src/services/users';
import { IUserContext } from 'src/types/context';
import { IGetUser, IUser } from 'src/types/user';

const UserContext = createContext<IUserContext | undefined>(undefined);

function UserProvider({ children }: { children: React.ReactNode }) {
    const { fetchUser, isLoading } = useGetUser();
    const [users, setUsers] = useState<IUser[] | null>(null);

    const getUser = useCallback(async (userData: IGetUser) => {
        const data = await fetchUser(userData);
        if (data) {
            setUsers(data);
        }
    }, []);

    const contextValue = useMemo(() => {
        return {
            users,
            isUsersLoading: isLoading,
            getUser,
        };
    }, [users, isLoading]);

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
}

const useUserContext = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error(
            'useUserContext must be used within a UsersContextProvider'
        );
    }
    return context;
};

export { UserProvider, useUserContext };
export default UserContext;
