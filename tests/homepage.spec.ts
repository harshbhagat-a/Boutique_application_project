import { test, expect } from '../fixture';

test.describe('Homepage Functionality', () => {


  test.beforeEach(async ({ homepage }) => {
    await homepage.verifyHomePageNavigate();

  });

  test('Verify home page elements', async ({ homepage }) => {
     await homepage.verifyHomePageElements();
  });


})