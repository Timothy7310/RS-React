import { useForm } from 'react-hook-form';
import { FormProps, FormCard } from '../../types/types';
import FormTextInput from './FormTextInput';
import FormDateInput from './FormDateInput';
import FormSelect from './FormSelect';
import FormNumberInput from './FormNumberInput';
import FormChekboxWrap from './FormChekboxWrap';
import FormRadioWrap from './FormRadioWrap';
import FormCheckbox from './FormCheckbox';
import FormRadio from './FormRadio';
import FormFileInput from './FormFileInput';

import '../../styles/blocks/form.scss';

const Form = ({ cardValue }: FormProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onSubmit',
  });

  const onSubmit = (data: FormCard) => {
    const itemImageSrc = URL.createObjectURL((data.itemImage1 as FileList)[0]);
    const heroImageSrc = URL.createObjectURL((data.heroImage as FileList)[0]);
    cardValue({ ...data, itemImage1: itemImageSrc, heroImage: heroImageSrc });
    reset();
  };

  return (
    <form data-testid="form" action="" onSubmit={handleSubmit(onSubmit)} className="form">
      <FormTextInput
        name="itemName"
        id="itemName"
        label="Item Name"
        register={register}
        validationSchema={{
          required: 'Required to fill in 👺',
          minLength: {
            value: 10,
            message: 'Minimum of 10 characters 💔',
          },
        }}
        errors={errors}
      />
      <FormTextInput
        name="heroName"
        id="heroName"
        label="Hero Name"
        register={register}
        validationSchema={{
          required: 'Required to fill in 👺',
          minLength: {
            value: 2,
            message: 'Minimum of 2 characters 💔',
          },
        }}
        errors={errors}
      />
      <FormDateInput
        name="date"
        id="formDate"
        label="Date of creation"
        register={register}
        validationSchema={{
          required: 'Required to fill in 👺',
          min: {
            value: '2000-01-01',
            message: 'Not before 2000-01-01 🕒',
          },
          max: {
            value: '2032-01-01',
            message: 'No later than 2023-01-01 🕒',
          },
        }}
        errors={errors}
      />
      <FormSelect
        name="rarity"
        id="formRarity"
        label="Rarity"
        register={register}
        validationSchema={{
          required: 'Required to fill in 👺',
        }}
        errors={errors}
      />
      <FormChekboxWrap
        valid={(errors?.hasBuy?.type ?? false) as boolean}
        message={(errors.hasBuy?.message || 'Error') as string}
      >
        <FormCheckbox name="hasBuy" id="hasBuy" label="Buy button" register={register} />
      </FormChekboxWrap>
      <FormRadioWrap
        valid={(errors?.side?.type ?? false) as boolean}
        message={(errors.side?.message || 'Error') as string}
      >
        <FormRadio
          name="side"
          label="radiant"
          id="sideRadiant"
          register={register}
          validationSchema={{
            required: 'Required to fill in 👺',
          }}
        />
        <FormRadio
          name="side"
          label="dire"
          id="sideRadiant"
          register={register}
          validationSchema={{
            required: 'Required to fill in 👺',
          }}
        />
      </FormRadioWrap>
      <FormFileInput
        name="itemImage1"
        label="Item image"
        id="itemImage"
        register={register}
        validationSchema={{
          required: 'Required to fill in 👺',
          validate: {
            typeImg: (value) =>
              (value.length > 0 && value[0].type.startsWith('image')) || 'Must be an image 🖼️',
          },
        }}
        errors={errors}
      />
      <FormFileInput
        name="heroImage"
        label="Hero image"
        id="heroImage"
        register={register}
        validationSchema={{
          required: 'Required to fill in 👺',
          validate: {
            typeImg: (value) =>
              (value.length > 0 && value[0].type.startsWith('image')) || 'Must be an image 🖼️',
          },
        }}
        errors={errors}
      />
      <FormNumberInput
        name="price"
        id="formItemPrice"
        label="Price"
        register={register}
        validationSchema={{
          required: 'Required to fill in 👺',
          min: {
            value: 1,
            message: 'Must be greater than 0 💰',
          },
        }}
        errors={errors}
      />
      <input className="form__submit" type="submit" value="Submit" />
    </form>
  );
};

export default Form;
