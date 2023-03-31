import FormErrorMessage from './FormErrorMessage';
import { FormInputProps, ValidationSchemaNumberInput } from '../../types/types';

const FormNumberInput = ({
  name,
  id,
  label,
  register,
  validationSchema,
  errors,
}: FormInputProps & ValidationSchemaNumberInput) => {
  return (
    <div className="form__element-wrap">
      <label htmlFor={id} className="form__element-label">
        {label}
      </label>
      <input
        {...register(name, validationSchema)}
        type="number"
        id={id}
        className="form__element-input"
      />
      {errors?.[name] && <FormErrorMessage message={errors?.[name]?.message || 'Errors'} />}
    </div>
  );
};

export default FormNumberInput;
