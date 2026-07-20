import {test} from "@playwright/test"


test.describe("group1",async ()=>{
    test("test1",async ({page})=>{
        console.log("i am the first test");
    })

     test("test2",async ({page})=>{
        console.log("i am the second test");
    })
})

//npx playwright test tests/grouping.spec.ts --grep group1 -command to run

