import { ToastOptions, TypeOptions, toast } from 'react-toastify';
import { COMMON_ERROR_MESSAGES } from 'src/constant';

const useNotification = () => {
    const toastify = (type: TypeOptions, message: string) => {
        let msg = '';
        switch (type) {
            case 'success': {
                msg = message || 'Good Job!!';
                break;
            }
            case 'error': {
                msg = message || COMMON_ERROR_MESSAGES;
                break;
            }
            default: {
                msg = message || 'Good Job!!';
            }
        }
        const toastOptions: ToastOptions = {
            type,
        };
        toast(msg, toastOptions);
    };

    return { toast: toastify };
};

export default useNotification;
