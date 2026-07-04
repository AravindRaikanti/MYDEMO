const { test, expect } = require('@playwright/test');
const { Helper } = require('../pages/Helper');
const { getExcelData } = require('../utils/excelReader');

const users = getExcelData('./testdata/oxo.xlsx', 'Sheet1');

// 👇 ONLY 2nd row
const user = users[1];

test('Home Page Validation', async ({ page }) => {

    const helper = new Helper(page);

    await helper.HomePage();

    await expect(page).toHaveTitle('Automation Testing Practice');

    await helper.login(user.name, user.password);

});