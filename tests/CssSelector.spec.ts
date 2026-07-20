//Locators - css selectors, x path, getbyplaceholder, getbytext, getbyalttext, getbylabel
    //getbytitle, getbyrole

    //css selector
    //when it has a id - tagname#idvalue
    //when it has a classname - tagname.classvalue
    //when it no id or classname - tagname[attribute=value]


import {test} from '@playwright/test'

test.skip('CssSelector',async({page})=>{
await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register")
await page.waitForTimeout(2000)
await page.locator("input.form-control").nth(1).fill("Kartik")
await page.waitForTimeout(2000)
await page.locator("input#input-lastname").fill("Jiaswal")
await page.waitForTimeout(2000)
await page.locator('input[name="telephone"]').fill("9922427163")
await page.pause()

})

test("css Selector",async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register")
    await page.locator("[id='input-firstname']").fill("kartik")
    await page.locator("#input-lastname").fill("Jaiswal")
     

})