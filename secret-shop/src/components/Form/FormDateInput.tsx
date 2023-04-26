import FormErrorMessage from './FormErrorMessage';
import { FormInputProps, ValidationSchemaDateInput } from '../../types/types';

const FormDateInput = ({
  name,
  id,
  label,
  register,
  validationSchema,
  errors,
}: FormInputProps & ValidationSchemaDateInput) => {
  return (
    <div className="form__element-wrap">
      <label htmlFor={id} className="form__element-label">
        {label}
      </label>
      <input
        type="date"
        id={id}
        className="form__element-input"
        {...register(name, validationSchema)}
      />
      {errors?.[name] && <FormErrorMessage message={errors?.[name]?.message || 'Errors'} />}
    </div>
  );
};

export default FormDateInput;
