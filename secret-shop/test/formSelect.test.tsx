import React from 'react';
import FormSelect from '../src/components/form/FormSelect';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('FormSelect component', () => {
  it('render', async () => {
    const user = userEvent.setup();
    render(
      <FormSelect
        label="Rarity"
        name="rarity"
        id="formRarity"
        inputValue={(value) => {
          console.log(value);
        }}
        valid={false}
      />
    );
    const select = screen.getByLabelText('Rarity') as HTMLSelectElement;
    await user.selectOptions(select, 'arcana');
    expect(select.value).toBe('arcana');
  });
});
