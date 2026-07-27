import { expect, Locator, Page } from "@playwright/test";
import { HomePage } from "./HomePage";

export class OrderConfirmationPage {
    orderConfirmationHeading: any;
    emailConfirmationText: any;
    continueShoppingButton: any;
    confirmationIdSection: Locator;
    trackingIdSection: Locator;
    totalAmountSection: Locator;

    constructor(private page: Page) {
        this.orderConfirmationHeading = this.page.getByRole('heading', { level: 3 });
        this.emailConfirmationText = this.page.locator('.text-center p');
        this.confirmationIdSection = this.page.locator('.padding-y-24').first();
        this.trackingIdSection = this.page.locator('.padding-y-24').nth(1);
        this.totalAmountSection = this.page.locator('.padding-y-24').last();
        this.continueShoppingButton = this.page.getByRole('button', { name: 'Continue Shopping' });


    }

    async verifyOrderConfirmationPageElements() {
        const locators: Locator[] = [
            this.orderConfirmationHeading, this.emailConfirmationText, this.confirmationIdSection,
            this.trackingIdSection, this.totalAmountSection, this.continueShoppingButton
        ];
        for (const locator of locators) {
            await expect(locator).toBeVisible();
        }
    }

    async verifyContinueShoppingButtonClick(){
        const homePage = new HomePage(this.page);
        await expect(this.continueShoppingButton).toBeVisible();
        await this.continueShoppingButton.click();
        await expect(homePage.hotProductTitle).toBeVisible();
    }
}