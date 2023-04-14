import { useForm } from 'react-hook-form';
import { FormCard } from '../../types/types';
import FormTextInput from './FormTextInput';
import FormDateInput from './FormDateInput';
import FormSelect from './FormSelect';
import FormNumberInput from './FormNumberInput';
import FormChekboxWrap from './FormChekboxWrap';
import FormRadioWrap from './FormRadioWrap';
import FormCheckbox from './FormCheckbox';
import FormRadio from './FormRadio';
import FormFileInput from './FormFileInput';
import { useAppDispatch } from '../../hooks/redux';
import { formSlice } from '../../redux/reducers/FormReducer';

import '../../styles/blocks/form.scss';

const Form = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onSubmit',
  });

  const onSubmit = (data: FormCard) => {
    const posterImage = URL.createObjectURL((data.poster as FileList)[0]);
    dispatch(formSlice.actions.createCard({ ...data, poster: posterImage }));
    reset();
    alert('awesome card created');
  };

  return (
    <form data-testid="form" action="" onSubmit={handleSubmit(onSubmit)} className="form">
      <FormTextInput
        name="name"
        id="itemName"
        label="Film Name"
        register={register}
        validationSchema={{
          required: 'Required to fill in 👺',
          minLength: {
            value: 5,
            message: 'Minimum of 5 characters 💔',
          },
        }}
        errors={errors}
      />
      <FormSelect
        name="genre"
        id="formRarity"
        label="Genres"
        register={register}
        validationSchema={{
          required: 'Required to fill in 👺',
        }}
        errors={errors}
      />
      <FormRadioWrap
        valid={(errors?.typeWatch?.type ?? false) as boolean}
        message={(errors.typeWatch?.message || 'Error') as string}
      >
        <FormRadio
          name="typeWatch"
          label="Will watch"
          id="sideRadiant"
          register={register}
          validationSchema={{
            required: 'Required to fill in 👺',
          }}
        />
        <FormRadio
          name="typeWatch"
          label="Watched"
          id="sideRadiant"
          register={register}
          validationSchema={{
            required: 'Required to fill in 👺',
          }}
        />
      </FormRadioWrap>
      <FormChekboxWrap
        valid={(errors?.hasRating?.type ?? false) as boolean}
        message={(errors.hasRating?.message || 'Error') as string}
      >
        <FormCheckbox name="hasRating" id="hasRating" label="Rating" register={register} />
      </FormChekboxWrap>
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
      <FormFileInput
        name="poster"
        label="Poster Image"
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
      <FormNumberInput
        name="rating"
        id="rating"
        label="Your Rating"
        register={register}
        validationSchema={{
          required: 'Required to fill in 👺',
          min: {
            value: 1,
            message: 'Must be greater than 0',
          },
          max: {
            value: 10,
            message: 'Max rating is 10',
          },
        }}
        errors={errors}
      />
      <input className="form__submit" type="submit" value="Submit" />
    </form>
  );
};

export default Form;
