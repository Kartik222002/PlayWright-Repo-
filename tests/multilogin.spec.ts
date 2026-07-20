 import {BrowserContext, Page, test} from "@playwright/test"

//to test using different user at a time we need to introduce browser fixture.

test("multi user login" , async ({browser})=>{
    //create 2 windows
    let window1:BrowserContext  = await browser.newContext()
    let window2:BrowserContext = await browser.newContext()

    //create 2 pages
   let  page1:Page = await window1.newPage()
   let page2:Page = await window2.newPage()

   //login with admin credentials
   await page1.goto("https://tutorialsninja.com/demo/index.php?route=account/login")
   await page1.locator("#input-email").fill("adim123@gmail.com")
   await page1.locator("#input-password").fill("Pass@1234")
   await page1.waitForTimeout(4000)

   //login with user credentials
   await page2.goto("https://tutorialsninja.com/demo/index.php?route=account/login")
   await page2.locator("#input-email").fill("kartik@gmail.com")
   await page2.locator("#input-password").fill("Nitin@9922427163")
   await page2.waitForTimeout(4000)

   await page1.pause()
   await page2.pause()













})