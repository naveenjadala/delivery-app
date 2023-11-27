import React from 'react';
import { render, screen } from '@testing-library/react-native';
import HeaderTitle from '../../../../src/components/common/HeaderTitle';

test('render the proper title', async () => {
  render(<HeaderTitle title="test title" />);
  const headingElement = await screen.findByTestId('testHeading');
  console.log(headingElement);
  expect(headingElement).toBeOnTheScreen();
});
