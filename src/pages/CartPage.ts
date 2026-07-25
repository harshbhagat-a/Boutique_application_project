import { Locator, Page, expect } from '@playwright/test';
import { testdata } from '../../utils/testdata';

export class CartPage {

    emptyCartButton: Locator;
    cartHeading: Locator;
    cartProductName: Locator;
    cartProductDescription: Locator;
    cartSummerySection: Locator;
    cartShippingSection: Locator;
    cartTotalValueSection: Locator;
    shoppingAddressHeading: Locator;
    streetAddressInputField: Locator;
    emailInputField: Locator;
    zipCodeInputFiled: Locator;
    cityInputField: Locator;
    stateInputField: Locator;
    countryInputField: Locator;
    paymentMethodHeading: Locator;
    creditCardNumberInputField: Locator;
    cardExpiryMonthDropdown: Locator;
    cardExpiryYearDropdown: Locator;
    cardCvvInputField: Locator;
    placeOrderButton: Locator;
    youMayAlsoLikeSection: Locator;
    emptyCartHeading: Locator;
    emptyCartSubtitle: Locator;
    continueShoppingButton: Locator;
    footerSection: Locator;

    constructor(private page: Page) {

        this.continueShoppingButton = this.page.getByRole('button', { name: ' Continue Shopping ' });
        this.emptyCartButton = this.page.getByRole('button', { name: 'Empty Cart' });
        this.cartHeading = this.page.getByRole('heading', { name: /^Cart/ });
        this.cartProductName = this.page.getByRole('heading', { level: 4 });
        this.cartProductDescription = this.page.locator('.cart-summary-item-row-item-id-row');
        this.cartSummerySection = this.page.locator('.cart-summary-item-row');
        this.cartShippingSection = this.page.locator('.cart-summary-shipping-row');
        this.cartTotalValueSection = this.page.locator('.cart-summary-total-row');
        this.shoppingAddressHeading = this.page.getByRole('heading', { name: 'Shipping Address' });
        this.emailInputField = this.page.locator('#email');
        this.streetAddressInputField = this.page.locator('#street_address');
        this.zipCodeInputFiled = this.page.locator('#zip_code');
        this.cityInputField = this.page.locator('#city');
        this.stateInputField = this.page.locator('#state');
        this.countryInputField = this.page.locator('#country');
        this.paymentMethodHeading = this.page.getByRole('heading', { name: 'Payment Method' });
        this.creditCardNumberInputField = this.page.locator('#credit_card_number');
        this.cardExpiryMonthDropdown = this.page.locator('#credit_card_expiration_month');
        this.cardExpiryYearDropdown = this.page.locator('#credit_card_expiration_year');
        this.cardCvvInputField = this.page.locator('#credit_card_cvv');
        this.placeOrderButton = this.page.getByRole('button', { name: 'Place Order' });
        this.youMayAlsoLikeSection = this.page.locator('.recommendations');
        this.emptyCartHeading = this.page.getByRole('heading', { name: 'Your shopping cart is empty!' });
        this.emptyCartSubtitle = this.page.locator('.empty-cart-section p');
        this.footerSection = this.page.locator('.footer-social').first();

    }

    async verifyCartEmpty(): Promise<boolean>{
        const itemConfirmation = await this.emptyCartHeading.isVisible();
        return itemConfirmation;

    }


    async verifyCartPageElements() {
        const itemConfirmation = await this.emptyCartHeading.isVisible();
        if (itemConfirmation) {
            console.log('No items present in the cart');
            await expect(this.emptyCartHeading).toBeVisible();
            await expect(this.continueShoppingButton).toBeVisible();
            await expect(this.youMayAlsoLikeSection).toBeVisible();
            await expect(this.footerSection).toBeVisible();
            await expect(this.emptyCartSubtitle).toBeVisible();
        }
        else {
            const locators: Locator[] = [
                this.cartHeading, this.emptyCartButton, this.continueShoppingButton, this.cartSummerySection, this.cartShippingSection,
                this.placeOrderButton, this.cartTotalValueSection, this.cartShippingSection, this.paymentMethodHeading,
            ];
            for (const locator of locators) {
                await expect(locator).toBeVisible();
            }
        }
    }

}