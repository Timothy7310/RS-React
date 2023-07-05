import React from 'react';
import CardItem from '../../src/components/Card/CardItem';
import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import renderWithProviders from '../../src/helper/testWithStore';
import { movie } from '../../src/mocks/data';

describe('CardItem component', () => {
  it('render', () => {
    renderWithProviders(<CardItem card={movie} />);

    expect(screen.getByText('Зеленая миля'));
  });
});
