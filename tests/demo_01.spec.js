import { test, expect, chromium } from '@playwright/test';

test('Prueba desde un navegador ', async ({ }) => {
    
    const browserChrome = await chromium.launch({
        headless: false
    })
    const context = await browserChrome.newContext();
    const page = await context.newPage();

    // Go to https://playwright.dev/
    await page.goto('https://playwright.dev/');
    
    // Click a[role="button"]:has-text("Node.js")
    await page.locator('a[role="button"]:has-text("Node.js")').click();
    
    // Click nav ul >> text=Node.js
    await page.locator('nav ul >> text=Node.js').click();
    await expect(page).toHaveURL('https://playwright.dev/');
    
    // Click text=Get started
    await page.locator('text=Get started').click();
    await expect(page).toHaveURL('https://playwright.dev/docs/intro');
    
    // Click text=Installing Playwright​
    await page.locator('text=Installing Playwright​').click();
    
    // Click text=HTML Test Reports​
    await page.locator('text=HTML Test Reports​').click();
});