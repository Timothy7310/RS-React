import React from 'react';
import FormTextInput from './FormTextInput';
import FormDateInput from './FormDateInput';
import FormSelect from './FormSelect';
import FormCheckbox from './FormCheckbox';
import FormChekboxWrap from './FormChekboxWrap';
import FormRadio from './FormRadio';
import FormRadioWrap from './FormRadioWrap';
import FormNumberInput from './FormNumberInput';
import { FormState, FormProps, FormCard } from '../../types/types';
import FormFileInput from './FormFileInput';
import '../../styles/blocks/form.scss';

type FormFields =
  | 'itemName'
  | 'heroName'
  | 'date'
  | 'rarity'
  | 'hasBuy'
  | 'side'
  | 'itemImage1'
  | 'itemImage2'
  | 'heroImage'
  | 'price';

class Form extends React.Component<FormProps, FormState> {
  formRef: React.RefObject<HTMLFormElement>;
  itemNameRef: React.RefObject<FormTextInput>;
  heroNameRef: React.RefObject<FormTextInput>;
  dateRef: React.RefObject<FormDateInput>;
  rarityRef: React.RefObject<FormSelect>;
  hasBuyRef: React.RefObject<FormCheckbox>;
  sideDireRef: React.RefObject<FormRadio>;
  sideRadiantRef: React.RefObject<FormRadio>;
  itemImageRef: React.RefObject<FormFileInput>;
  heroImageRef: React.RefObject<FormFileInput>;
  priceRef: React.RefObject<FormNumberInput>;

  constructor(props: FormProps) {
    super(props);
    this.state = {
      itemName: {
        value: '',
        isError: false,
      },
      heroName: {
        value: '',
        isError: false,
      },
      date: {
        value: '',
        isError: false,
      },
      rarity: {
        value: '',
        isError: false,
      },
      hasBuy: {
        value: false,
        isError: false,
      },
      side: {
        value: '',
        isError: false,
      },
      itemImage1: {
        value: '',
        isError: false,
      },
      itemImage2: {
        value: '',
        isError: false,
      },
      heroImage: {
        value: '',
        isError: false,
      },
      price: {
        value: 0,
        isError: false,
      },
    };
    this.formRef = React.createRef();
    this.itemNameRef = React.createRef<FormTextInput>();
    this.heroNameRef = React.createRef<FormTextInput>();
    this.dateRef = React.createRef<FormDateInput>();
    this.rarityRef = React.createRef<FormSelect>();
    this.hasBuyRef = React.createRef<FormCheckbox>();
    this.sideDireRef = React.createRef<FormRadio>();
    this.sideRadiantRef = React.createRef<FormRadio>();
    this.itemImageRef = React.createRef<FormFileInput>();
    this.heroImageRef = React.createRef<FormFileInput>();
    this.priceRef = React.createRef<FormNumberInput>();
    this.saveCardInfo = this.saveCardInfo.bind(this);
    this.hasErrors = this.hasErrors.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.checkItemName = this.checkItemName.bind(this);
    this.checkHeroName = this.checkHeroName.bind(this);
    this.checkPrice = this.checkPrice.bind(this);
    this.checkItemImage = this.checkItemImage.bind(this);
    this.checkHeroImage = this.checkHeroImage.bind(this);
    this.checkValid = this.checkValid.bind(this);
    this.getImageUrl = this.getImageUrl.bind(this);
    this.getInfo = this.getInfo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  saveCardInfo() {
    const cards: FormCard = Object.fromEntries(
      Object.entries(this.state).map((x) => [x[0], x[1].value])
    );
    this.props.cardValue(cards);
  }

  hasErrors() {
    const errors: boolean[] = Object.entries(this.state).map((x) => x[1].isError);
    return errors.includes(true);
  }

  handleChange(value: string | boolean | number, field: FormFields) {
    this.setState((formState) => {
      return {
        ...formState,
        [field]: {
          ...formState[field],
          value,
        },
      };
    });
  }

  async checkItemName() {
    const itemNameValue = this.itemNameRef?.current?.textInputRef?.current?.value
      .replace(/\s{2,}/g, ' ')
      .trim();
    if ((itemNameValue?.length as number) < 10) {
      this.setState({
        ...this.state,
        itemName: {
          ...this.state.itemName,
          isError: true,
        },
      });
    } else {
      this.setState({
        ...this.state,
        itemName: {
          ...this.state.itemName,
          isError: false,
        },
      });
    }
  }

  async checkHeroName() {
    const heroNameValue = this.heroNameRef?.current?.textInputRef?.current?.value
      .replace(/\s{2,}/g, ' ')
      .trim();

    if ((heroNameValue?.length as number) < 2) {
      this.setState({
        ...this.state,
        heroName: {
          ...this.state.heroName,
          isError: true,
        },
      });
    } else {
      this.setState({
        ...this.state,
        heroName: {
          ...this.state.heroName,
          isError: false,
        },
      });
    }
  }

  async checkPrice() {
    const priceValue = Number(this.priceRef.current?.numberInputRef.current?.value);
    if (priceValue <= 0) {
      this.setState({
        ...this.state,
        price: {
          ...this.state.price,
          isError: true,
        },
      });
    } else {
      this.setState({
        ...this.state,
        price: {
          ...this.state.price,
          isError: false,
        },
      });
    }
  }

  async checkItemImage() {
    if (this.state.itemImage1.value === '') {
      this.setState({
        ...this.state,
        itemImage1: {
          ...this.state.itemImage1,
          isError: true,
        },
      });
    } else {
      this.setState({
        ...this.state,
        itemImage1: {
          ...this.state.itemImage1,
          isError: false,
        },
      });
    }
  }

  async checkHeroImage() {
    if (this.state.heroImage.value === '') {
      this.setState({
        ...this.state,
        heroImage: {
          ...this.state.heroImage,
          isError: true,
        },
      });
    } else {
      this.setState({
        ...this.state,
        heroImage: {
          ...this.state.heroImage,
          isError: false,
        },
      });
    }
  }

  async checkValid() {
    await this.checkItemName();
    await this.checkHeroName();
    await this.checkPrice();
    await this.checkItemImage();
    await this.checkHeroImage();
  }

  getImageUrl(files: FileList) {
    let file = '';
    if (files) {
      if (['image/jpeg', 'image/png'].includes(files[0].type)) {
        file = URL.createObjectURL(files[0]);
      }
    }
    return file;
  }

  async getInfo() {
    this.setState((formState) => {
      return {
        ...formState,
        itemName: {
          ...formState.itemName,
          value: this.itemNameRef.current?.textInputRef.current?.value as string,
        },
        heroName: {
          ...formState.heroName,
          value: this.heroNameRef.current?.textInputRef.current?.value as string,
        },
        date: {
          ...formState.date,
          value: this.dateRef.current?.dateInputRef.current?.value as string,
        },
        rarity: {
          ...formState.rarity,
          value: this.rarityRef.current?.selectRef.current?.value as string,
        },
        hasBuy: {
          ...formState.hasBuy,
          value: this.hasBuyRef.current?.checkboxRef.current?.checked as boolean,
        },
        side: {
          ...formState.side,
          value: this.sideDireRef.current?.radioRef.current?.checked
            ? (this.sideDireRef.current.radioRef.current.value as string)
            : (this.sideRadiantRef.current?.radioRef.current?.value as string),
        },
        itemImage1: {
          ...formState.itemImage1,
          value: this.getImageUrl(
            this.itemImageRef.current?.fileInputRef.current?.files as FileList
          ) as string,
        },
        heroImage: {
          ...formState.heroImage,
          value: this.getImageUrl(
            this.heroImageRef.current?.fileInputRef.current?.files as FileList
          ) as string,
        },
        price: {
          ...formState.price,
          value: Number(this.priceRef.current?.numberInputRef.current?.value) as number,
        },
      };
    });
  }

  async handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    await this.getInfo();
    await this.checkValid();
    if (!this.hasErrors()) {
      this.saveCardInfo();
      alert('New card created');
      this.formRef.current?.reset();
    }
  }

