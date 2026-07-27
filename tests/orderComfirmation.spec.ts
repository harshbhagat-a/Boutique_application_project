import {test, expect} from '../fixture';

test.describe('Order Confirmation Page',()=>{

    test.beforeEach( async ({ homepage, productPage, cart })=>{
        await homepage.verifyHomePageNavigate();
        await homepage.verifyFirstProductClick();
        await productPage.verifyAddToCartButtonClick();
        await cart.verifyPlaceOrderButtonClick();
    });


    test('Verify Order Confirmation page elements', async ({ orderConfirm })=>{
        await orderConfirm.verifyOrderConfirmationPageElements();
    });


    test('Functionality of Continue Shopping Button on Order Confirmation page', async ({ orderConfirm })=>{
        await orderConfirm.verifyContinueShoppingButtonClick();
    });


})