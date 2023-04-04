import React from 'react';
import { useForm } from 'react-hook-form';
import FormNumberInput from '../../src/components/form/FormNumberInput';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

const FormNumberInputWrap = () => {
  const {
    register,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
  });

  return (
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
  );
};

describe('FormNumberInput component', () => {
  it('render', async () => {
    render(<FormNumberInputWrap />);
    const checkbox = screen.getByLabelText('Price');
    expect(checkbox).toBeInTheDocument();
  });
  it('set value', async () => {
    const user = userEvent.setup();
    render(<FormNumberInputWrap />);
    const input = screen.getByLabelText('Price') as HTMLInputElement;
    await user.type(input, '5');
    expect(input.value).toBe('5');
  });
});
