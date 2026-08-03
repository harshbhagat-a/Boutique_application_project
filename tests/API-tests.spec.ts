import { test, expect } from '../fixture';
import { testdata } from '../utils/testdata';
import { getProductIds, saveProductIds } from '../utils/productHelper';

test.describe('API tests', () => {

    test('Verify all Items', async ({ request }) => {

        const url = `${process.env.BASE_URL}/`;
        const response = await request.get(url);
        console.log(response.status());
        expect(response.status()).toBe(200);
        saveProductIds(response);

    });


    test('Changing the currency', async ({ request }) => {
        const response = await request.post(
            `${process.env.BASE_URL}${testdata.endpoints.currencyChange}`,
            {
                form: {
                    currency_code: testdata.euroCurrency,
                }
            }
        );
        expect(response.status()).toBe(200);
    });


    test('Verify Add to Cart', async ({ request }) => {
        const productIds = getProductIds();
        const response = await request.post(
            `${process.env.BASE_URL}${testdata.endpoints.cart}`,
            {
                form: {
                    product_id: productIds.sunglasses,
                    quantity: '1'
                }
            }
        );
        expect(response.status()).toBe(200);
        const body = await response.text();
        expect(body).toContain('Cart');
    });


    test('Verify cart empty', async ({ request }) => {
        const response = await request.post(
            `${process.env.BASE_URL}${testdata.endpoints.cartEmpty}`,
        );
        expect(response.status()).toBe(200);
    });


    test('Verify Order confirmation', async ({ request }) => {
        const response = await request.post(
            `${process.env.BASE_URL}${testdata.endpoints.checkout}`,
            {
                form: {
                    email: testdata.email,
                    street_address: testdata.streetAddress,
                    zip_code: testdata.zipCode,
                    city: testdata.city,
                    state: testdata.state,
                    country: testdata.country,
                    credit_card_number: testdata.creditCardNumber,
                    credit_card_expiration_month: testdata.cardExpiryMonth,
                    credit_card_expiration_year: testdata.cardExpiryYear,
                    credit_card_cvv: testdata.creditCardCVV,
                }
            }
        );
        expect(response.status()).toBe(200);
        const body = await response.text();
        expect(body).toContain('Your order is complete!');
    });


})