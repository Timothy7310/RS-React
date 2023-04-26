import React from 'react';
import { useForm } from 'react-hook-form';
import FormTextInput from '../../src/components/Form/FormTextInput';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const FormTextInputWrap = () => {
  const {
    register,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
  });

  return (
    <FormTextInput
      name="itemName"
      id="itemName"
      label="Item Name"
      register={register}
      validationSchema={{
        required: 'Required to fill in 👺',
        minLength: {
          value: 10,
          message: 'Minimum of 10 characters 💔',
        },
      }}
      errors={errors}
    />
  );
};

describe('FormTextInput component', () => {
  it('render', () => {
    render(<FormTextInputWrap />);
    const input = screen.getByLabelText('Item Name');
    expect(input).toBeInTheDocument();
  });
  it('typing', async () => {
    const user = userEvent.setup();
    render(<FormTextInputWrap />);
    const input = screen.getByLabelText('Item Name') as HTMLInputElement;
    await user.type(input, 'qwerty');
    expect(input.value).toBe('qwerty');
  });
});
