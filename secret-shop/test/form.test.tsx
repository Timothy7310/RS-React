import React from 'react';
import Form from '../src/components/form/Form';
import { describe, it } from 'vitest';
import { render } from '@testing-library/react';

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
