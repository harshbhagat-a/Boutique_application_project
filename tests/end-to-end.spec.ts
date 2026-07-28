import { test, expect } from '../fixture';

  test.describe('Homepage Functionality', () => {

    test.beforeEach(async ({ homepage }) => {
      await homepage.verifyHomePageNavigate();
    });

    test('Verify the item quantity on Cart details page', async ({ homepage })=>{
      await homepage.verifyItemCount();
    });


    test('Verify item order flow', async ({ homepage, productPage, cart })=>{
      await homepage.verifyFirstProductClick();
      await productPage.verifyAddToCartButtonClick();
      await cart.verifyPlaceOrderButtonClick();
    });


})