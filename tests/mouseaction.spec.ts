import {Locator, test} from '@playwright/test'
//hover() - to hover to particular element
//dblclick() - for double click
//dragTo() - (pass targeted element on which you want to drop) , e.g source.dragTo(Target)

test('mouse action demo',async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    let pointMeButton:Locator = page.locator("//button[text()='Point Me']");
    await pointMeButton.hover();
    await page.waitForTimeout(2000);
    let copytext:Locator = page.locator("//button[text()='Copy Text']")
    await copytext.dblclick();
    await page.waitForTimeout(3000);

    let source:Locator = page.locator("//div[@id='draggable']//p");
    let target:Locator = page.locator("//div[@id='droppable']");

    await source.dragTo(target);

    await page.pause();



})