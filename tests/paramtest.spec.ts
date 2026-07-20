import { test, expect } from '@playwright/test';

const loginTestData: string[][] = [
  ["laura.taylor1234@example.com", "test123", "valid"],
  ["invaliduser@example.com", "test321", "invalid"],
  ["validuser@example.com", "testxyz", "invalid"],
  ["", "", "invalid"],
];

for (const [email, password, validity] of loginTestData) {
  test.describe("param test", () => {
    test(`login test for ${email} and ${password} and ${validity}`, async ({ page }) => {
      await page.goto("https://demowebshop.tricentis.com/");
      await page.locator(".ico-login").click();
      await page.locator("#Email").fill(email);
      await page.locator("#Password").fill(password);
      await page.locator("input[name='RememberMe']").click();
      await page.locator(".login-button").click();

      if (validity === "valid") {
        await expect(page.locator(".ico-logout")).toBeVisible();
        console.log("✅ Valid data: logout button is visible");
      } else {
        await expect(page.locator(".ico-logout")).toHaveCount(0);
        console.log("❌ Invalid data: logout button not visible");
      }
    });
  });
}
