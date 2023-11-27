import React from 'react';
import { render, screen } from '@testing-library/react-native';
import ForgotPassword from '../../../../src/screens/AuthScreens/ForgotPassword';

test('check the title', () => {
  render(<ForgotPassword />);
  const getLinkElement = screen.getByRole('button');
  expect(getLinkElement).toBeTruthy();
});
