import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import BookingForm from './components/BookingForm';
import React from 'react';
import Main from './components/Main';
import Hero from './components/Hero';
import FormProvider, {
  useFormStore,
  useFormDispatch,
  formContext,
} from './store/formContext';

test('Renders the BookingForm', () => {
  render(<BookingForm />);
  const submitBtn = screen.getByText('Make Reservation');
  expect(submitBtn).toBeInTheDocument();
});

test('Updates the time correctly', () => {
  render(<BookingForm />);
  const dateButton = screen.getByTestId('res-date');
  fireEvent.click(dateButton);
  fireEvent.change(dateButton, { target: { value: '2023-04-17' } });
  const timeButton = screen.getByTestId('res-time');
  fireEvent.click(timeButton);
  fireEvent.change(timeButton, { target: { value: '18:00' } });
  expect(timeButton.value).toEqual('18:00');
});

/* context provider tests */

describe('FormProvider', () => {
  test('should render children without crashing', () => {
    render(
      <FormProvider>
        <div>Test Child</div>
      </FormProvider>
    );
  });

  test('should provide formContext', () => {
    let result;
    function Consumer() {
      result = [useFormStore(), useFormDispatch()];
      return null;
    }

    render(
      <FormProvider>
        <Consumer />
      </FormProvider>
    );

    expect(result[0]).toBeDefined();
    expect(result[1]).toBeDefined();
  });

  test('should provide correct initial state', () => {
    let result;
    function Consumer() {
      result = useFormStore();
      return null;
    }

    render(
      <FormProvider>
        <Consumer />
      </FormProvider>
    );

    expect(result).toEqual({
      name: '',
      email: '',
      date: '',
      time: '',
      numberOfGuest: '',
      occasion: '',
      message: '',
    });
  });
});

/*testing form component */

test('should update name field when input is typed', () => {
  const { getByLabelText } = render(<BookingForm />);
  const nameInput = getByLabelText(/Name/i);

  fireEvent.change(nameInput, { target: { value: 'John Doe' } });

  expect(nameInput.value).toBe('John Doe');
});

test('should call handleFormSubmit when form is submitted', () => {
  const { getByText } = render(<BookingForm />);
  const submitButton = getByText(/make your reservation/i);
  const handleFormSubmit = jest.fn();

  fireEvent.click(submitButton);
  expect(handleFormSubmit).toHaveBeenCalled();
});
