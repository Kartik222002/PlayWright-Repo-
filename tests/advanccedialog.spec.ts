import {expect, test} from "@playwright/test"

/*we have 3 types of dialog 1)-alert() 2)-confirm() 3)-prompt() 
dialog.type() - returns type of the dialog 
dialog.message() - returns message present inside a dialog 
dialog.accept() or dialog.dismiss() - this method is used to accept or cancel the alert , accept means ok and dismiss means cancel 
dialog.defaultValue() - this will return a default value present inside a prompt type alert 


*/

test("advanced dialog demo",async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    //register dialog handler before the action 
    //Enable alert handling 
    await page.on("dialog",async (dialog)=>{
       let typeOfDialog:string=dialog.type(); //return type of dialog  
       console.log(typeOfDialog);
       await expect(typeOfDialog).toContain("alert");
       console.log(await dialog.message());
       await dialog.accept(); 
       

    })



    await page.locator("#alertBtn").click();
    await page.waitForTimeout(4000);
})

test.only("confirmation alert",async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    //Enable alert handling 
       await page.on("dialog",async (dialog)=>{
       console.log(await dialog.type());
       await expect(dialog.type()).toContain("confirm");
       console.log(await dialog.message());
       await expect(dialog.message()).toContain("Press a button!")

       await dialog.dismiss(); 
       

    })

    await page.locator("#confirmBtn").click();
    await page.waitForTimeout(5000);
    let confirmMsg:string=await page.locator("#demo").innerText();
    expect(confirmMsg).toContain("You pressed Cancel!");
})





