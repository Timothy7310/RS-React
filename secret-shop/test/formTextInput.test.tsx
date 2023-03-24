import React from 'react';
import FormTextInput from '../src/components/form/FormTextInput';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('FormTextInput component', () => {
  it('render', async () => {
    const user = userEvent.setup();
    render(
      <FormTextInput
        label="Item name"
        name="itemName"
        id="formItemName"
        inputValue={(value) => {
          console.log(value);
        }}
        valid={false}
      />
    );
    const input = screen.getByLabelText('Item name') as HTMLInputElement;
    await user.type(input, 'qwerty');
    expect(input.value).toBe('qwerty');
  });
});
