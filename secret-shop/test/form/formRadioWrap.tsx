import React from 'react';
import FormRadioWrap from '../../src/components/form/FormRadioWrap';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('FormRadioWrap component', () => {
  it('render', () => {
    render(<FormRadioWrap valid={false} message={''} />);
    const radioWrap = screen.getByLabelText('radiant');
    expect(radioWrap).toBeInTheDocument();
  });
});
