import {expect, test} from '@playwright/test'

test('auto wait',async ({page})=>{
    test.setTimeout(50000) // In Playwright, test.setTimeout() is used to increase the maximum time allowed for a single test to run.
    await page.goto("https://demowebshop.tricentis.com/")

    //await page.locator('input#small-searchterms').fill('Fiction',{force:true})
    await page.locator('small-searchterms').fill('Fiction')

    /* When you use { force: true } in Playwright, you’re telling Playwright:
“Don’t bother checking if the element is visible, enabled, or ready. Just go ahead and perform the action anyway.”
Normally, Playwright runs safety checks before clicking, typing, or checking an element. With { force: true }, those checks are skipped, and the action is executed directly. */

    await page.getByRole('button',{name:'Search'}).click({force:true}) 
    
// Configures a 10-second assertion timeout just for this test
  test.expect.configure({ timeout: 10000 });

    //For assertion - // Time is in milliseconds (5000ms = 5 seconds)
await expect(page.locator('.loading-spinner')).toBeHidden({ timeout: 5000 });

})