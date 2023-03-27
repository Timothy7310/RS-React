import React from 'react';
import FormFileInput from '../src/components/form/FormFileInput';
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

describe('FormSelect component', () => {
  it('load file', () => {
    render(<FormFileInput label="Item image" name="itemImage" id="itemImage" valid={false} />);
    const itemImage = new File(['arcana'], 'arcana.jpg', { type: 'image/jpg' });
    const fileInput = screen.getByLabelText('Item image') as HTMLInputElement;

    fireEvent.change(fileInput, { target: { files: [itemImage] } });
    const fileImage = fileInput.files ? fileInput.files[0]?.name : '';
    expect(fileImage).toBe('arcana.jpg');
    expect(fileInput.files).toHaveLength(1);
  });
  it('render with error', async () => {
    render(<FormFileInput label="Item image" name="itemImage" id="itemImage" valid={true} />);
    expect(screen.getByText('Ops some mistake! try harder'));
  });
});
