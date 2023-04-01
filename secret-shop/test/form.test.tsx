import React from 'react';
import Form from '../src/components/form/Form';
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('FormSelect component', () => {
  it('render form elements', async () => {
    render(
      <Form
        cardValue={(value) => {
          console.log(value);
        }}
      />
    );
    const submitButton = screen.getByRole('button');
    const itemNameInput = screen.getByLabelText('Item Name');
    const heroNameInput = screen.getByLabelText('Hero Name');
    const dateInput = screen.getByLabelText('Date of creation');
    const select = screen.getByLabelText('Rarity');
    const checkboxInput = screen.getByLabelText('Buy button');
    const radiantRadiantSide = screen.getByLabelText('radiant');
    const direRadiantSide = screen.getByLabelText('dire');
    const itemImage = screen.getByLabelText('Item image');
    const heroImage = screen.getByLabelText('Hero image');
    const priceInput = screen.getByLabelText('Price');

    expect(submitButton).toBeInTheDocument();
    expect(itemNameInput).toBeInTheDocument();
    expect(heroNameInput).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();
    expect(select).toBeInTheDocument();
    expect(checkboxInput).toBeInTheDocument();
    expect(radiantRadiantSide).toBeInTheDocument();
    expect(direRadiantSide).toBeInTheDocument();
    expect(itemImage).toBeInTheDocument();
    expect(heroImage).toBeInTheDocument();
    expect(priceInput).toBeInTheDocument();
  });

  it('create card', async () => {
    const user = userEvent.setup();

    render(
      <Form
        cardValue={(value) => {
          console.log(value);
        }}
      />
    );

    const form = screen.getByTestId('form');
    const itemNameInput = screen.getByLabelText('Item Name');
    const heroNameInput = screen.getByLabelText('Hero Name');
    const dateInput = screen.getByLabelText('Date of creation');
    const select = screen.getByLabelText('Rarity');
    const checkboxInput = screen.getByLabelText('Buy button');
    const radiantRadiantSide = screen.getByLabelText('radiant');
    const itemImage = screen.getByLabelText('Item image');
    const heroImage = screen.getByLabelText('Hero image');
    const priceInput = screen.getByLabelText('Price');

    const itemImageFile = new File(['arcana-io'], 'arcana-io.jpg', { type: 'image/jpg' });
    const heroImageFile = new File(['io'], 'io.jpg', { type: 'image/jpg' });

    fireEvent.change(itemNameInput, { target: { value: 'Io Arcana' } });
    fireEvent.change(heroNameInput, { target: { value: 'Io' } });
    fireEvent.change(dateInput, { target: { value: '2023-03-13' } });
    await user.selectOptions(select, 'arcana');
    fireEvent.click(checkboxInput);
    fireEvent.click(radiantRadiantSide);
    fireEvent.change(itemImage, { target: { files: [itemImageFile] } });
    fireEvent.change(heroImage, { target: { files: [heroImageFile] } });
    fireEvent.change(priceInput, { target: { value: 2100 } });
    fireEvent.submit(form);
  });
});
