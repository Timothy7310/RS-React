import React from 'react';
import { useForm } from 'react-hook-form';
import FormRadio from '../../src/components/Form/FormRadio';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

const FormRadioWrap = () => {
  const { register } = useForm({
    mode: 'onSubmit',
  });

  return (
    <FormRadio
      name="side"
      label="radiant"
      id="sideRadiant"
      register={register}
      validationSchema={{
        required: 'Required to fill in 👺',
      }}
    />
  );
};

describe('FormRadio component', () => {
  it('render', () => {
    render(<FormRadioWrap />);
    const radio = screen.getByLabelText('radiant');
    expect(radio).toBeInTheDocument();
  });
});
