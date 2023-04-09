import React from 'react';
import { useForm } from 'react-hook-form';
import FormFileInput from '../../src/components/form/FormFileInput';
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

const FormFileInputWrap = () => {
  const {
    register,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
  });

  return (
    <FormFileInput
      name="itemImage1"
      label="Item image"
      id="itemImage"
      register={register}
      validationSchema={{
        required: 'Required to fill in 👺',
        validate: {
          typeImg: (value) =>
            (value.length > 0 && value[0].type.startsWith('image')) || 'Must be an image 🖼️',
        },
      }}
      errors={errors}
    />
  );
};

describe('FormFileInput component', () => {
  it('render', () => {
    render(<FormFileInputWrap />);
    const fileInput = screen.getByLabelText('Item image');
    expect(fileInput).toBeInTheDocument();
  });
  it('load file', () => {
    render(<FormFileInputWrap />);
    const itemImage = new File(['arcana'], 'arcana.jpg', { type: 'image/jpg' });
    const fileInput = screen.getByLabelText('Item image') as HTMLInputElement;

    fireEvent.change(fileInput, { target: { files: [itemImage] } });
    const fileImage = fileInput.files ? fileInput.files[0]?.name : '';
    expect(fileImage).toBe('arcana.jpg');
    expect(fileInput.files).toHaveLength(1);
  });
});
