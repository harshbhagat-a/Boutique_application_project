import { expect, Locator } from "@playwright/test";

export const reusable = {


    async verifyInputFill(inputField: Locator, input: string) {
        await expect(inputField).toBeVisible();
        await inputField.clear();
        await inputField.fill(input);
    }


}