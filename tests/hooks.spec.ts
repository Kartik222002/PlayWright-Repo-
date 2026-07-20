import {test} from "@playwright/test"

test.beforeEach("before each",()=>{
    console.log("i am before each method");
})

test.afterEach("after each",()=>{
    console.log("i am after each method");
})

test("test1",async ({page})=>{
        console.log("i am the first test");
    })

test("test2",async ({page})=>{
        console.log("i am the second test");
})

test("test3",async ({page})=>{
        console.log("i am the third test");
})

test("test4",async ({page})=>{
        console.log("i am the fourth test");
})

