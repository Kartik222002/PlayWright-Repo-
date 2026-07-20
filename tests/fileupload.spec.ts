import {expect, test} from "@playwright/test"

//? setImputFiles() method used for the uploading files 


test.skip("upload file",async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("#singleFileInput").setInputFiles("tests\\files\\11thMay_Assertions.txt");
    await page.waitForTimeout(4000);
    await page.locator("//button[text()='Upload Single File']").click();
    await page.waitForTimeout(2000);
    let singleFileSelected: string | null = await page.locator("#singleFileStatus").textContent();
    await page.waitForTimeout(1000);
    console.log(singleFileSelected)
    expect(singleFileSelected).toContain("11thMay_Assertions.txt");



})

test("multiple file upload",async ({page})=>{

    //test.setTimeout(50000);
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("#multipleFilesInput").setInputFiles(["tests\\files\\11thMay_Assertions.txt","tests\\files\\12thMay_Switchwindows.txt"])
    await page.waitForTimeout(3000)
    await page.locator("//button[text()='Upload Multiple Files']").click(); 
    await page.waitForTimeout(3000)
    let multiFileSelected:any = await page.locator("#multipleFilesStatus").innerText();
    expect(multiFileSelected).toContain("11thMay_Assertions.txt");
    expect(multiFileSelected).toContain("12thMay_Switchwindows.txt");

    
    
    


})