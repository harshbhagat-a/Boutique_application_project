import { test, expect } from '../fixture';
import { testdata } from '../utils/testdata';

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


    test('Verify Tank Top Sale advertised alert click on Product page', async ({ homepage, productPage }) => {
        await homepage.selectProduct(testdata.products.tankTop);
        await productPage.verifyTankTopSaleAdClick();
    });


    test('Verify Watch Sale advertised alert click on Product page', async ({ homepage, productPage }) => {
        await homepage.selectProduct(testdata.products.watch);
        await productPage.verifyWatchSaleAdClick();
    });


    test('Verify Loafers Sale advertised alert click on Product page', async ({ homepage, productPage }) => {
        await homepage.selectProduct(testdata.products.loafers);
        await productPage.verifyLoaferSaleAdClick();
    });


    test('Verify Candle Holder Sale advertised alert click on Product page', async ({ homepage, productPage }) => {
        await homepage.selectProduct(testdata.products.candleHolder);
        await productPage.verifyCandleHolderSaleAdClick();
    });


    test('Verify Mug Sale advertised alert click on Product page', async ({ homepage, productPage }) => {
        await homepage.selectProduct(testdata.products.mug);
        await productPage.verifyMugSaleAdClick();
    });


    test('Verify the currency displayed on Order Complete page', async ({ homepage, productPage, cart, orderConfirm}) => {
        await homepage.selectProduct(testdata.products.mug);
        await productPage.verifyEuroCurrencySelection();
        await expect(productPage.productPrice).toHaveText(/^€/);
        await productPage.verifyAddToCartButtonClick();
        await cart.verifyPlaceOrderButtonClick();
        await expect(orderConfirm.amountSectionValue).toHaveText(/^\s*€/);
    });


})