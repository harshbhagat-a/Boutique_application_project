import { test, expect } from '../fixture';
import { testdata } from '../utils/testdata';
import { getProductIds, saveProductIds } from '../utils/productHelper';


test('Verify all Items', async ({ request }) => {

    const url = `${process.env.BASE_URL}/`;
    const response = await request.get(url);
    console.log(response.status());
    expect(response.status()).toBe(200);
    saveProductIds(response);

});


test('Verify Add to Cart API', async ({ request }) => {
    const productIds = getProductIds();
    const response = await request.post(
        `${process.env.BASE_URL}/cart`,
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