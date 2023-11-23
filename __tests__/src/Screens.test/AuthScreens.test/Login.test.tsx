import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import LoginScreen from '../../../../src/screens/AuthScreens/LoginScreen';
import * as api from '../../../../src/services/api';

jest.useFakeTimers();

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => {
    return jest.fn;
  },
}));

jest.mock('../../../../src/services/api', () => {
  const login = jest.fn(() =>
    Promise.resolve({ status: 'success', token: 'mockToken' }),
  );
  return {
    login,
  };
});

describe('LoginScreen', () => {
  //snapshot
  it('should render correctly', () => {
    const { toJSON } = render(<LoginScreen />);
    expect(toJSON()).toMatchSnapshot();
  });

  //fields test
  it('should allow user input in the email and password field', () => {
    const { getByPlaceholderText } = render(<LoginScreen />);
    const emailInput = getByPlaceholderText('Email Address');
    const passwordInput = getByPlaceholderText('Password');

    fireEvent.changeText(emailInput, 'test@gmail.com');
    fireEvent.changeText(passwordInput, 'password123');

    expect(emailInput.props.value).toBe('test@gmail.com');
    expect(passwordInput.props.value).toBe('password123');
  });

  // service call
  it('Form submission and service call', async () => {
    const { getByPlaceholderText, getByText } = render(<LoginScreen />);
    const emailInput = getByPlaceholderText('Email Address');
    const passwordInput = getByPlaceholderText('Password');

    fireEvent.changeText(emailInput, 'jadala@gmail.com');
    fireEvent.changeText(passwordInput, 'naveen');
    fireEvent.press(getByText('Login'));

    await waitFor(() =>
      expect(api.login).toHaveBeenCalledWith(
        'loginApi',
        JSON.stringify({ email: 'jadala@gmail.com', password: 'naveen' }),
      ),
    );
  });

  // afterEach(() => {
  //     jest.runOnlyPendingTimers();
  // });
});
