import { test, expect } from '../fixture';

test.describe('Product Details Page', () => {

    test.beforeEach(async ({ homepage }) => {
        await homepage.verifyHomePageNavigate();
        await homepage.verifyFirstProductClick();
    });


    test('Verify product details page elements', async ({ homepage }) => {
        await homepage.verifyProductDetailsPageElements();
    });


    test('Verify product quantity increase on Product page', async ({ productPage }) => {
        await productPage.verifyQuantityDropdownOptionSelect();
    });


    test('Verify Add to cart button click on Product page', async ({ productPage }) => {
        await productPage.verifyAddToCartButtonClick();
    });


    test('Verify Euro currency selection on Product page', async ({ productPage }) => {
        await expect(productPage.productPrice).toHaveText(/^\$/);
        await productPage.verifyEuroCurrencySelection();
        await expect(productPage.productPrice).toHaveText(/^€/);
    });


})