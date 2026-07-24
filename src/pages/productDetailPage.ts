import { Locator, Page, expect } from '@playwright/test';
import { testdata } from '../../utils/testdata';

export class ProductDetailPage {
    quantityDropdown: Locator;
    productImage: Locator;
    productNameHeading: Locator;
    productDescription: Locator;
    productPrice: Locator;
    addToCartButton: Locator;
    continueShoppingButton: Locator;
    currencyDropdown: Locator;

    constructor(private page: Page){
        this.productImage = this.page.locator('.product-image');
        this.productNameHeading = this.page.getByRole('heading', { level: 2 }).first();
        this.productPrice = this.page.locator('.product-price');
        this.productDescription = this.page.locator('.product-wrapper p').nth(1);
        this.quantityDropdown = this.page.locator('#quantity');
        this.addToCartButton = this.page.getByRole('button', { name: 'Add To Cart' });
        this.continueShoppingButton = this.page.getByRole('button', { name: ' Continue Shopping ' });
        this.currencyDropdown = this.page.locator('[name="currency_code"]');

    }


    async verifyQuantityDropdownOptionSelect() {
        await expect(this.quantityDropdown).toBeVisible();
        await this.quantityDropdown.click();
        await this.quantityDropdown.selectOption(testdata.productQuantity);
    }


    async verifyProductDetailsPageElements() {
        const locators: Locator[] = [
            this.productImage, this.productNameHeading, this.productPrice,
            this.productDescription, this.quantityDropdown, this.addToCartButton
        ];
        for (const locator of locators) {
            await expect(locator).toBeVisible();
        }
    }


    async verifyAddToCartButtonClick() {
        await expect(this.addToCartButton).toBeVisible();
        await this.addToCartButton.click();
        await expect(this.continueShoppingButton).toBeVisible();
    }


    async verifyEuroCurrencySelection() {
        await expect(this.currencyDropdown).toBeVisible();
        await this.currencyDropdown.click();
        await (this.currencyDropdown).selectOption(testdata.euroCurrency);
    }


}