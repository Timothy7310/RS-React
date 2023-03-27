import React from 'react';
import FormTextInput from '../src/components/form/FormTextInput';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('FormTextInput component', () => {
  it('typing', async () => {
    const user = userEvent.setup();
    render(<FormTextInput label="Item name" name="itemName" id="formItemName" valid={false} />);
    const input = screen.getByLabelText('Item name') as HTMLInputElement;
    await user.type(input, 'qwerty');
    expect(input.value).toBe('qwerty');
  });
});
