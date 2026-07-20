import {expect, Locator, test} from "@playwright/test"

test("single selct drop down",async ({page})=>{
    //! We are doing all the action on static dropdown which allow us to select single value from dropdown
    await page.goto("https://testautomationpractice.blogspot.com/");

    //select option from the dropdown we have 4 way :-
    let countryDropdown:Locator=await page.locator("#country")
    /* await countryDropdown.selectOption("France ")//visible text 
    await countryDropdown.selectOption({value:"france"})//by using value attribute
    await countryDropdown.selectOption({index:2})//by using index 
    await countryDropdown.selectOption({label:"France"})//by using label  */

    //2)check number of option in the dropdown
    let dropdownOptionCount:Locator = await page.locator("#country>option")
    console.log(await dropdownOptionCount.count())
    await expect(dropdownOptionCount).toHaveCount(10)

    //3)check an option present in dropdown 
    let alloptions:string[]=(await page.locator("#country>option").allTextContents()).map(text=> text.trim())
    //console.log(alloptions)
    //let cleanoptions:any=alloptions.map(text=> text.trim())
    //console.log(cleanoptions);
    await expect(alloptions).toContain("Brazil")
    
    //4)Printing options from the dropdown 
    for (const option of alloptions) {
        console.log(option);
    }
    

})