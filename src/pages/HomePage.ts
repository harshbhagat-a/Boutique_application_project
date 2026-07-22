import { Locator, Page, expect } from '@playwright/test';

export class HomePage {

    //selectors
    applicationLogo: Locator;
    currencyDropdown: Locator;
    cartIcon: Locator;
    hotProductTitle: Locator;
    productCards: Locator;
    footerSection: Locator;
    localText: Locator;


    constructor(private page: Page) {
        this.applicationLogo = this.page.locator('.top-left-logo');
        this.currencyDropdown = this.page.locator('#currency_form');
        this.cartIcon = this.page.getByTitle('Cart');
        this.hotProductTitle = this.page.getByRole('heading',{ level:3 , name: 'Hot Products'});
        this.productCards = this.page.locator('.hot-product-card');
        this.footerSection = this.page.locator('.footer-social').first();
        this.localText = this.page.locator('.platform-flag');

    }

    async verifyHomePageNavigate() {
        await this.page.goto('/');
        await expect(this.page).toHaveTitle(/Online Boutique/i);
        await expect(this.currencyDropdown).toBeVisible();
    }

    async verifyHomePageElements(){
        const locators: Locator[] = [
            this.applicationLogo, this.currencyDropdown, this.cartIcon, this.hotProductTitle,
            this.productCards.first(), this.localText, this.footerSection
        ];
        for (const locator of locators) {
            await expect(locator).toBeVisible();
        }


    }

}