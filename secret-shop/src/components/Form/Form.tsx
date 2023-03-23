import React from 'react';
import FormTextInput from './FormTextInput';
import FormDateInput from './FormDateInput';
import FormSelect from './FormSelect';
import FormCheckbox from './FormCheckbox';
import FormChekboxWrap from './FormChekboxWrap';
import FormRadio from './FormRadio';
import FormRadioWrap from './FormRadioWrap';
import { FormState, EmptyProps } from '../../types/types';
import '../../styles/blocks/form.scss';

class Form extends React.Component<EmptyProps, FormState> {
  constructor(props: EmptyProps) {
    super(props);
    this.state = {
      itemName: '',
      heroName: '',
      date: '',
      rarity: '',
      hasBuy: false,
      side: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value: string | boolean, field: string) {
    this.setState((formState) => {
      console.log(formState);
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
        <FormDateInput
          label="Date of creation"
          name="date"
          id="formDate"
          inputValue={(value) => this.handleChange(value, 'date')}
        />
        <FormSelect
          label="Rarity"
          name="rarity"
          id="formRarity"
          inputValue={(value) => this.handleChange(value, 'rarity')}
        />
        <FormChekboxWrap>
          <FormCheckbox
            label="Buy button"
            name="hasBuy"
            id="hasBuy"
            inputValue={(value) => this.handleChange(value, 'hasBuy')}
          />
        </FormChekboxWrap>
        <FormRadioWrap>
          <FormRadio
            label="radiant"
            name="side"
            id="sideRadiant"
            inputValue={(value) => this.handleChange(value, 'side')}
          />
          <FormRadio
            label="dire"
            name="side"
            id="sideDire"
            inputValue={(value) => this.handleChange(value, 'side')}
          />
        </FormRadioWrap>
        <input className="form__submit" type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
