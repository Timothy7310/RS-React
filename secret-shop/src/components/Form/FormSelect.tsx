import React from 'react';
import { FormElementsProps, FormTextInputProps } from '../../types/types';
import rarityOptions from '../../assets/rarityOptions';

class FormSelect extends React.Component<FormElementsProps & FormTextInputProps> {
  selectRef: React.RefObject<HTMLSelectElement>;

  constructor(props: FormElementsProps & FormTextInputProps) {
    super(props);
    this.selectRef = React.createRef();
  }

  handleChange() {
    this.props.inputValue(this.selectRef.current?.value || '');
  }

  render() {
    return (
      <div className="form__element-wrap">
        <label htmlFor={this.props.id} className="form__element-label">
          {this.props.label}
        </label>
        <select
          ref={this.selectRef}
          onChange={() => this.handleChange()}
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
      </div>
    );
  }
}

export default FormSelect;
