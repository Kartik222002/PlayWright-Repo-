/* It finds elements on the page by their ARIA role (like button, link, textbox, etc.).
This makes tests more accessible-friendly and less fragile than using CSS selectors. */
/* General syntax
!page.getByRole(role, options?)

?role (string, required): The ARIA role of the element (e.g., "button", "textbox", "link", "heading").

?options (object, optional): Additional filters to narrow down the match. Common options include:

name: Accessible name of the element (visible text label).
exact: Boolean to match the name exactly.
checked: For checkboxes/radio buttons.
disabled: For disabled elements.
expanded: For expandable elements.
selected: For dropdowns or list items.
level: For headings (e.g., level: 1 for <h1>).
 */

import {test} from '@playwright/test'

test('getbyrole demo', async ({page})=>{

   await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register')


                        //role     //option
   await page.getByRole('textbox', {name: 'First Name'}).fill('vinay')
   await page.waitForTimeout(2000)

   await page.getByRole('textbox', {name: 'Last Name'}).fill('kumar')
      await page.waitForTimeout(2000)


   await page.getByRole('textbox', {name: 'E-Mail'}).fill('abc@gmail.com')
      await page.waitForTimeout(2000)

//                                        so here we have provided label value 
  await page.getByRole('textbox', {name: 'Telephone'}).fill('65674654')
     await page.waitForTimeout(2000)

     await page.getByRole('textbox', {name: 'Password'}).first().fill('abc')
     await page.waitForTimeout(2000)

     await page.getByRole('textbox', {name: 'Password Confirm'}).last().fill('abc')
     await page.waitForTimeout(2000)

    await page.getByRole('radio', {name: 'Yes'}).click()
         await page.waitForTimeout(2000)

       await  page.getByRole('checkbox').check()
       await page.waitForTimeout(2000)

       await page.getByRole('button', {name: 'Continue'}).click()
        await page.pause()


})