import { Toast } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Logo_header from '../../styles/assets/images/logo_header_wide.svg';
import {  hideError } from '../../store/toasts/action';

export default function ToastError() {
  const dispatch = useDispatch();
  const error = useSelector(state => state.toasts.error);
  return (
    <Toast
      onClose={() => dispatch(hideError())}
      show={error.show}
      className="error-message rounded-0"
      delay={3000}
      autohide
    >
      <Toast.Header className="d-flex justify-content-between ">
        <div>
          {' '}
          <img
            src={Logo_header}
            className="rounded me-2"
            alt="logo"
            width="30px"
          />
          <strong className="ml-2">Activites</strong>
        </div>
      </Toast.Header>
      <Toast.Body className="text-center bg-red px-5">
        <p className="m-0 text-gray-600">{error.message}</p>
      </Toast.Body>
    </Toast>
  );
}
