import{test} from '@playwright/test'

test('getByText Demo',async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register")
    let registerAccountPageVerification: string | null=await page.getByText('Register Account').textContent()
    console.log(registerAccountPageVerification)
    



})