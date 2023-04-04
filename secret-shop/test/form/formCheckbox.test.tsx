import React from 'react';
import { useForm } from 'react-hook-form';
import FormCheckbox from '../../src/components/Form/FormCheckbox';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

const FormCheckboxWrap = () => {
  const { register } = useForm({
    mode: 'onSubmit',
  });

  return <FormCheckbox name="hasBuy" id="hasBuy" label="Buy button" register={register} />;
};

describe('FormCheckbox component', () => {
  it('render', () => {
    render(<FormCheckboxWrap />);
    const checkbox = screen.getByLabelText('Buy button');
    expect(checkbox).toBeInTheDocument();
  });
});
