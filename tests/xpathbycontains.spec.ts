import { test } from "@playwright/test";

test("xpath",async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register");
    page.locator("//input[contains(@placeholder,'First')]")
    //we can enter partial value when we are using contains function 
    
})