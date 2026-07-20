import {Locator, test} from "@playwright/test"

test("web table",async ({page})=>{
        await page.goto("https://testautomationpractice.blogspot.com/")
        //rows count 
        let rows:Locator  = page.locator("//table[@name='BookTable']//tbody//tr");
        let rowsCount:any  = await rows.count();
        console.log(rowsCount);

        let tabData:any = page.locator("//table[@name='BookTable']//tbody//tr//td").all()
        for(let rowData of tabData)
        {
            console.log(await rowData.allInnerTexts())
        }
        
        

})