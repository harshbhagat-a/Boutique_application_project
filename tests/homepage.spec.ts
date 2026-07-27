import { test, expect } from '../fixture';

  test.describe('Homepage Functionality', () => {


    test.beforeEach(async ({ homepage }) => {
      await homepage.verifyHomePageNavigate();
    });


    test('Verify home page elements', async ({ homepage }) => {
      await homepage.verifyHomePageElements();
    });


    test('Verify first product click', async ({ homepage }) => {
      await homepage.verifyFirstProductClick();
    });


    test('Verify cart icon click on Home page', async ({ homepage, cart }) => {
      await homepage.verifyCartIconClick();
    });

    test('Verify the item quantity on Cart details page', async ({ homepage })=>{
      await homepage.verifyItemCount();
    });

  })