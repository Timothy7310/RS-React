import React from 'react';
import Search from '../src/components/Search';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('CardItem component', () => {
  it('render with typing', async () => {
    const user = userEvent.setup();
    render(<Search />);
    await user.type(screen.getByRole<HTMLInputElement>('searchbox'), 'Test message');
    expect(screen.getByRole<HTMLInputElement>('searchbox').value).toBe('Test message');
  });
});
