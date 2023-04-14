import React from 'react';
import { describe, it } from 'vitest';
import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../src/App';

import renderWithProviders from '../src/helper/testWithStore';

describe('App test', () => {
  it('App render', () => {
    renderWithProviders(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    screen.debug();
  });
});
