import {test} from "@playwright/test"

test("Session Storage",async ({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator("#username").fill("student")
    await page.locator("#password").fill("Password123")
    await page.locator("//button [text()='Submit']").click()

    await page.waitForURL("https://practicetestautomation.com/logged-in-successfully/")
    await page.context().storageState({path: 'auth/session.xml'});

})