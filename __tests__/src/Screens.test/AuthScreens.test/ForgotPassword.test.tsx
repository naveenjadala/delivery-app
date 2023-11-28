import React from 'react';
import { render, screen } from '@testing-library/react-native';
import ForgotPassword from '../../../../src/screens/AuthScreens/ForgotPassword';

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => {
    return jest.fn;
  },
}));

test('take a snapshort of the screen', () => {
  render(<ForgotPassword />);
  expect(screen).toMatchSnapshot();
});

test('check the title', () => {
  render(<ForgotPassword />);
  const getLinkElement = screen.getByText('Forgot Password?');
  expect(getLinkElement.props.children).toBe('Forgot Password?');
});
