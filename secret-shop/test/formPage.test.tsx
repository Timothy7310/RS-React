import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/dom';
import { MemoryRouter } from 'react-router-dom';
import App from '../src/App';
import React from 'react';
import '@testing-library/jest-dom';
import renderWithProviders from '../src/helper/testWithStore';

describe('FormPage component', () => {
  it('render page', () => {
    renderWithProviders(
      <MemoryRouter initialEntries={['/form']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('Current Page: Form')).toBeInTheDocument();
  });
});
