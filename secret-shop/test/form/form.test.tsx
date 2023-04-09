import React from 'react';
import Form from '../../src/components/Form/Form';
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Form component', () => {
  it('render form elements', () => {
    render(
      <Form
        cardValue={(value) => {
          console.log(value);
        }}
      />
    );
    const submitButton = screen.getByRole('button');
    const filmNameInput = screen.getByLabelText('Film Name');
    const dateInput = screen.getByLabelText('Date of creation');
    const select = screen.getByLabelText('Genres');
    const checkboxInput = screen.getByText('Rating');
    const willWatchRadio = screen.getByLabelText('Will watch');
    const watchedRadio = screen.getByLabelText('Watched');
    const posterImage = screen.getByLabelText('Poster Image');
    const ratingInput = screen.getByLabelText('Your Rating');

    const form = screen.getByTestId('form');

    expect(submitButton).toBeInTheDocument();
    expect(filmNameInput).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();
    expect(select).toBeInTheDocument();
    expect(checkboxInput).toBeInTheDocument();
    expect(willWatchRadio).toBeInTheDocument();
    expect(watchedRadio).toBeInTheDocument();
    expect(posterImage).toBeInTheDocument();
    expect(ratingInput).toBeInTheDocument();

    expect(form).toBeInTheDocument();
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
    const filmNameInput = screen.getByLabelText('Film Name');
    const dateInput = screen.getByLabelText('Date of creation');
    const select = screen.getByLabelText('Genres');
    const checkboxInput = screen.getByText('Rating');
    const willWatchRadio = screen.getByLabelText('Will watch');
    const posterImage = screen.getByLabelText('Poster Image');
    const ratingInput = screen.getByLabelText('Your Rating');

    const itemImageFile = new File(['arcana-io'], 'arcana-io.jpg', { type: 'image/jpg' });

    fireEvent.change(filmNameInput, { target: { value: 'Io Arcana' } });
    fireEvent.change(dateInput, { target: { value: '2023-03-13' } });
    await user.selectOptions(select, 'Action');
    fireEvent.click(checkboxInput);
    fireEvent.click(willWatchRadio);
    fireEvent.change(posterImage, { target: { files: [itemImageFile] } });
    fireEvent.change(ratingInput, { target: { value: 2100 } });
    fireEvent.submit(form);
  });
});
