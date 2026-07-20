/* in playwright some of pop up automatically handled by playwright but some pop up we have to handle manually like alert, confirm, prompt etc. these are called dialogs in playwright. 
 we can handle these dialogs using page.on('dialog') event listener. this event listener will be triggered when any dialog is opened on the page. we can use this event listener to handle the dialog and perform actions like accept, dismiss, get message etc. */
import {test} from '@playwright/test'

test('dialogs demo', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.waitForTimeout(2000)

    
    await page.on('dialog',async (dialog)=>{
    console.log(await dialog.message())
    await dialog.accept('kartik') //accept the dialog
        console.log('type of alert is :- '+await dialog.type())
    //console.log(await dialog.message()) //get the message of the dialog


    })

    await page.getByRole('button',{name:'Simple Alert'}).click()
    await page.waitForTimeout(4000)

    await page.getByRole('button',{name:'Confirmation Alert'}).click()
    await page.waitForTimeout(4000)

    await page.getByRole('button',{name:'Prompt Alert'}).click()
    await page.waitForTimeout(4000)
    let textVerification:string = await page.locator('#demo').innerText()
    console.log(textVerification)

})
