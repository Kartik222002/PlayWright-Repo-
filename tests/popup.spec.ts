import {test,Page} from "@playwright/test"
import { title } from "node:process";

test("popup handle",async ({browser})=>{
    let context = await browser.newContext();
    let mainPage=await context.newPage();
    await mainPage.goto("https://testautomationpractice.blogspot.com/");

    //! this is a imporatnt line, In Playwright, this specific pattern is used to handle and capture a newly opened popup window or tab that triggers asynchronously when an element is clicked.
    
    let [popUp]=await Promise.all([mainPage.waitForEvent("popup"),mainPage.locator("#PopUp").click()])
    
    //console.log(context.pages().length);
    let allPopUpWindows:Page[] = context.pages(); //return array of pages
    console.log(allPopUpWindows.length)
    console.log(allPopUpWindows[0].url());
    console.log(allPopUpWindows[1].url());
    

    for(let pW of allPopUpWindows){
        let tiltle=await pW.title()
        if(title.includes("Automation Testing Practice")){
            continue;

        }
        /* else if(title.includes("Selenium")){
            pW.locator(".selenium-button.selenium-webdriver.text-uppercase.fw-bold").click();
            
        }
        else{
            console.log("url not found")
        } */
    }
})