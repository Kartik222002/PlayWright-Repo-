import {test} from "@playwright/test"

test("@sanity this is sanity test",async({page})=>{
   await page.goto("https://www.google.com/");
})

//for running group -> npx playwright test tests/grouping.spec.ts --grep group1 
//command -> npx playwright test tests/tag.spec.ts --grep "(?=.*@sanity)(?=.*@regression)"
test("test2",{tag:["@sanity","@regression"]},async({page})=>{
    await page.goto("https://www.google.com/");
})






