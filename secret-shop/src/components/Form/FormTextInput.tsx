import FormErrorMessage from './FormErrorMessage';
import { FormInputProps, ValidationSchemaTextInput } from '../../types/types';

const FormTextInput = ({
  name,
  id,
  label,
  register,
  validationSchema,
  errors,
}: FormInputProps & ValidationSchemaTextInput) => {
  return (
    <div className="form__element-wrap">
      <label htmlFor={id} className="form__element-label">
        {label}
      </label>
      <input
        {...register(name, validationSchema)}
        type="text"
        id={id}
        className="form__element-input"
      />
      {errors?.[name] && <FormErrorMessage message={errors?.[name]?.message || 'Errors'} />}
    </div>
  );
};

export default FormTextInput;
