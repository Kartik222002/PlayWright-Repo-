import {Page, test} from "@playwright/test"

test("switch window demo ",async ({page})=>{
    let parentpage = await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    let parentpage:Page = page ;

     let [childpage] = await Promise.all([
    page.context().waitForEvent('page'),
    page.locator("//a[normalize-space()='OrangeHRM, Inc']").click()
    ])

    childpage.title(); //fetch the title of the page 

    page.waitForTimeout(4000);

    parentpage.bringToFront(childpage); // go back to parent page  */
    

    



})