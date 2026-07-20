import {expect, Locator, Page, test} from "@playwright/test"

/* 

open app -- before all ()

login 
    find product 

logout 


login 
    add product to cart 

logout 

close app -- after all ()

*/

let page: Page; //global variable declaration 

test.beforeAll("Open app",async ({browser})=>{
    page = await browser.newPage(); //initialize variable

    await page.goto("https://www.demoblaze.com/");

    
    
})

test.afterAll("Logout",async ()=>{
    await page.close();


})


test.beforeEach("login",async ()=>{
    await page.locator("#login2").click();
    let username:Locator = page.locator("#loginusername");
    await username.fill("FoxOp")
    const password:Locator = page.locator("#loginpassword");
    password.fill("Nitin@9922427163");
    await page.locator("//button[text()='Log in']").click();

    
    

})


test.afterEach("logout",async ()=>{
    let logedInuserName:Locator = await page.locator("#nameofuser")
    console.log(await logedInuserName.innerText())
    await expect(page.locator("#nameofuser")).toHaveText("Welcome FoxOp");
    await page.locator("#logout2").click();
    

})

test("all product details",async ()=>{
    let product:Locator=await page.locator("#tbodyid>div");
    console.log(await product.count());
    

})

test("add to cart",async ()=>{
    let product:Locator=await page.locator("//a[text()='Samsung galaxy s6']");
    await product.click();
    await page.waitForTimeout(3000);
    
    await page.on("dialog",async (dialog)=>{
        await dialog.accept();

    })
    
    await page.locator(".btn.btn-success.btn-lg").click();



})

