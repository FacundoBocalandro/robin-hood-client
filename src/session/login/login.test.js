import React from 'react';
import {mount} from 'enzyme';
import Login from "./Login";

describe('<Login />', () => {

    const props = {
        loginRequest: jest.fn(),
    }

    it('should send login request', () => {
        const wrapper = mount(<Login {...props}/>);
        const usernameInput = wrapper.find('input').at(0);
        const passwordInput = wrapper.find('input').at(1);
        usernameInput.simulate('change', {target: {value: "facundobocalandro"}})
        passwordInput.simulate('change', {target: {value: "Sirius2021"}})
        expect(usernameInput.instance().value).toBe("facundobocalandro")
        expect(passwordInput.instance().value).toBe("Sirius2021")
        const button = wrapper.find('button');
        button.simulate('click');
        expect(props.loginRequest).toHaveBeenCalledWith({username: "facundobocalandro", password: "Sirius2021"});
    });
});
