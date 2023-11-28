import React from 'react';
import { render, screen } from '@testing-library/react-native';
import HeaderTitle from '../../../../src/components/common/HeaderTitle';

test('render the proper title', () => {
  render(<HeaderTitle title="test title" />);
  const headingElement = screen.getByText('test title');
  expect(headingElement.props.children).toBe('test title');
});
