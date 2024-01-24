import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import LoginPage from "../../pages/loginPage";

let loginPage: LoginPage;

setDefaultTimeout(60 * 1000 * 2)

Given('User navigates to the application', async function () {
    await fixture.page.goto(process.env.BASEURL);
    fixture.logger.info("Navigated to the application")
})

When('User enters the username as {string}', async function (username) {
    loginPage = new LoginPage(fixture.page);
    await loginPage.enterUserName(username);
});

When('User enters the password as {string}', async function (password) {
    await loginPage.enterPassword(password);
})

When('User clicks on the login button', async function () {
    await loginPage.clickLoginButton();
    await fixture.page.waitForLoadState();
    fixture.logger.info("Waiting for 2 seconds")
    await fixture.page.waitForTimeout(2000);
});

Then('Login should be successful', async function () {
    const title = fixture.page.locator("//span[contains(@class,'title')][1]");
    await expect(title).toBeVisible();
})

Then('The error message {string} should be displayed', async function (err) {
    const errMesssage = loginPage.getErrorMessage();
    await expect(errMesssage).toBeVisible();
    await expect(errMesssage).toHaveText(err);

})
