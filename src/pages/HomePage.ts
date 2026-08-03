import { Locator, Page, expect } from '@playwright/test';
import { ProductDetailPage } from './productDetailPage';
import { testdata } from '../../utils/testdata';

export class HomePage {

    //selectors
    applicationLogo: Locator;
    currencyDropdown: Locator;
    cartIcon: Locator;
    hotProductTitle: Locator;
    productCards: Locator;
    footerSection: Locator;
    localText: Locator;
    addToCartButton: Locator;
    productImage: Locator;
    productNameHeading: Locator;
    productPrice: Locator;
    productDescription: Locator;
    quantityDropdown: Locator;
    continueShoppingButton: Locator;
    itemQuantity: Locator;


    constructor(private page: Page) {
        this.applicationLogo = this.page.locator('.top-left-logo');
        this.currencyDropdown = this.page.locator('#currency_form');
        this.cartIcon = this.page.getByTitle('Cart');
        this.hotProductTitle = this.page.getByRole('heading', { level: 3, name: 'Hot Products' });
        this.productCards = this.page.locator('.hot-product-card');
        this.footerSection = this.page.locator('.footer-social').first();
        this.localText = this.page.locator('.platform-flag');
        this.addToCartButton = this.page.getByRole('button', { name: 'Add To Cart' });
        this.productImage = this.page.locator('.product-image');
        this.productNameHeading = this.page.getByRole('heading', { level: 2 }).first();
        this.productPrice = this.page.locator('.product-price');
        this.productDescription = this.page.locator('.product-wrapper p').nth(1);
        this.quantityDropdown = this.page.locator('#quantity');
        this.continueShoppingButton = this.page.getByRole('button', { name: ' Continue Shopping ' });
        this.itemQuantity = this.page.getByText('Quantity:');


    }

    async verifyHomePageNavigate() {
        await this.page.goto('/');
        await expect(this.page).toHaveTitle(/Online Boutique/i);
        await expect(this.applicationLogo).toBeVisible();
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

    async verifyHomePageElements() {
        const locators: Locator[] = [
            this.applicationLogo, this.currencyDropdown, this.cartIcon, this.hotProductTitle,
            this.productCards.first(), this.localText, this.footerSection
        ];
        for (const locator of locators) {
            await expect(locator).toBeVisible();
        }
    }


    async verifyCartIconClick() {
        await expect(this.cartIcon).toBeVisible();
        await this.cartIcon.click();
        await expect(this.continueShoppingButton).toBeVisible();
    }


    async verifyFirstProductClick() {
        const firstProductLocator = this.productCards.first()
        await expect(firstProductLocator).toBeVisible();
        await firstProductLocator.click();
        await expect(this.addToCartButton).toBeVisible();
    }


    async verifyItemCount(){
        const productDetail = new ProductDetailPage(this.page);
        await this.verifyFirstProductClick();
        await productDetail.verifyQuantityDropdownOptionSelect();
        await productDetail.addToCartButton.click();
        await expect(this.itemQuantity).toBeVisible();
        const quantityText = await this.itemQuantity.textContent();
        const quantity = quantityText?.replace('Quantity:', '').trim();
        if(quantity === testdata.productQuantity){
            console.log('Quantity matches')
        }
        else{
            console.log('Quantity does not match')
        }
    }


    async selectProduct(productName: string) {
    await expect(this.page.locator(`img[src*="${productName}.jpg"]`)).toBeVisible();
    await this.page.locator(`img[src*="${productName}.jpg"]`).click();
}

}