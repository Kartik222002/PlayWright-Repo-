import {expect, Locator, test} from "@playwright/test"

test("selecting multiple option in dropdown",async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    //await page.locator("#colors").selectOption(["Red","Blue"]) //select by using visible text 
    //await page.locator("#colors").selectOption(["red","blue","green"]) //select using value
    //await page.locator("#colors").selectOption([{index:0},{index:1},{index:2}])//select by using index 
    await page.locator("#colors").selectOption([{label:"Red"},{label:"Blue"}])//select by using label  */
    await page.pause()

    //2)count all the options 
    let dropDownAllElements:Locator=await page.locator("#colors [value]")
    console.log(await dropDownAllElements.count())
    


    //3)print all the options
    console.log(await dropDownAllElements.allInnerTexts());

    //4)check an option present in dropdown 
    expect(await dropDownAllElements.allInnerTexts()).toContain("Blue")
    


    


})