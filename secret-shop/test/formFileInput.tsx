import React from 'react';
import FormFileInput from '../src/components/form/FormFileInput';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('FormSelect component', () => {
  it('render with error', async () => {
    render(<FormFileInput label="Item image" name="itemImage" id="itemImage" valid={false} />);
  });
  it('render with error', async () => {
    render(<FormFileInput label="Item image" name="itemImage" id="itemImage" valid={true} />);
    expect(screen.getByText('Ops some mistake! try harder'));
  });
});
