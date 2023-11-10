import React from "react";
import SignupScreen from "../../../../src/screens/AuthScreens/SignupScreen"
import renderer from 'react-test-renderer';

test('take the snaphot of the SignUp screen', () => {
    const tree = renderer.create(<SignupScreen />).toJSON();
    expect(tree).toMatchSnapshot();
})