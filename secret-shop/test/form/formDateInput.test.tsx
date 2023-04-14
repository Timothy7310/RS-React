import React from 'react';
import { useForm } from 'react-hook-form';
import FormDateInput from '../../src/components/Form/FormDateInput';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const FormDateInputWrap = () => {
  const {
    register,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
  });

  return (
    <FormDateInput
      name="date"
      id="formDate"
      label="Date of creation"
      register={register}
      errors={errors}
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
    />
  );
};

describe('FormDateInput component', () => {
  it('render', () => {
    render(<FormDateInputWrap />);
    const checkbox = screen.getByLabelText('Date of creation');
    expect(checkbox).toBeInTheDocument();
  });
  it('set date', async () => {
    const user = userEvent.setup();
    render(<FormDateInputWrap />);
    const dateInput = screen.getByLabelText('Date of creation');
    await user.type(dateInput, '2023-01-01');
    expect(dateInput).toHaveValue('2023-01-01');
  });
});
