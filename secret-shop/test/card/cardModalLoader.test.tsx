import React from 'react';
import CardModalLoader from '../../src/components/Card/CardModalLoader';
import { describe, it } from 'vitest';
import { render } from '@testing-library/react';

describe('CardModal component', () => {
  it('render', () => {
    render(<CardModalLoader />);
  });
});
