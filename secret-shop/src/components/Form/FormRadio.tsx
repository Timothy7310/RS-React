import { FormInputProps, ValidationSchemaRadio } from '../../types/types';

const FormRadio = ({
  name,
  id,
  label,
  register,
  validationSchema,
}: FormInputProps & ValidationSchemaRadio) => {
  return (
    <div className="goods-filter-radio">
      <label className="goods-filter-radio__label">
        {label}
        <input
          className="goods-filter-radio__input goods-filter-input"
          type="radio"
          value={label}
          id={id}
          {...register(name, validationSchema)}
        />
        <span className="goods-filter-radio__checkmark"></span>
      </label>
    </div>
  );
};

export default FormRadio;
