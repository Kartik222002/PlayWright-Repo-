import {test} from "@playwright/test"
import { url } from "node:inspector";
/* 1)capture the frame using frame() or frameLocator()
   2)then using loactor access the element and perform some action*/
test("frames",async ({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/");
    const frames=page.frames() // tells how many frames we have
    console.log("Number of frames",frames.length);

    //Approach 1 :- using frame method 
    /* let frame=page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1"});
    
    //always use a if else if we want to access any locator (when we are using typescript)
    if(frame)
    {
        //await frame.locator("[name='mytext1']").fill("hello");
        await frame.fill("[name='mytext1']","kartik");
    }
    else{
        console.log("there is no such frame is present");
    } */
    

    //Approach 2 :- using frameLocator method 
    await page.frameLocator("[src='frame_1.html']").locator('[name="mytext1"]').fill("op or wot")


})   
    test.only("inner frame",async ({page})=>{
        await page.goto("https://ui.vision/demo/webtest/frames/")
        let framesInformation=page.frames();
        console.log(framesInformation);

        let frame3=page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3'});
        if(frame3)
        {
            let innerFrame=await frame3.childFrames() //accessing child frames
            console.log(innerFrame.length); //printing how many child frames are there
            await innerFrame[0].getByLabel("I am a human").check(); //acessing first inner frame of 3rd frame and performing action

        }
        else{
            console.log("frames not present");
        }
    
    
    


})