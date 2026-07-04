const { test, expect } = require('@playwright/test');
const { Helper } = require('../pages/Helper');

test('TestCase_002 - Login  Page validation', async ({ page }) => {

    const helper = new Helper(page);

    await helper.HomePage();

    await expect(page).toHaveTitle('Automation Teing Practice');
});