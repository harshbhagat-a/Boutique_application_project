import { test, expect } from '../fixture';
import { reusable } from '../utils/ReusableMethod';
import { testdata } from '../utils/testdata';

test.describe('Cart Page', () => {

    test.beforeEach(async ({ homepage, cart, productPage }) => {
        await homepage.verifyHomePageNavigate();
        await homepage.verifyFirstProductClick();
        await productPage.verifyAddToCartButtonClick();
        const isCartEmpty = await cart.verifyCartEmpty();
        test.skip(isCartEmpty, 'Cart is not empty. Skipping all tests in this spec.');
    });

    test('Verify elements on Cart detail page', async ({ cart }) => {
        await cart.verifyCartPageElements();
    });


    test('Functionality of Email input field under Shipping Address section on Cart details page', async ({ cart }) => {
        await reusable.verifyInputFill(cart.emailInputField, testdata.email);
        
    });


    test('Functionality of Street Address input field under Shipping Address section on Cart details page', async ({ cart }) => {
        await reusable.verifyInputFill(cart.streetAddressInputField, testdata.streetAddress);
    });


    test('Functionality of Zip Code input field under Shipping Address section on Cart details page', async ({ cart }) => {
        await reusable.verifyInputFill(cart.zipCodeInputFiled, testdata.zipCode);
    });


    test('Functionality of City input field under Shipping Address section on Cart details page', async ({ cart }) => {
        await reusable.verifyInputFill(cart.cityInputField, testdata.city);
    });


    test('Functionality of State input field under Shipping Address section on Cart details page', async ({ cart }) => {
        await reusable.verifyInputFill(cart.stateInputField, testdata.state);
    });


    test('Functionality of Country input field under Shipping Address section on Cart details page', async ({ cart }) => {
        await reusable.verifyInputFill(cart.countryInputField, testdata.country);
    });


    test('Functionality of Credit Card Number input field under Payment Method section on Cart details page', async ({ cart }) => {
        await reusable.verifyInputFill(cart.creditCardNumberInputField, testdata.creditCardNumber);
    });


    test('Functionality of Month dropdown under Payment Method section on Cart details page', async ({ cart }) => {
        await cart.verifyMonthDropdownSelect();
    });


    test('Functionality of Year dropdown under Payment Method section on Cart details page', async ({ cart }) => {
        await cart.verifyYearDropdownSelect();
    });


    test('Functionality of CVV input field under Payment Method section on Cart details page', async ({ cart }) => {
        await reusable.verifyInputFill(cart.cardCvvInputField, testdata.creditCardCVV);
    });


    test('Functionality of Place Order button under Payment Method section on Cart details page', async ({ cart }) => {
        await cart.verifyPlaceOrderButtonClick();
    });


    test('Functionality of Continue Shopping button under Payment Method section on Cart details page', async ({ cart }) => {
        await cart.verifyContinueShoppingButtonClick();
    });


    test('Functionality of Empty Cart button under Payment Method section on Cart details page', async ({ cart }) => {
        await cart.verifyEmptyCartButtonClick();
    });


    test('Functionality of 1st Item card under Recommended section on Cart details page', async ({ cart }) => {
        await cart.verifyRecommendedItemClick();
    });



})