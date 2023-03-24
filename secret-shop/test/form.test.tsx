import React from 'react';
import Form from '../src/components/form/Form';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('FormSelect component', () => {
  it('render', async () => {
    render(
      <Form
        cardValue={(value) => {
          console.log(value);
        }}
      />
    );
  });
});
