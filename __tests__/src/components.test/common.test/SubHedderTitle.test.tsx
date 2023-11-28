import React from 'react';
import { render, screen } from '@testing-library/react-native';
import SubHeaderTitle from '../../../../src/components/common/SubHeaderTitle';

it('render the sub hedding titile', () => {
  render(<SubHeaderTitle title={'My title'} />);
  const headerElement = screen.getByText('My title');
  expect(headerElement.props.children).toBe('My title');
});
