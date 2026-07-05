const {test, expect}= require('@playwright/test');
test('test1', async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/');

await page.getByTestId("alertBtn").click();

});