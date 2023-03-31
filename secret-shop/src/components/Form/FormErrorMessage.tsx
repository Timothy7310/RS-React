import { FormErrorMessageProps } from '../../types/types';

const FormErrorMessage = ({ message }: FormErrorMessageProps) => (
  <div className="form-error">{message}</div>
);

export default FormErrorMessage;
