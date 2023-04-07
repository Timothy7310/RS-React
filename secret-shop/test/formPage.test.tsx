import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { MemoryRouter } from 'react-router-dom';
import App from '../src/App';
import React from 'react';
import '@testing-library/jest-dom';

describe('FormPage component', () => {
  it('render page', () => {
    render(
      <MemoryRouter initialEntries={['/form']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('Current Page: Form')).toBeInTheDocument();
  });
});
