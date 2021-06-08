import React from 'react';
import {mount} from 'enzyme';
import BuyStockModal from "./BuyStockModal";

describe('<BuyStockModal />', () => {

    const props = {
        closeModal: jest.fn(),
        redirectToStocks: jest.fn(),
        handleBuy: jest.fn(),
        changeShares: jest.fn(),
        modalInfo: {
            open: true,
            company: {
                ticker: 'AAPL',
                name: 'Apple Inc.',
                price: 125.9,
                percentage: 0.01
            }
        },
    }

    const confirmedProps = {
        closeModal: jest.fn(),
        redirectToStocks: jest.fn(),
        handleBuy: jest.fn(),
        changeShares: jest.fn(),
        modalInfo: {
            open: true,
            confirmed: true,
            company: {
                ticker: 'AAPL',
                name: 'Apple Inc.',
                price: 125.9,
                percentage: 0.01
            }
        }
    }

    it('should click buy button', () => {
        const wrapper = mount(<BuyStockModal {...props}/>);
        const sharesInput = wrapper.find('input');
        sharesInput.simulate('change', {target: {value: "10000"}})
        expect(props.changeShares).toHaveBeenCalled()
        const buyButton = wrapper.find('button').at(1)
        buyButton.simulate('click')
        expect(props.handleBuy).toHaveBeenCalled()
    });

    it('should click redirect button', function () {
        const wrapper = mount(<BuyStockModal {...confirmedProps}/>);
        const redirectToStocksButton = wrapper.find('button')
        console.log(wrapper.html())
        redirectToStocksButton.simulate('click')
        expect(confirmedProps.redirectToStocks).toHaveBeenCalled()
    });

    it('should click cancel button', function () {
        const wrapper = mount(<BuyStockModal {...props}/>);
        const cancelButton = wrapper.find('button').at(0)
        cancelButton.simulate('click')
        expect(props.closeModal).toHaveBeenCalled()
    });
});
