import FormErrorMessage from './FormErrorMessage';
import { FormInputProps, ValidationSchemaFileInput } from '../../types/types';

const FormFileInput = ({
  name,
  id,
  label,
  register,
  validationSchema,
  errors,
}: FormInputProps & ValidationSchemaFileInput) => {
  return (
    <div className="form__element-wrap">
      <label htmlFor={id} className="form__element-label">
        {label}
      </label>
      <input
        {...register(name, validationSchema)}
        type="file"
        accept="image/png, image/jpeg"
        id={id}
        className="form__element-input"
      />
      {errors?.[name] && <FormErrorMessage message={errors?.[name]?.message || 'Errors'} />}
    </div>
  );
};

export default FormFileInput;
