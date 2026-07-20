import {Locator, test} from "@playwright/test"

test ("filter 2",async ({page})=>{
  page.goto("https://www.google.com/");
  let searchBox:Locator=page.locator("[title='Search']");
  await searchBox.fill("selenium");
  page.waitForTimeout(4000)
  //searchBox.filter({hasText:})

  



})