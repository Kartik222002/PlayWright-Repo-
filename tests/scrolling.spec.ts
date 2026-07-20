import {Locator, test} from "@playwright/test"

test("scrolling demo",async ({page})=>{
    await page.goto("https://orangehrm.com/contact-sales/");
    await page.evaluate(()=>window.scrollBy(0,1000)); //scroll down by 1000 pixel
    await page.waitForTimeout(3000);
    await page.evaluate(()=>window.scrollBy(0,-1000));//scroll up by 1000 pixel

    //scrolling till the end 
                                           //x-axis,y-axis 
    await page.evaluate(()=>window.scrollTo(0,document.body.scrollHeight)); //scroll till the end of page 
    await page.waitForTimeout(3000);
    await page.evaluate(()=>window.scrollTo(0,-document.body.scrollHeight)); // scroll till the start of the page from the downside to upperside 
    await page.waitForTimeout(3000);
    

    //scrolling upto a particular element 
   let scrollToTalentManagement:Locator = page.locator("//h3[text()='Talent Management']");
   await scrollToTalentManagement.scrollIntoViewIfNeeded();
   await page.pause();
})

/*method for scrolling 
evaluate(()=>window.scrollBy(x,y))*/  
