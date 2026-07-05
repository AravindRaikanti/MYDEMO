const { test, expect } = require('@playwright/test');

test('Window handling - popup example', async ({ page }) => {

  // 1. Open main page
  await page.goto('https://testautomationpractice.blogspot.com/');

  // 2. Handle popup window
  const [popup] = await Promise.all([
    page.waitForEvent('popup'),          // wait for new tab/window
    page.locator("//button[@onclick='return popup()']").click()    // action that opens popup
  ]);

  // 3. Work on popup window
  await popup.waitForLoadState();


  await expect(popup).toHaveTitle(/Selenium/);

  

    // 4. Optional: close popup
  await popup.close();

  // 5. Continue actions on main page
  await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/');

  

});