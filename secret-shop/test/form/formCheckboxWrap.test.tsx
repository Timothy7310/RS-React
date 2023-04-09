import React from 'react';
import FormChekboxWrap from '../../src/components/form/FormChekboxWrap';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('FormCheckboxWrap component', () => {
  it('render', () => {
    render(<FormChekboxWrap valid={false} message={''}></FormChekboxWrap>);
    const checkboxWrap = screen.getByText('Show Elements');
    expect(checkboxWrap).toBeInTheDocument();
  });
});
