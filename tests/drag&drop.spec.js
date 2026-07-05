const { test, expect } = require('@playwright/test');

test('Drag and Drop example', async ({ page }) => {

  // 👉 1. Open website (use: navigate to app)
  await page.goto('https://testautomationpractice.blogspot.com/');

  // 👉 2. Identify source element (use: element to drag)
  const source = page.locator('#draggable');

  // 👉 3. Identify target element (use: drop location)
  const target = page.locator('#droppable');

  // 👉 4. Perform drag and drop (use: move element from source to target)
  await source.dragTo(target);

  // 👉 5. Validate drop happened (use: confirmation check)
  await expect(target).toContainText('Dropped');
});