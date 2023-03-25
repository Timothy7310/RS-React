import React from 'react';
import { FormElementsProps, FormTextInputProps } from '../../types/types';
import rarityOptions from '../../assets/rarityOptions';
import FormErrorMessage from './FormErrorMessage';

class FormSelect extends React.Component<FormElementsProps & FormTextInputProps> {
  selectRef: React.RefObject<HTMLSelectElement>;

  constructor(props: FormElementsProps & FormTextInputProps) {
    super(props);
    this.selectRef = React.createRef();
  }

  render() {
    return (
      <div className="form__element-wrap">
        <label htmlFor={this.props.id} className="form__element-label">
          {this.props.label}
        </label>
        <select
          ref={this.selectRef}
          name={this.props.name}
          id={this.props.id}
          className="form__element-input"
          required
        >
          <option value="" hidden>
            Choose one
          </option>
          {rarityOptions.map((x) => (
            <option key={x.id} value={x.name}>
              {x.name}
            </option>
          ))}
        </select>
        <FormErrorMessage valid={this.props.valid} message="Ops some mistake! try harder" />
      </div>
    );
  }
}

export default FormSelect;
