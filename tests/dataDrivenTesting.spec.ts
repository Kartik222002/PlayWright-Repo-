import {expect, test} from "@playwright/test"
import fs from 'fs'
import { json } from "stream/consumers";

/* //reading data from json 
const jsonPath = "testdata/data.json";
let loginData:any=JSON.parse(fs.readFileSync(jsonPath,'utf-8'));
// JSON is a predefined classs , parse is a method 

 */
const jsonPath = 'testdata/data.json';
const fileContent = fs.readFileSync(jsonPath, 'utf-8');
const loginData: any = JSON.parse(fileContent);

console.log(loginData);






test.describe("param test", () => {
  for (const { email, password, validity } of loginData) {
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
  }
});


