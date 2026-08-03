import { test as base } from '@playwright/test';
import { HomePage } from './src/pages/HomePage';
import { CartPage } from './src/pages/CartPage';
import { ProductDetailPage } from './src/pages/productDetailPage';
import { OrderConfirmationPage } from './src/pages/orderConfirmationPage';


type MyFixtures = {
    homepage: HomePage;
    cart: CartPage;
    productPage: ProductDetailPage; 
    orderConfirm: OrderConfirmationPage;
};


export const test = base.extend<MyFixtures>({

    homepage: async({ page }, use) => {
        const login = new HomePage(page);
        await use(login);
    },

    cart: async({ page }, use) => {
        const cart = new CartPage(page);
        await use(cart);
    },

    productPage: async({ page }, use) => {
        const productPage = new ProductDetailPage(page);
        await use(productPage);
    },

    orderConfirm: async({ page }, use) => {
        const orderConfirm = new OrderConfirmationPage(page);
        await use(orderConfirm);
    },
});

export { expect } from '@playwright/test';