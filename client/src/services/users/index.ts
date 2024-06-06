import axios from 'axios';
import { useCallback, useRef, useState } from 'react';
import USERS from 'src/constant/path';
import useNotification from 'src/hooks/useNotifications';
import { IGetUser } from 'src/types/user';
import { axiosInstance } from 'src/utills/apiRequest';

const useGetUser = () => {
    const { toast } = useNotification();

    const [isLoading, setIsLoading] = useState(false);
    const abortControllerRef = useRef<AbortController | null>(null);

    const fetchUser = useCallback(async (userData: IGetUser) => {
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
        }

        abortControllerRef.current = new AbortController();
        setIsLoading(true);
        try {
            const { data } = await axiosInstance.get(USERS.get, {
                params: userData,
                signal: abortControllerRef.current.signal,
            });
            setIsLoading(false);
            return data;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            if (axios.isCancel(error)) {
                console.log('Request canceled:', error?.message);
            } else {
                setIsLoading(false);
                toast('error', error?.response?.data?.message);
            }
            return null;
        }
    }, []);

    return { isLoading, fetchUser };
};

export default useGetUser;
