import React from 'react';
import { FormErrorMessageProps } from '../../types/types';

class FormErrorMessage extends React.Component<FormErrorMessageProps> {
  render() {
    return this.props.valid && <div className="form-error">{this.props.message}</div>;
  }
}

export default FormErrorMessage;
