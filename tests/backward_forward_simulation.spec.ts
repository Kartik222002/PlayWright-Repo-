
import {Locator, test} from '@playwright/test'

test('checkboxes demo', async({page})=>{

   await page.goto('https://testautomationpractice.blogspot.com/')
      await page.waitForTimeout(5000)

      await page.goBack()
      await page.waitForTimeout(5000)

      await page.goForward()
        await page.title().then(t=>console.log(t))

    await page.reload()



})