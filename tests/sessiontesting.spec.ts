import {expect, test} from "@playwright/test"

test.use({storageState: "auth/session.xml"})
test("navigate to home page without login",async ({page})=>{
    await page.goto("https://practicetestautomation.com/logged-in-successfully/")
    let titleOfPage = await page.title()
    await expect(titleOfPage).toContain("Logged In Successfully | Practice Test Automation")
    await page.pause();
})