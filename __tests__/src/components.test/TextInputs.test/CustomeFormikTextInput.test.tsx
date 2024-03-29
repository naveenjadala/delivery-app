import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import CustomeFormikTextInput from '../../../../src/components/TextInputs/CustomeFormikTextInput';

describe('custome Text input', () => {
  it('render text input corretly', () => {
    const { getByPlaceholderText } = render(
      <CustomeFormikTextInput
        placeholder="test placeholder"
        value=""
        onChangeText={() => {}}
      />,
    );
    const input = getByPlaceholderText('test placeholder');
    expect(input).toBeDefined();
  });

  it('call text change when the text change', async () => {
    const onChangeText = jest.fn();
    render(
      <CustomeFormikTextInput
        placeholder="Test Placeholder"
        value=""
        onChangeText={onChangeText}
      />,
    );

    const input = screen.getByPlaceholderText('Test Placeholder');
    fireEvent.changeText(input, 'test input');
    expect(onChangeText).toHaveBeenCalledWith('test input');
  });
});
