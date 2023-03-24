import React from 'react';
import FormNumberInput from '../src/components/form/FormNumberInput';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('FormNumberInput component', () => {
  it('render', async () => {
    const user = userEvent.setup();
    render(
      <FormNumberInput
        label="Price"
        name="price"
        id="formItemPrice"
        inputValue={(value) => {
          console.log(value);
        }}
        valid={false}
      />
    );
    const input = screen.getByLabelText('Price') as HTMLInputElement;
    await user.type(input, '5');
    expect(input.value).toBe('5');
  });
});
