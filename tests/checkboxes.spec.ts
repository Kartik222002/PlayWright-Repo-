
import {Locator, test} from '@playwright/test'

test('checkboxes demo', async({page})=>{

   await page.goto('https://testautomationpractice.blogspot.com/')
      await page.waitForTimeout(5000)


//    await page.getByLabel('Sunday').check()
//    await page.waitForTimeout(5000)

   let days: string[] =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    //let checkboxes:Locator[] =days.map(i=>page.getByLabel(i))

   /* for(let ck of checkboxes)
    {
       await ck.click()
    }*/

       for(let day of days) //
    {
       await page.getByLabel(day).click()
    }



    /* for(let ck of checkboxes.slice(-3)) //last 3 checknoxes
    {
       await ck.click() //'Thursday', 'Friday', 'Saturday'
    }*/

     /*  for(let ck of checkboxes.slice(3, 5)) //starts with index 3 & ends with ending index -1
    {
       await ck.click() //'Wednesday', 'Thursday'
    } */

    /*for(let ck of checkboxes.slice(3))//start with checkbix 3 & continue till last element
    {
       await ck.click() //Wednesday', 'Thursday', 'Friday', 'Saturday'
    } */


     /*  let randomcheckboxes: number[]= [1, 4]

       for(let rc of randomcheckboxes)
       {
       await checkboxes[rc].click()
       } */

 
    await page.pause()

})