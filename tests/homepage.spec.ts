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


  test('Verify product details page elements', async ({ homepage }) => {
     await homepage.verifyFirstProductClick();
     await homepage.verifyProductDetailsPageElements();
  });


  test('Verify product quantity increase', async ({ homepage }) => {
     await homepage.verifyFirstProductClick();
     await homepage.verifyQuantityDropdownOptionSelect();
  });


})