import {Locator, test} from "@playwright/test"

test("multiplecheckboxes",async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    let checkboxes: Locator[] = await page.locator("//div[@class='form-group']/div/input[@type='checkbox']").all()
   // let printOptions:string[] = await page.locator("//div[@class='form-group']/div/input[@type='checkbox']").allTextContents();
    //console.log(printOptions)

     for (let days of checkboxes )
    {
        await days.click();
    }
 
    page.pause();
})