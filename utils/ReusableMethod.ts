import { expect, Locator, Page } from "@playwright/test";
import AxeBuilder from '@axe-core/playwright';

export const reusable = {


    async verifyInputFill(inputField: Locator, input: string) {
        await expect(inputField).toBeVisible();
        await inputField.clear();
        await inputField.fill(input);
        await expect(inputField).toHaveValue(input);
    },


    async getCurrentMonth(){
        const currentMonth = new Date().toLocaleString('default', { month: 'long' });
        return currentMonth;
    },


    async getCurrentYear(){
        const currentYear = new Date().getFullYear().toString();
        return currentYear;
    },

    async getBlockingViolations(page: Page) {
        const { violations } = await new AxeBuilder({ page }).analyze();

        return violations.filter(v =>
            v.impact === 'critical' ||
            v.impact === 'serious'
        );
    },

    async printAccessibilityViolations(page: Page) {

        const blockingViolations = await this.getBlockingViolations(page);

        if (blockingViolations.length === 0) {
            console.log('No blocking accessibility violations found.');
            return;
        }

        console.log(`Found ${blockingViolations.length} blocking accessibility violation(s):\n`);

        blockingViolations.forEach((violation, index) => {
            console.log(`Violation ${index + 1}`);
            console.log(`Rule   : ${violation.id}`);
            console.log(`Impact : ${violation.impact}`);
            console.log(`Help   : ${violation.help}`);
            console.log(`URL    : ${violation.helpUrl}`);
            console.log('--------------------------------------------');
        });
    
    }

}