const { test, expect } = require('@playwright/test');
const { getExcelData } = require('../utils/excelReader');

// read excel
const users = getExcelData('./testdata/oxo.xlsx', 'Sheet1');

// take 2nd row (ganesh)
const user = users[1];

test('Simple Excel Test', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    await expect(page).toHaveTitle('Automation Testing Practice');

   // await page.fill("input[placeholder='Enter Name']", user.name);
    await page.fill("input[placeholder='Enter EMail']", user.password);
    await page.locator("input[placeholder='Enter Name']").type("Aravind");

    ///

});