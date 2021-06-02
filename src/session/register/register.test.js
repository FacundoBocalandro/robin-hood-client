import React from 'react';
import {mount} from 'enzyme';
import Register from "./Register";

describe('<Register />', () => {

    const props = {
        registerRequest: jest.fn(),
    }

    it('should send register request', () => {
        const wrapper = mount(<Register {...props}/>);
        const firstNameInput = wrapper.find('input').at(0);
        const lastNameInput = wrapper.find('input').at(1);
        const usernameInput = wrapper.find('input').at(2);
        const emailInput = wrapper.find('input').at(3);
        const passwordInput = wrapper.find('input').at(4);
        firstNameInput.simulate('change', {target: {value: "Facundo"}})
        lastNameInput.simulate('change', {target: {value: "Bocalandro"}})
        usernameInput.simulate('change', {target: {value: "facundobocalandro"}})
        emailInput.simulate('change', {target: {value: "facundo@bocalandro.com.ar"}})
        passwordInput.simulate('change', {target: {value: "Sirius2021"}})
        expect(firstNameInput.instance().value).toBe("Facundo")
        expect(lastNameInput.instance().value).toBe("Bocalandro")
        expect(usernameInput.instance().value).toBe("facundobocalandro")
        expect(emailInput.instance().value).toBe("facundo@bocalandro.com.ar")
        expect(passwordInput.instance().value).toBe("Sirius2021")
        const button = wrapper.find('button');
        button.simulate('click');
        expect(props.registerRequest).toHaveBeenCalledWith({
            firstName: "Facundo", lastName: "Bocalandro", username: "facundobocalandro",
            email: "facundo@bocalandro.com.ar", password: "Sirius2021"
        });
    });
});
