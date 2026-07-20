import {test} from'@playwright/test'

test('getByTitle',async ({page})=>{
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register")
    await page.waitForTimeout(2000)
    //let titleOfPage:boolean = await page.getByTitle("naveenopencart").isVisible()
    //console.log(titleOfPage)
    page.close()
})

