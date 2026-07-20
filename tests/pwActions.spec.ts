import {expect, Locator, test} from "@playwright/test"

test.skip("Textbox action",async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    let name:Locator = await page.locator("#name");
    //assertion
    let maxLength:string | null=await name.getAttribute("maxlength");
    expect(maxLength).toBe("15")
    await expect(name).toBeVisible();
    await expect(name).toBeEnabled();
    await name.fill("kartik");
    let enteredValue:string=await name.inputValue();
    await expect(enteredValue).toBe("kartik")
    

})

test.skip("radio button",async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    let radioButton:Locator = await page.locator("#male");
    //assertion
    await expect(radioButton).toBeVisible();
    await expect(radioButton).toBeEnabled();
    //await radioButton.check();
    //radioButton.isChecked();
    expect(await radioButton.isChecked()).toBe(false);
    await radioButton.check();
    await expect(await radioButton.isChecked()).toBe(true);
    //await radioButton.uncheck()
    //await expect(radioButton.check()).not.toBe(true)


    
    

})

test("checkboxes",async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    //here we are stored a value in one string type of array then covert that using map function 
    let days:string[]=["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"];
    let checkboxes:Locator[] =days.map(daySelect=> page.getByLabel(daySelect));
    expect(checkboxes.length).toBe(7);
    //syntax - 
    for(let checkBoxSelect of checkboxes )
    {
        await checkBoxSelect.check();
        await expect(checkBoxSelect).toBeChecked();
    }




})