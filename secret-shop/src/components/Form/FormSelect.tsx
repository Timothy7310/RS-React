import FormErrorMessage from './FormErrorMessage';
import genresOptions from '../../assets/rarityOptions';
import { FormInputProps, ValidationSchemaSelect } from '../../types/types';

const FormSelect = ({
  name,
  id,
  label,
  register,
  validationSchema,
  errors,
}: FormInputProps & ValidationSchemaSelect) => {
  return (
    <div className="form__element-wrap">
      <label htmlFor={id} className="form__element-label">
        {label}
      </label>
      <select id={id} className="form__element-input" {...register(name, validationSchema)}>
        <option value="" hidden>
          Choose one
        </option>
        {genresOptions.map((x) => (
          <option key={x.id} value={x.name}>
            {x.name}
          </option>
        ))}
      </select>
      {errors?.[name] && <FormErrorMessage message={errors?.[name]?.message || 'Errors'} />}
    </div>
  );
};

export default FormSelect;
