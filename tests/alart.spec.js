const { test, expect } = require('@playwright/test');

test('Alert handling example (accept, dismiss, input)', async ({ page }) => {

  // 👉 1. Open website (use: navigate to app)
  await page.goto('https://testautomationpractice.blogspot.com/');

  // ======================================================
  // 🚨 2. Handle ALERT / CONFIRM / PROMPT
  // ======================================================

  page.on('dialog', async dialog => {

    console.log('Alert message:', dialog.message()); // use: get alert text

    // 👉 check dialog type (use: handle different alerts)
    const type = dialog.type();
    console.log('Dialog type:', type);

    if (type === 'alert') {
      // 👉 simple alert (OK only)
      await dialog.accept();
    }

    else if (type === 'confirm') {
      // 👉 confirm alert (OK / Cancel)
      await dialog.dismiss();   // use: click CANCEL
      // await dialog.accept(); // (use this if you want OK)
    }

    else if (type === 'prompt') {
      // 👉 prompt alert (input + OK)
      await dialog.accept('Aravind QA'); // use: send input + accept
      // await dialog.dismiss(); // (if you want cancel instead)
    }
  });

  // ======================================================
  // 👉 3. Trigger ALERT
  // ======================================================
  await page.click('button[onclick="myFunctionAlert()"]');

  // 👉 4. Trigger CONFIRM ALERT
  await page.click('button[onclick="myFunctionConfirm()"]');

  // 👉 5. Trigger PROMPT ALERT
  await page.click('button[onclick="myFunctionPrompt()"]');
});