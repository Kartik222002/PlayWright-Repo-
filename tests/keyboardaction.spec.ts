//we can use keyboard.type() command but for that we need to find first element using locator then only in further action we can able to use keyboard.type() command.


import {test} from'@playwright/test'

test('keyboard action',async ({page})=>{
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register")
    await page.waitForTimeout(2000)
    await page.getByRole('textbox',{name:'First Name'}).pressSequentially("kartik",{delay:2000})
    await page.waitForTimeout(1000)

    await page.keyboard.press('Tab')
    await page.keyboard.type("Jaiswal")
    await page.waitForTimeout(1000)

    await page.keyboard.press('Tab')
    await page.keyboard.type("kartikjaiswal1065@gmail.com")
    await page.waitForTimeout(1000)

    await page.keyboard.press('Tab')
    await page.keyboard.type("9922427163")
    await page.waitForTimeout(1000)

    await page.keyboard.press('Tab')
    await page.keyboard.type('Nitin@9922427163')
    await page.waitForTimeout(2000)

    await page.keyboard.press('Tab')
    await page.keyboard.type('Nitin@9922427163')
    await page.waitForTimeout(1000)

    for(let i:number=1 ; i<5 ;i++)
    {
       await page.keyboard.press('Tab')
    }

    await page.pause()
    await page.waitForTimeout(2000)

    await page.close()

    

    
})
