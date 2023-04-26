import { FormInputProps } from '../../types/types';

const FormCheckbox = ({ name, id, label, register }: FormInputProps) => {
  return (
    <div className="goods-filter-checkbox">
      <label className="goods-filter-checkbox__label">
        {label}
        <input
          {...register(name)}
          id={id}
          type="checkbox"
          className="goods-filter-checkbox__input goods-filter-input"
        />
        <span className="goods-filter-checkbox__checkmark"></span>
      </label>
    </div>
  );
};

export default FormCheckbox;
