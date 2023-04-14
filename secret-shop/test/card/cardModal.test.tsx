import React from 'react';
import CardModal from '../../src/components/Card/CardModal';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Card } from '../../src/types/types';
import { movie } from '../../src/mocks/data';

describe('CardModal component', () => {
  it('render', () => {
    render(
      <CardModal movie={movie as unknown as Card} closeModal={(isOpen) => console.log(isOpen)} />
    );

    expect(screen.getByText('The Green Mile'));
  });
});
