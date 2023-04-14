import React from 'react';
import CardFormList from '../../src/components/Card/CardFormList';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { movieResult } from '../../src/mocks/data';

describe('CardFormList component', () => {
  it('render', () => {
    render(<CardFormList cards={movieResult} />);
    expect(screen.getByText('New Cards'));
  });
});
