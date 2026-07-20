import {test} from '@playwright/test'
test('getbyplaceholder',async ({page})=>{
await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register")
await page.waitForTimeout(2000)

//<input type="text" name="firstname" value="" placeholder="First Name" id="input-firstname" class="form-control">
await page.getByPlaceholder('First Name').fill('Kartik')
await page.waitForTimeout(2000)
await page.getByPlaceholder('Last Name').pressSequentially('Jaiswal',{delay:1000})
await page.waitForTimeout(2000)
await page.getByPlaceholder('E-Mail').fill('kartikjaiswal1065@gmail.com')
await page.waitForTimeout(2000)
await page.getByPlaceholder('telephone').fill('9922427163')
await page.pause()







})

