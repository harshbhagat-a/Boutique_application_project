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
    tankTopSaleAd: Locator;
    watchSaleAd: Locator;
    loaferSaleAd: Locator;
    candleHolderSaleAd: Locator;
    mugSaleAd: Locator;

    constructor(private page: Page) {
        this.productImage = this.page.locator('.product-image');
        this.productNameHeading = this.page.getByRole('heading', { level: 2 }).first();
        this.productPrice = this.page.locator('.product-price');
        this.productDescription = this.page.locator('.product-wrapper p').nth(1);
        this.quantityDropdown = this.page.locator('#quantity');
        this.addToCartButton = this.page.getByRole('button', { name: 'Add To Cart' });
        this.continueShoppingButton = this.page.getByRole('button', { name: ' Continue Shopping ' });
        this.currencyDropdown = this.page.locator('[name="currency_code"]');
        this.tankTopSaleAd = this.page.getByRole('link', { name: 'Tank top for sale. 20% off.' });
        this.watchSaleAd = this.page.getByRole('link',{name: 'Watch for sale. Buy one, get second kit for free'});
        this.loaferSaleAd = this.page.getByRole('link',{name: 'Loafers for sale. Buy one, get second one for free'});
        this.candleHolderSaleAd = this.page.getByRole('link',{name: 'Candle holder for sale. 30% off.'});
        this.mugSaleAd = this.page.getByRole('link',{name: 'Mug for sale. Buy two, get third one for free'});

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


    async verifyTankTopSaleAdClick() {
        const SaleVisible = await this.tankTopSaleAd.isVisible();
        if (SaleVisible) {
            const [newPage] = await Promise.all([
                this.page.context().waitForEvent('page'),
                this.tankTopSaleAd.click(),
            ]);
            const productDetailPage = new ProductDetailPage(newPage);
            await expect(productDetailPage.currencyDropdown).toBeVisible();
        }
        else {
            console.log('Sale link is not displayed')
        }
    }


    async verifyWatchSaleAdClick() {
        const SaleVisible = await this.watchSaleAd.isVisible();
        if (SaleVisible) {
            const [newPage] = await Promise.all([
                this.page.context().waitForEvent('page'),
                this.watchSaleAd.click(),
            ]);
            const productDetailPage = new ProductDetailPage(newPage);
            await expect(productDetailPage.currencyDropdown).toBeVisible();
        }
        else {
            console.log('Sale link is not displayed')
        }
    }


    async verifyLoaferSaleAdClick() {
        const SaleVisible = await this.loaferSaleAd.isVisible();
        if (SaleVisible) {
            const [newPage] = await Promise.all([
                this.page.context().waitForEvent('page'),
                this.loaferSaleAd.click(),
            ]);
            const productDetailPage = new ProductDetailPage(newPage);
            await expect(productDetailPage.currencyDropdown).toBeVisible();
        }
        else {
            console.log('Sale link is not displayed')
        }
    }


    async verifyCandleHolderSaleAdClick() {
        const SaleVisible = await this.candleHolderSaleAd.isVisible();
        if (SaleVisible) {
            const [newPage] = await Promise.all([
                this.page.context().waitForEvent('page'),
                this.candleHolderSaleAd.click(),
            ]);
            const productDetailPage = new ProductDetailPage(newPage);
            await expect(productDetailPage.currencyDropdown).toBeVisible();
        }
        else {
            console.log('Sale link is not displayed')
        }
    }


    async verifyMugSaleAdClick() {
        const SaleVisible = await this.mugSaleAd.isVisible();
        if (SaleVisible) {
            const [newPage] = await Promise.all([
                this.page.context().waitForEvent('page'),
                this.mugSaleAd.click(),
            ]);
            const productDetailPage = new ProductDetailPage(newPage);
            await expect(productDetailPage.currencyDropdown).toBeVisible();
        }
        else {
            console.log('Sale link is not displayed')
        }
    }


}