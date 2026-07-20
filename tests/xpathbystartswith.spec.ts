import {test} from "@playwright/test"


test("starts-with demo",async ({page})=>{
   await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register");
   await page.locator("//input[starts-with(@id,'input-firstname')]").fill("kartik");
    await page.locator("//input[starts-with(@id,'input-lastname')]").fill("Jaiswal");
    await page.locator("//input[starts-with(@placeholder,'E-Mail')]").fill("kartikjaiswal1065@gmail.com");
    await page.locator("//a[starts-with(text(),'Contact')]").click();
    await page.locator("//a[starts-with(text(),'About')]").click();
})