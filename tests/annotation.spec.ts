import {Page, test} from "@playwright/test"
/* skip , fail , only , fixme , slow  */

/* Annotations are special markers you attach to your tests,
They act like sticky notes that tell Playwright either how to run the test */

/* test.skip(): Completely bypasses the test so it doesn't run.
   test.only(): Runs Specific or targeted test by , ignoring all others in the file.
   test.fixme(): Skips the test while flagging it as broken and needing a developer's attention.
   test.fail(): Marks a test as expected to fail due to a known bug (passes if it fails, errors if it succeeds).
   test.slow(): Triples the default timeout duration to give slow or heavy tests extra time to finish. */


test.skip("skip test",async ({page})=>{
     await page.goto("https://www.google.com/");
     console.log("hello from skip test");


})

//skip on the basis of condition 
test("skip2 test",async ({page,browserName})=>{
    test.skip(browserName==='chromium',"this test is skip if browser is chrome")
     await page.goto("https://www.google.com/");
     console.log("hello from skip2 test");


})
test.only("only test",async ({page})=>{
     
    await page.goto("https://www.google.com/");
    console.log("hello from only test");


})

test.fixme("fixme test",async ({page})=>{
     
    await page.goto("https://www.google.com/");
    console.log("hello from fixme test");


})

test.only("slow test",async ({page})=>{
     test.slow() //default time is 30 sec for locator and test.... 5 sec is for expect  , so after using test.slow() it will triple the default time 
    await page.goto("https://www.google.com/");
    console.log("hello from slow test");


})

test.fail("fail test",async ({page})=>{
    await page.goto("https://www.google.com/");
    console.log("hello from fail test");
})





