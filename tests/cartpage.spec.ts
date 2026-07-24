import { test, expect } from '../fixture';
import { reusable } from '../utils/ReusableMethod';
import { testdata } from '../utils/testdata';

test.describe('Cart Page', () => {

    test.beforeEach(async ({ homepage, cart, productPage }) => {
        await homepage.verifyHomePageNavigate();
        //await homepage.verifyCartIconClick();
        await homepage.verifyFirstProductClick();
        await productPage.verifyAddToCartButtonClick();
        const isCartEmpty = await cart.verifyCartEmpty();
        test.skip(isCartEmpty, 'Cart is not empty. Skipping all tests in this spec.');
    });

    test('Verify elements on Cart detail page', async ({ cart }) => {
        await cart.verifyCartPageElements();
    });


    test('Functionality of Email input field on Cart details page', async ({ cart }) => {
        await reusable.verifyInputFill(cart.emailInputField, testdata.email);
        
    });


    test('Functionality of Street Address input field on Cart details page', async ({ cart }) => {
        await reusable.verifyInputFill(cart.streetAddressInputField, testdata.streetAddress);
    });


    test('Functionality of Zip Code input field on Cart details page', async ({ cart }) => {
        await reusable.verifyInputFill(cart.zipCodeInputFiled, testdata.zipCode);
    });


    test('Functionality of City input field on Cart details page', async ({ cart }) => {
        await reusable.verifyInputFill(cart.cityInputField, testdata.city);
    });


    test('Functionality of State input field on Cart details page', async ({ cart }) => {
        await reusable.verifyInputFill(cart.stateInputField, testdata.state);
    });


    test('Functionality of Country input field on Cart details page', async ({ cart }) => {
        await reusable.verifyInputFill(cart.countryInputField, testdata.country);
    });



})