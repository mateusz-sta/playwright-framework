import { expect, test } from 'playwright/test';

test('example test', async ({ page }) => {
  // Navigate to the page
  await page.goto('https://playwright.com');
  // Check if the title is correct
  await expect(page).toHaveTitle('Playwright');
  await expect(page.locator('.navbar__title.text--truncate')).toHaveText(
    'Playwright',
  );
});
