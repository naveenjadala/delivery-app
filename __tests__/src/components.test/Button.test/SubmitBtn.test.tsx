import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SubmitBtn from '../../../../src/components/Buttons/SubmitBtn';

describe('Test custome button', () => {
    it('Test lable of button', () => {
        const { getByText } = render(<SubmitBtn lable="Test Label" onPress={() => { }} />)
        const btn = getByText('Test Label');
        expect(btn).toBeDefined()
    });

    it('Test on press event', () => {
        const BtnPressMock = jest.fn();
        const { getByText } = render(<SubmitBtn lable='Test label' onPress={BtnPressMock} />)
        const btn = getByText('Test label');
        fireEvent.press(btn);
        expect(BtnPressMock).toHaveBeenCalled();
    })
})