import { test, expect,  } from '../fixture';
import { reusable } from '../utils/ReusableMethod';

test.describe('Accessibility Tests', () => {

    test('Home page accessibility tests', async ({ page, homepage }) => {
        await homepage.verifyHomePageNavigate();
        await reusable.printAccessibilityViolations(page);
    });



    test('Product details page accessibility tests', async ({ page, homepage }) => {
        await homepage.verifyHomePageNavigate();
        await homepage.verifyFirstProductClick();
        await reusable.printAccessibilityViolations(page);
    });


    test('Cart details page accessibility tests', async ({ page, homepage, productPage }) => {
        await homepage.verifyHomePageNavigate();
        await homepage.verifyFirstProductClick();
        await productPage.verifyAddToCartButtonClick();
        await reusable.printAccessibilityViolations(page);
    });


    test('Order details page accessibility tests', async ({ page, homepage, productPage, cart }) => {
        await homepage.verifyHomePageNavigate();
        await homepage.verifyFirstProductClick();
        await productPage.verifyAddToCartButtonClick();
        await cart.verifyPlaceOrderButtonClick();
        await reusable.printAccessibilityViolations(page);
    });


})