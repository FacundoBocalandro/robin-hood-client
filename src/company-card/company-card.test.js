import React from 'react';
import {mount} from 'enzyme';
import CompanyCard from "./CompanyCard";

describe('<CompanyCard />', () => {

    const props = {
        onClick: jest.fn(),
        company: {
            ticker: 'AAPL',
            name: 'Apple Inc.',
            price: 125.9,
            percentage: 0.01
        }
    }

    it('Should click buy button', () => {
        const wrapper = mount(<CompanyCard {...props}/>);
        const button = wrapper.find('button');
        button.simulate('click');
        expect(props.onClick).toHaveBeenCalled();
    });
});
