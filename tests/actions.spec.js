const { test, expect } = require('@playwright/test');

test('Mouse and Keyboard Actions Demo', async ({ page }) => {

  // 👉 1. Open application (use: navigate to URL)
  await page.goto('https://testautomationpractice.blogspot.com/');

  // ======================================================
  // ⌨️ KEYBOARD ACTIONS
  // ======================================================

  // 👉 2. Type text into input field (use: enter username)
  await page.fill('#name', 'Aravind');

  // 👉 3. Type using keyboard (use: simulate real typing)
  await page.keyboard.type(' - QA Engineer');

  // 👉 4. Select all text (use: Ctrl + A shortcut)
  await page.keyboard.press('Control+A');

  // 👉 5. Copy selected text (use: Ctrl + C)
  await page.keyboard.press('Control+C');

  // 👉 6. Move to another input box
  await page.click('#email');

  // 👉 7. Paste copied text (use: Ctrl + V)
  await page.keyboard.press('Control+V');

  // 👉 8. Press TAB key (use: move to next field)
  await page.keyboard.press('Tab');

  // ======================================================
  // 🖱️ MOUSE ACTIONS
  // ======================================================

  // 👉 9. Simple click (use: click checkbox)
  await page.click('#male');

  // 👉 10. Hover action (use: show tooltip/menu)
  await page.hover('text=Alerts');

  // 👉 11. Double click action (use: trigger double-click event)
  await page.dblclick('#field1');

  // 👉 12. Right click (use: open context menu)
  await page.click('#field1', { button: 'right' });

  // ======================================================
  // 🖱️ LOW-LEVEL MOUSE CONTROL
  // ======================================================

  // 👉 13. Move mouse to coordinates (use: precise control)
  await page.mouse.move(100, 200);

  // 👉 14. Click at coordinates (use: pixel-based click)
  await page.mouse.click(100, 200);

  // ======================================================
  // 🔥 DRAG AND DROP (MOST USED REAL SCENARIO)
  // ======================================================

  // 👉 15. Drag element from one place to another
  // use: move items in UI (like Kanban board, sliders)
  await page.locator('#draggable').dragTo(page.locator('#droppable'));

  // ======================================================
  // ✅ VALIDATION (OPTIONAL)
  // ======================================================

  // 👉 16. Verify page is still working
  await expect(page).toHaveURL(/automation/);

});