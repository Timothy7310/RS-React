import React from 'react';
import { FormElementsProps, FormTextInputProps } from '../../types/types';
import FormErrorMessage from './FormErrorMessage';

class FormFileInput extends React.Component<FormElementsProps & FormTextInputProps> {
  fileInputRef: React.RefObject<HTMLInputElement>;

  constructor(props: FormElementsProps & FormTextInputProps) {
    super(props);
    this.fileInputRef = React.createRef();
  }

  handleChange() {
    const files = this.fileInputRef?.current?.files;
    let file = '';
    if (files) {
      if (['image/jpeg', 'image/png'].includes(files[0].type)) {
        file = URL.createObjectURL(files[0]);
      }
    }
    this.props.inputValue(file);
  }

  render() {
    return (
      <div className="form__element-wrap">
        <label htmlFor={this.props.id} className="form__element-label">
          {this.props.label}
        </label>
        <input
          type="file"
          accept="image/png, image/jpeg"
          name={this.props.name}
          onChange={() => this.handleChange()}
          ref={this.fileInputRef}
          id={this.props.id}
          className="form__element-input"
          required
        />
        <FormErrorMessage valid={this.props.valid} message="Ops some mistake! try harder" />
      </div>
    );
  }
}

export default FormFileInput;
