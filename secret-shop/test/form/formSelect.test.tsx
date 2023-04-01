import React from 'react';
import { useForm } from 'react-hook-form';
import FormSelect from '../../src/components/form/FormSelect';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const FormSelectWrap = () => {
  const {
    register,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
  });

  return (
    <FormSelect
      name="rarity"
      id="formRarity"
      label="Rarity"
      register={register}
      validationSchema={{
        required: 'Required to fill in 👺',
      }}
      errors={errors}
    />
  );
};

describe('FormSelect component', () => {
  it('select option', async () => {
    const user = userEvent.setup();
    render(<FormSelectWrap />);
    const select = screen.getByLabelText('Rarity') as HTMLSelectElement;
    await user.selectOptions(select, 'arcana');
    expect(select.value).toBe('arcana');
  });
});
