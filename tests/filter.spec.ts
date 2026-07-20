import {Locator, test} from '@playwright/test'

test("filter",async ({page})=>{
    page.goto("https://tutorialsninja.com/demo/index.php?route=common/home");
    let contactUsFilterButton:Locator = page.locator("footer a").filter({hasText:"Contact Us",visible:true});
    await contactUsFilterButton.click();



})
