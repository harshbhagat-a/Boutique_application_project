import { test as base } from '@playwright/test';
import { HomePage } from './src/pages/HomePage';


type MyFixtures = {
    homepage: HomePage;
};


export const test = base.extend<MyFixtures>({

    homepage: async({ page }, use) => {
        const login = new HomePage(page);
        await use(login);
    },
});

export { expect } from '@playwright/test';