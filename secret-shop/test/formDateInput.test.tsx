import React from 'react';
import FormDateInput from '../src/components/form/FormDateInput';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('FormDateInput component', () => {
  it('set date', async () => {
    const user = userEvent.setup();
    render(<FormDateInput label="Date of creation" name="date" id="formDate" valid={false} />);
    const dateInput = screen.getByLabelText('Date of creation');
    await user.type(dateInput, '2023-01-01');
    expect(dateInput).toHaveValue('2023-01-01');
  });
});
