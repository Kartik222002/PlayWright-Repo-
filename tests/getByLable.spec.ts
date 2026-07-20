import {test} from "@playwright/test"

test("getByLable",async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register");
    
    /* <label class="col-sm-2 control-label" for="input-firstname">
       First Name
       </label>  */

    await page.getByLabel("First Name").fill("kartik")
    await page.getByLabel("Last Name").fill("Jaiswal")
    await page.getByLabel("E-Mail").fill("kartikjaiswal1065@gmail.com")
    

})