  render() {
    return (
      <form
        data-testid="form"
        action=""
        onSubmit={this.handleSubmit}
        className="form"
        ref={this.formRef}
      >
        <FormTextInput
          label="Item name"
          name="itemName"
          id="formItemName"
          ref={this.itemNameRef}
          valid={this.state.itemName.isError}
        />
        <FormTextInput
          label="Hero name"
          name="heroName"
          id="formHeroName"
          ref={this.heroNameRef}
          valid={this.state.heroName.isError}
        />
        <FormDateInput
          label="Date of creation"
          name="date"
          id="formDate"
          ref={this.dateRef}
          valid={this.state.date.isError}
        />
        <FormSelect
          label="Rarity"
          name="rarity"
          id="formRarity"
          ref={this.rarityRef}
          valid={this.state.rarity.isError}
        />
        <FormChekboxWrap valid={this.state.hasBuy.isError}>
          <FormCheckbox label="Buy button" name="hasBuy" id="hasBuy" ref={this.hasBuyRef} />
        </FormChekboxWrap>
        <FormRadioWrap valid={this.state.side.isError}>
          <FormRadio label="radiant" name="side" id="sideRadiant" ref={this.sideRadiantRef} />
          <FormRadio label="dire" name="side" id="sideDire" ref={this.sideDireRef} />
        </FormRadioWrap>
        <FormFileInput
          label="Item image"
          name="itemImage"
          id="itemImage"
          ref={this.itemImageRef}
          valid={this.state.itemImage1.isError}
        />
        <FormFileInput
          label="Hero image"
          name="heroImage"
          id="heroImage"
          ref={this.heroImageRef}
          valid={this.state.heroImage.isError}
        />
        <FormNumberInput
          label="Price"
          name="price"
          id="formItemPrice"
          ref={this.priceRef}
          valid={this.state.price.isError}
        />
        <input className="form__submit" type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
