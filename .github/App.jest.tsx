/**
 * @format
 */

import 'react-native';
import React from 'react';
// import App from '../App';

// Note: import explicitly to use the types shiped with jest.
import { it } from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer, { act } from 'react-test-renderer';
import App from '../../../App';
import { useDispatch as useDispatchMock } from 'react-redux';

jest.useFakeTimers();

jest.mock('react-native-splash-screen', () => {
  return {
    hide: () => true,
  };
});

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

it('renders correctly', () => {
  act(() => {
    renderer.create(<App />);
  });
});
