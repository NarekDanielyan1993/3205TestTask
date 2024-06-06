/* eslint-disable import/extensions */
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Notification() {
    return (
        <ToastContainer
            {...{
                autoClose: 5000,
                position: 'bottom-left',
            }}
        />
    );
}

export default Notification;
