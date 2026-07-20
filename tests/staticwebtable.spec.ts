import {Locator, test} from "@playwright/test"

test("statticwebtable demo",async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    //rows count 
    let rows:Locator  = page.locator("//table[@name='BookTable']//tbody//tr");
    let rowsCount:any  = await rows.count();
    console.log(await rows.count());
    console.log(rowsCount);

    //column count 
    let column:Locator = page.locator("//table[@name='BookTable']//tbody//tr//th");
    console.log("count of column is :- " +await column.count()); 

    //fetching 4th row whole data 
    let fourthRow:Locator = page.locator("//table[@name='BookTable']//tbody//tr").nth(3).locator("td");
    //console.log(await fourthRow.allInnerTexts());

    let datafetchOfRow:string[] = await fourthRow.allInnerTexts();
    console.log(datafetchOfRow);


   //!fetching 3rd and 4th row data 
   let allRows:Locator[] = await rows.all()
   //internally - page.locator("//table[@name='BookTable']//tbody//tr").all()

   for(let a of allRows.slice(3,5) )
   {
    let thirdAndFourthRowEle:string[] = await a.locator("td").allInnerTexts();
    console.log(thirdAndFourthRowEle);
   }
   
   //!fetching all row data 
   let allElementData:Locator = page.locator("//table[@name='BookTable']//tbody//tr//td")
   console.log(await allElementData.allInnerTexts()); 

    







})