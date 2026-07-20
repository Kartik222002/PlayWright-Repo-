import {expect, Locator, test} from "@playwright/test"

test.skip("assertion",async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/");
    await expect(page).toHaveTitle("Strore");
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/");
    //let logo:Locator= page.locator("//[text()='Qafox.com']");  
    //await expect(logo).toBeVisible();
    await expect(page.locator("//[text()='Qafox.com']")).toBeVisible();






})

test("soft asssertion",async ({page})=>{
  page.goto("https://tutorialsninja.com/demo/");
  await expect.soft(page).toHaveTitle("Store");
  await expect.soft(page).toHaveURL("https://tutorialsninja.com/demo/")

  let searchBar:Locator=page.locator("input[placeholder='Search']");
  await expect.soft(searchBar).toBeEnabled()

  


  

})


