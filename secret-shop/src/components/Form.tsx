import React from 'react';
import FormTextInput from './FormTextInput';
import { FormState } from '../types/types';
import '../styles/blocks/form.scss';

type TForm = {
  [key: string]: never;
};

class Form extends React.Component<TForm, FormState> {
  constructor(props: TForm) {
    super(props);
    this.state = {
      itemName: '',
      heroName: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value: string, field: string) {
    this.setState((formState) => {
      return {
        ...formState,
        [field]: value,
      };
    });
  }

  render() {
    return (
      <form action="" className="form">
        <FormTextInput
          label="Item name"
          name="itemName"
          id="formItemName"
          inputValue={(value) => this.handleChange(value, 'itemName')}
        />
        <FormTextInput
          label="Hero name"
          name="heroName"
          id="formHeroName"
          inputValue={(value) => this.handleChange(value, 'heroName')}
        />
        <input className="form__submit" type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
