import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';

test('Renders the BookingForm', () => {
  render(
    <Router>
      <BookingForm availableTime={'12:00'} />
    </Router>
  );
  const submitBtn = screen.getByText('Make Your reservation');
  expect(submitBtn).toBeInTheDocument();
});

test('Updates the time correctly', () => {
  render(
    <Router>
      <BookingForm availableTime={'12:00'} />
    </Router>
  );

  const dateButton = screen.getByLabelText('Choose Date');
  fireEvent.click(dateButton);
  fireEvent.change(dateButton, { target: { value: '2023-5-15' } });
  const timeButton = screen.getByLabelText('Choose Time');
  fireEvent.click(timeButton);
  fireEvent.change(timeButton, { target: { value: '18:00' } });
  expect(timeButton.value).toEqual('18:00');
});

test('should update name field when input is typed', () => {
  const { getByLabelText } = render(
    <Router>
      <BookingForm availableTime={'12:00'} />
    </Router>
  );
  const nameInput = getByLabelText('Name');

  fireEvent.change(nameInput, { target: { value: 'John Doe' } });

  expect(nameInput.value).toBe('John Doe');
});

test('should call handleFormSubmit when form is submitted', () => {
  const values = {
    name: '',
    email: '',
    date: '',
    time: '',
    numberOfGuest: '',
    occasion: '',
    message: '',
  };
  render(
    <Router>
      <BookingForm availableTime={'12:00'} />
    </Router>
  );
  const submitButton = screen.getByText('Make Your reservation');
  const handleFormSubmit = jest.fn();
  fireEvent.click(submitButton);
  expect(handleFormSubmit).toHaveBeenCalledTimes(1);
  expect(handleFormSubmit).toEqual(values);
});

describe('BookingForm', () => {
  const availableTime = {
    '2023-05-15': ['11:00 AM', '12:00 PM', '01:00 PM'],
    '2023-05-16': ['02:00 PM', '03:00 PM', '04:00 PM'],
  };

  beforeEach(() => {
    localStorage.clear();
  });

  it('should render the form fields', () => {
    render(
      <Router>
        <BookingForm availableTime={'12:00'} />
      </Router>
    );

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    // expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/additional requests/i)).toBeInTheDocument();
    // expect(screen.getByLabelText('Make Your reservation')).toBeInTheDocument();
  });

  it('should show validation errors if form fields are empty', async () => {
    render(
      <Router>
        <BookingForm availableTime={'12:00'} />
      </Router>
    );
    fireEvent.click(screen.getByText(/Make Your reservation/i));

    await waitFor(() => {
      expect(screen.getByText(/required name/i)).toBeInTheDocument();
      expect(screen.getByText(/required email/i)).toBeInTheDocument();
      expect(
        screen.getByText(/date is a requiered field/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/please choose the available time/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/guests number is required/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/occasion is a required field/i)
      ).toBeInTheDocument();
    });
  });

  it('should show validation errors if form fields are invalid', async () => {
    render(
      <Router>
        <BookingForm availableTime={'12:00'} />
      </Router>
    );

    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: 'a' },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'invalidemail' },
    });
    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: 'invaliddate' },
    });
    fireEvent.change(screen.getByLabelText(/choose time/i), {
      target: { value: '' },
    });
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: '0' },
    });
    fireEvent.change(screen.getByLabelText(/occasion/i), {
      target: { value: 'invalid' },
    });

    fireEvent.click(screen.getByText(/Make Your reservation/i));

    // expect(screen.getByText(/invalid email address/i)).toBeInTheDocument();
    // expect(
    //   screen.getByText(/please enter a valid date, format: mm\/dd\/yyyy/i)
    // ).toBeInTheDocument();
    // expect(
    //   screen.getByText(/please choose the available time/i)
    // ).toBeInTheDocument();
    // expect(
    //   screen.getByText(/number of guests at least 1/i)
    // ).toBeInTheDocument();
    // expect(
    //   screen.getByText(/must be one of: birthday, engagement, anniversary/i)
    // ).toBeInTheDocument();
  });
});
