import {expect, Locator, test} from "@playwright/test"

test("login on thge swaglabs",async ({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill("standard_user");
    await page.fill("#password","secret_sauce");
    await page.click("#login-button");
    let backPack:Locator=await page.locator("//div[normalize-space()='Sauce Labs Backpack']");
    await expect(backPack).toContainText("Sauce Labs Backpack");


})