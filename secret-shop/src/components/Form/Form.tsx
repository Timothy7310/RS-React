import React from 'react';
import FormTextInput from './FormTextInput';
import FormDateInput from './FormDateInput';
import FormSelect from './FormSelect';
import FormCheckbox from './FormCheckbox';
import FormChekboxWrap from './FormChekboxWrap';
import FormRadio from './FormRadio';
import FormRadioWrap from './FormRadioWrap';
import FormNumberInput from './FormNumberInput';
import { FormState, FormProps } from '../../types/types';
import FormFileInput from './FormFileInput';
import '../../styles/blocks/form.scss';

class Form extends React.Component<FormProps, FormState> {
  formRef: React.RefObject<HTMLFormElement>;

  constructor(props: FormProps) {
    super(props);
    this.state = {
      itemName: '',
      heroName: '',
      date: '',
      rarity: '',
      hasBuy: false,
      side: '',
      itemImage1: '',
      itemImage2: '',
      heroImage: '',
      price: 0,
    };
    this.formRef = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.saveCardInfo = this.saveCardInfo.bind(this);
  }

  saveCardInfo(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    this.formRef.current?.reset();
    this.props.cardValue(this.state);
  }

  handleChange(value: string | boolean | number, field: string) {
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
      <form action="" onSubmit={this.saveCardInfo} className="form" ref={this.formRef}>
        <FormTextInput
          label="Item name"
          name="itemName"
          id="formItemName"
          inputValue={(value) => this.handleChange(value, 'itemName')}
          valid={true}
        />
        <FormTextInput
          label="Hero name"
          name="heroName"
          id="formHeroName"
          inputValue={(value) => this.handleChange(value, 'heroName')}
          valid={false}
        />
        <FormDateInput
          label="Date of creation"
          name="date"
          id="formDate"
          inputValue={(value) => this.handleChange(value, 'date')}
          valid={true}
        />
        <FormSelect
          label="Rarity"
          name="rarity"
          id="formRarity"
          inputValue={(value) => this.handleChange(value, 'rarity')}
          valid={true}
        />
        <FormChekboxWrap valid={true}>
          <FormCheckbox
            label="Buy button"
            name="hasBuy"
            id="hasBuy"
            inputValue={(value) => this.handleChange(value, 'hasBuy')}
          />
        </FormChekboxWrap>
        <FormRadioWrap valid={false}>
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
        <FormFileInput
          label="Item image"
          name="itemImage"
          id="itemImage"
          inputValue={(value) => this.handleChange(value, 'itemImage1')}
          valid={true}
        />
        <FormFileInput
          label="Hero image"
          name="heroImage"
          id="heroImage"
          inputValue={(value) => this.handleChange(value, 'heroImage')}
          valid={false}
        />
        <FormNumberInput
          label="Price"
          name="price"
          id="formItemPrice"
          inputValue={(value) => this.handleChange(value, 'price')}
          valid={true}
        />
        <input className="form__submit" type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
