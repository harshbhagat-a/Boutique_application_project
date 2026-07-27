import { expect, Locator } from "@playwright/test";

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
    }


}