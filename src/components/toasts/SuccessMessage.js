import { Toast } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Logo_header from '../../styles/assets/images/logo_header_wide.svg';
import { hideSuccess } from '../../store/toasts/action';

export default function ToastSuccess() {
  const dispatch = useDispatch();
  const success = useSelector(state => state.toasts.success);
  return (
    <Toast
      onClose={() => dispatch(hideSuccess())}
      show={success.show}
      className="toast-message"
      delay={3000}
      autohide
    >
      <Toast.Header className="d-flex justify-content-between">
        <div>
          {' '}
          <img
            src={Logo_header}
            className="rounded me-2"
            alt="logo "
            width="30px"
          />
          <strong className="ml-2">Activities</strong>
        </div>
      </Toast.Header>
      <Toast.Body className="text-center px-5"><p className='m-0 text-gray-600'>{success.message}</p></Toast.Body>
    </Toast>
  );
}
