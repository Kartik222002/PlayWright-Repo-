//?The getByAltText locator in Playwright is used to find elements—typically images or areas—based on their alt text attribute. It is a highly recommended locator because it matches how a user interacts with the page (via screen readers or visual cues).
//! Playwright → JavaScript convention → starts at 0 and Selenium → XPath convention → starts at 1.



import{test} from '@playwright/test'
test('getByAltText',async ({page})=>{
    await page.goto('https://tutorialsninja.com/demo/')
    await page.waitForTimeout(2000)
    let macBook: boolean = await page.getByAltText('MacBook').nth(2).isVisible()
    console.log(macBook)
    await page.getByAltText('')
    
})
    
